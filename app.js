const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const html = `
    <h2>Name: Aquivido, Jean Paula G.</h2>
    <h3>Course & Section: BSIT 4102</h3>
    <p><b>Inspirational Quote:</b></p>
    <i>"The future belongs to those who believe in the beauty of their dreams."</i>
  `;

  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
