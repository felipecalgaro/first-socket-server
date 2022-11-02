export interface ServerToClientEvents {
  'receive-message': (message: string) => void;
  'joined-room': (room: string) => void
}

export interface ClientToServerEvents {
  'send-message': (message: string) => void
  'join-room': (room: string) => void
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}