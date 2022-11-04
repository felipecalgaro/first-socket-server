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
  socket.on("send-message", (message, room) => {
    socket.to(room).emit("receive-message", message)
  })

  socket.on('join-room', room => {
    socket.join(room)
    socket.to(room).emit('joined-room', room)
  })
})

// primeira vez q entra da certo, reload e n da mais, mas da pro outro
// tlvz seja funcionalidade
