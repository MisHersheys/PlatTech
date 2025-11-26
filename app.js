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
    position: relative;
    background-image: url('https://upload-os-bbs.hoyolab.com/upload/2025/02/14/7912062/b69363436abc0d08e2019fd6a2b3c6b3_1594177979636235351.jpg?x-oss-process=image%2Fresize%2Cs_1920%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 40px;
    display: flex;
    justify-content: center;
}

body::before {
    content: '';
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    background-size: cover;
    background-position: center;
    filter: blur(20px) brightness(0.7); /* stronger blur + slight darkening */
    z-index: -1;
}

.container {
    width: 800px;
    background: rgba(255, 255, 255, 0.15); /* slightly more transparent */
    padding: 30px;
    border-radius: 18px;
    backdrop-filter: blur(20px); /* increase blur inside container */
    box-shadow: 0 8px 25px rgba(0,0,0,0.4);
    animation: fadeIn 1s ease;
    border: 1px solid rgba(255,255,255,0.25);
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
              border: 6px solid #BFA7FF;
              background-image: url('https://upload-os-bbs.hoyolab.com/upload/2025/02/14/7912062/b69363436abc0d08e2019fd6a2b3c6b3_1594177979636235351.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70');
              background-size: cover;
              background-position: center;
              box-shadow: 0 0 20px #BFA7FF;
          }

          h1 {
              font-size: 32px;
              margin-top: 15px;
              color: #FFFFFF;
              text-shadow: 0 0 10px rgba(255,255,255,0.4);
          }

          h2 {
              font-size: 20px;
              color: #E4D8FF;
              margin-bottom: 15px;
          }

          .section-title {
              font-size: 22px;
              margin-bottom: 8px;
              color: #D7E8FF;
              border-left: 5px solid #BFA7FF;
              padding-left: 10px;
              font-weight: bold;
          }

          .about-text, .quote {
              font-size: 17px;
              color: #F0E9FF;
              line-height: 1.6;
              margin-top: 10px;
          }

          .quote {
              font-style: italic;
              background: rgba(255,255,255,0.1);
              padding: 12px;
              border-radius: 10px;
              border: 1px solid rgba(255,255,255,0.25);
          }

          .contact {
              text-align: center;
              margin-top: 30px;
          }

          .contact a {
              margin: 0 10px;
              font-size: 26px;
              text-decoration: none;
              color: #D7E8FF;
              transition: 0.3s;
          }

          .contact a:hover {
              color: #BFA7FF;
              text-shadow: 0 0 10px #BFA7FF;
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
                  I am Jean Paula Aquivido, a BSIT student from section 4102. I enjoy learning new 
                  technologies, creating websites, and building beautiful user interfaces. I am passionate 
                  about design, coding, and improving my skills every day.
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
                  "Even in the quietest snowfall, destiny whispers — guiding those who dare to listen."  
                  — Castorice
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
    console.log(`Server running on port ${PORT}`);
});
