// Create web server
const http = require("http");

const server = http.createServer((req, res) => {
  // Check the request path
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello, World!</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(8080);
console.log("Server is running on port 8080");