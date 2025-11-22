const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Jean Paula Aquivido | Profile</title>

      <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: 'Poppins', sans-serif;
          }

          body {
              background: linear-gradient(to bottom right, #a1c4fd, #c2e9fb);
              padding: 40px;
              display: flex;
              justify-content: center;
          }

          .container {
              width: 800px;
              background: white;
              padding: 30px;
              border-radius: 18px;
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
              animation: fadeIn 1s ease;
          }

          @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
          }

          .header {
              text-align: center;
              margin-bottom: 25px;
          }

          .profile-img {
              width: 150px;
              height: 150px;
              border-radius: 50%;
              margin: auto;
              border: 5px solid #74b9ff;
              background-image: url('https://cdn-icons-png.flaticon.com/512/1946/1946429.png');
              background-size: cover;
              background-position: center;
          }

          h1 {
              font-size: 32px;
              margin-top: 15px;
              color: #2d3436;
          }

          h2 {
              font-size: 20px;
              color: #636e72;
              margin-bottom: 20px;
          }

          section {
              margin-top: 25px;
          }

          .section-title {
              font-size: 22px;
              margin-bottom: 8px;
              color: #0984e3;
              border-left: 5px solid #0984e3;
              padding-left: 10px;
              font-weight: bold;
          }

          .about-text, .quote, .skills-list {
              font-size: 17px;
              color: #2d3436;
              line-height: 1.6;
              margin-top: 10px;
          }

          .skills-list li {
              margin-left: 18px;
          }

          .quote {
              font-style: italic;
              color: #444;
              background: #f1f2f6;
              padding: 12px;
              border-radius: 10px;
          }

          .contact {
              text-align: center;
              margin-top: 30px;
          }

          .contact a {
              margin: 0 10px;
              font-size: 26px;
              text-decoration: none;
              color: #0984e3;
              transition: 0.3s;
          }

          .contact a:hover {
              color: #6c5ce7;
          }
      </style>
  </head>

  <body>

      <div class="container">
          
          <div class="header">
              <div class="profile-img"></div>
              <h1>Jean Paula G. Aquivido</h1>
              <h2>BSIT Student</h2>
          </div>

          <section>
              <div class="section-title">About Me</div>
              <p class="about-text">
                  I am Jean Paula Aquivido, a BSIT student from section 4102. I enjoy learning new technologies, 
                  creating websites, and building beautiful user interfaces. I am passionate about design, 
                  coding, and improving my skills every day.
              </p>
          </section>

          <section>
              <div class="section-title">Education</div>
              <p class="about-text">📘 Bachelor of Science in Information Technology  
              <br>❤️ Section: BSIT 4102</p>
          </section>

          <section>
              <div class="section-title">Favorite Quote:</div>
              <p class="quote">
                  "Life and death are but a journey. When butterfly alights on the branch, what withers will bloom anew."  
                  — Castorice :contentReference[oaicite:1]{index=1}
              </p>
          </section>

          <section class="contact">
              <div class="section-title" style="text-align:center;">Contact</div>
              <a href="#">📧</a>
              <a href="#">📱</a>
              <a href="#">🌐</a>
          </section>

      </div>

  </body>
  </html>
  `;

  res.end(html);
});

server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
