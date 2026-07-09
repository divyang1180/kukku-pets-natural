import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = clean(body.name);
    const email = clean(body.email);
    const subject = clean(body.subject);
    const message = clean(body.message);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Please fill in all fields." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO ?? user;
    const secure =
      (process.env.SMTP_SECURE ?? String(port === 465)).toLowerCase() ===
      "true";

    if (!host || !user || !pass || !to) {
      return NextResponse.json(
        { message: "Contact email service is not configured yet." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: process.env.CONTACT_FROM ?? `"Kukku Pets Natural" <${user}>`,
      to,
      replyTo: email,
      subject: `Website enquiry: ${subject}`,
      text: [
        "New website enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #1D3557; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New website enquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <div style="margin-top: 20px;">
            <strong>Message:</strong>
            <p style="white-space: normal;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { message: "Unable to send message right now. Please try again later." },
      { status: 500 }
    );
  }
}
