const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')


const PORT = process.env.PORT || 5000;

const router = require('./router')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors())

app.use(router)

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

io.on('connection', (socket) => {
  console.log("we have a new connection!!!");

  socket.on('join', ({name, room}, callback) => {
    console.log(name,room)

  })

  socket.on('disconnect', ()=>{
    console.log('User had left!!!')
  })
})




server.listen(PORT, ()=> console.log(`Sever has started on port ${PORT}`))