import { Server } from "socket.io";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "./types/socket";

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(3000, {
  cors: {
    origin: ['http://localhost:5173']
  }
})

io.on('connection', socket => {
  socket.on("send-message", message => {
    io.emit("receive-message", message)
  })

  socket.on('join-room', room => {
    socket.join(room)
    io.emit('joined-room', room)
  })
})

