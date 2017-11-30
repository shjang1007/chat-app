// Import dependencies
const express = require("express");
const router = express.Router();

// Import controller files
const messageController = require("./controllers/message-controller");

router.route("/users")
.post((req, res) => {
  }
)

router.route("/messages")
  .get(messageController.getMessages)
  .post(messageController.addMessages)
  .patch(messageController.updateMessages);

router.route("/messages/:id")
  .get(messageController.getMessage)
  .delete(messageController.deleteMessage);
