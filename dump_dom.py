import subprocess

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
url = "http://localhost:3001"
dom_path = r"c:\D Drive\Dog\dom.html"

cmd = [
    chrome_path,
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    "--virtual-time-budget=5000",
    "--dump-dom",
    url
]

print(f"Running command: {' '.join(cmd)}")
res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

with open(dom_path, "w", encoding="utf-8") as f:
    f.write(res.stdout)

print("DOM written to", dom_path)
