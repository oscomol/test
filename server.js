const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
const PORT = 3500;

app.use(express.json());
app.use(express.text());
app.use(cors());

io.on('connection', (socket) => {
  console.log('a user connected with id: ', socket.id);
});

app.post("/test", (req, res) => {
  console.log(req.body);
  console.log("hello")
  res.status(200).json({msg: "Success"})
})

app.listen(PORT, () => console.log(`Server running at port using socket ${PORT}`));
