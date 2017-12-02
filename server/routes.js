// Import dependencies
const express = require("express");
const router = express.Router();

// Import controller files
const messageController = require("./controllers/messages-controller");

// router.route("/users")
// .post((req, res) => {
//   }
// )

console.log(messageController)

// for now just create message and delete message and update message
router.route("/messages")
  .post(messageController.createMessage);

router.route("/messages/:id")
  .patch(messageController.updateMessage)
  .delete(messageController.deleteMessage);
