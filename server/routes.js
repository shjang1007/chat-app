// Import dependencies
const express = require("express");
const router = express.Router();

// Import controller files
const messageController = require("./controllers/message-controller");

router.route("/users")
.post((req, res) => {
  }
)

// for now just create message and delete message and update message
router.route("/messages")
  .post(messageController.createMessages);

router.route("/messages/:id")
  .patch(messageController.updateMessages)
  .delete(messageController.deleteMessage);
