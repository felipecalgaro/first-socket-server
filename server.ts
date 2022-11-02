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
  console.log(socket.id);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
})

