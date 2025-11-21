const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h2>Name: Aquivido, Jean Paula G.</h2>
        <h3>Course & Section: BSIT 4102</h3>
        <p><b>Inspirational Quote:</b></p>
        <i>"The future belongs to those who believe in the beauty of their dreams."</i>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
