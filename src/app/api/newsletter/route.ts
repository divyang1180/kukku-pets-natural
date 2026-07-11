import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    const trimmedEmail = email.trim();

    if (!emailPattern.test(trimmedEmail)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO ?? user;
    const secure = (process.env.SMTP_SECURE ?? String(port === 465)).toLowerCase() === "true";

    // If SMTP email service is configured, send mail
    if (host && user && pass && to) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: process.env.CONTACT_FROM ?? `"Kukku Pets Natural" <${user}>`,
        to,
        subject: `New Newsletter Subscription: ${trimmedEmail}`,
        text: `New subscriber email address: ${trimmedEmail}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #1D3557; line-height: 1.6;">
            <h2 style="margin: 0 0 16px;">New Newsletter Subscription</h2>
            <p><strong>Email Address:</strong> ${trimmedEmail}</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ message: "Successfully subscribed to the newsletter!" });
  } catch (error) {
    console.error("Newsletter subscription failed:", error);
    return NextResponse.json(
      { message: "Unable to process subscription right now. Please try again later." },
      { status: 500 }
    );
  }
}
