const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.on || 3500;

app.use(express.json());
app.use(express.text());
app.use(cors());

app.post("/test", (req, res) => {
    const text = req.body;
    console.log(text)
    res.status(200).send("Message recieved");
})

app.listen(PORT, ()=> console.log(`Server running at port ${PORT}`))