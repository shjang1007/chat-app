import { socket } from "socket.io";
const io = socket(server);

// Trying to determine what below variables are used for
let chat;
let guestNumber = 1;
const nickNames = {};
let namesUsed = [];
const currentRoom = {};

class SocketServer {
  // Method to tell server to add more guests to socket server
  assignGuestName(socket, guestNumber, nickNames, namesUsed) {
    const id = `${guestNumber}`;
    nickNames[socket.id] = id;
    socket.emit("nameResult", {
      success: true,
      id
    });

    namesUsed.push(id);
    return guestNumber + 1;
  }

  handleClientDisconnections(socket) {
    socket.on("disconnect", () => {
      const id = socket.id
      const nameIdx = namesUsed.indexOf(nickNames[id]);
      delete nickNames[id];
      namesUsed.splice(id, 1);
    })
  }

  handleMessageBroadcasting(socket) {
    socket.on("message", (message) => {
      socket.broadcast.to(message.room).emit("message", {
        text: `${nickNames[socket.id]}: ${message.text}`
      })
    })
  }

  handleRoomJoining(socket) {
    socket.on("join", (room) => {
      socket.leave(currentRoom[socket.id]);
      this.joinRoom(socket, room.newRoom);
    });
  }

  joinRoom(socket, room) {
    socket.join(room);
    currentRoom[socket.id] = room;

    socket.emit("joinResult", { room });
    socket.broadcast.to(room).emit("message", {
      text: `${nickNames[socket.id]} has joined ${room}!`
    });

    chat.of("/").in(`${room}`).clients((err, sockets) => {
      if(err) return console.error(err);

      const usersInRoom = sockets.map((sID) => nickNames[sId]).join(", ");
      const usersInRoomSummary = `Users currently in ${room}: ${usersInRoom}`;

      socket.emit("message", { text: usersInRoomSummary});
    });
  }

  listRooms(socket) {
    const rooms = Object.keys(socket.rooms);
    return room.filter((room) => {
      return room !== socket.id;
    });
  }

  listen(server) {
    io.on("connection", (socket) => {
      // use helper methods upon websocket connection
      guestNumber = this.assignGuestName(
        socket, guestNumber, nickNames, namesUsed
      )
      this.joinRoom(socket, "lobby");
      this.handleMessageBroadcast(socket, nickNames);
      this.handleRoomJoining(socket);

      socket.on("rooms", () => {
        const sockets = io.sockets.sockets;
        let rooms = [];

        sockets.forEach((socket) => {
          return rooms = rooms.concat(this.listRooms(sockets[socket]));
        });

        rooms.Array.from(new Set(rooms));
        socket.emit("rooms", rooms);
      });
    });

    this.handleClientDisconnection(socket);
  }
}

// Possible future methods
// 1. Name change request
