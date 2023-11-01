const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
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

app.get("/", (req, res) => {
  console.log("Get")
  res.send("Hello world");
})

app.post("/test", (req, res) => {
  console.log(req.body);
  console.log("hello");
  res.status(200).json({msg: "Success"});
});

server.listen(PORT, () => console.log(`Server running at port using socket ${PORT}`));
