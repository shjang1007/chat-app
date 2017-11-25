import Socket from "socket.io";

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

}
