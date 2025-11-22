const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile | Jean Paula G. Aquivido</title>
        
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Arial, Helvetica, sans-serif;
            }

            body {
                background: linear-gradient(to right, #74ebd5, #acb6e5);
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .card {
                background: white;
                width: 420px;
                padding: 30px;
                border-radius: 18px;
                box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                text-align: center;
                animation: fadeIn 1.2s ease;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to   { opacity: 1; transform: translateY(0); }
            }

            .profile-pic {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                background: #ddd;
                margin: 0 auto 15px;
                border: 5px solid #74ebd5;
                background-image: url('https://cdn-icons-png.flaticon.com/512/1946/1946429.png');
                background-size: cover;
            }

            h2 {
                font-size: 26px;
                color: #333;
                margin-bottom: 5px;
            }

            h3 {
                font-size: 18px;
                color: #666;
                margin-bottom: 15px;
            }

            .quote-title {
                font-weight: bold;
                font-size: 18px;
            }

            .quote {
                color: #444;
                font-style: italic;
                font-size: 16px;
                margin-top: 10px;
            }
        </style>
    </head>

    <body>
        <div class="card">
            <div class="profile-pic"></div>

            <h2>Jean Paula G. Aquivido</h2>
            <h3>BSIT 4102</h3>

            <p class="quote-title">Inspirational Quote (Ayaka):</p>
            <p class="quote">"When the snow melts and the warm spring breeze blows, people will know that I have returned." — Kamisato Ayaka</p>
        </div>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
