// import  request to the server
import * as messageApiUtil from "../util/message_api_util";

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const createMessage = (message) => (dispatch) => {
  return messageApiUtil.createMessage(message).then(
    (message) => dispatch(receiveMessage(message));
  );
};

export const deleteMessage = (id) => (dispatch) => {
  return messageApiUtil.deleteMessage(id).then(
    (id) => dispatch(deleteMessage(id));
  )
}

export const updateMessage

export const receiveMessage = (message) => {
  return({
    type: RECEIVE_MESSAGE,
    message
  });
};

export const deleteMessage = (id) => {
  return({
    type: DELETE_MESSAGE,
    id
  });
};
