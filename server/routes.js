// Import dependencies
import express from "express";
const router = express.Router();

// Import controller files
import * as messageController from "./controllers/messages-controller";

// router.route("/users")
// .post((req, res) => {
//   }

// for now just create message and delete message and update message
router.route("/messages")
  .get(messageController.fetchMessages)
  .post(messageController.createMessage);

router.route("/messages/:id")
  .patch(messageController.updateMessage)
  .delete(messageController.deleteMessage);

  export default router;
