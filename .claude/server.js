const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5500;
const ROOT = path.join(__dirname, "..");

const mime = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

http.createServer((req, res) => {
  let filePath = path.join(ROOT, req.url === "/" ? "index.html" : req.url);
  if (!fs.existsSync(filePath)) {
    res.writeHead(404); res.end("Not found"); return;
  }
  const ext = path.extname(filePath);
  res.writeHead(200, { "Content-Type": mime[ext] || "text/plain" });
  fs.createReadStream(filePath).pipe(res);
}).listen(PORT, () => console.log(`Serving on http://localhost:${PORT}`));
