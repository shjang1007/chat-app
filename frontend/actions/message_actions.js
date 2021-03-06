// import  request to the server
import * as messageApiUtil from "../util/message_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const fetchMessages = () => (dispatch) => {
  return messageApiUtil.fetchMessages().then(
    (data) => dispatch(receiveMessages(data.data.messages))
  );
}

export const createMessage = (message) => (dispatch) => {
  return messageApiUtil.createMessage(message).then(
    (data) => dispatch(addMessage(data.data.message))
  );
};

export const deleteMessage = (id) => (dispatch) => {
  return messageApiUtil.deleteMessage(id).then(
    (id) => dispatch(removeMessage(id))
  )
}

// export const updateMessage

export const receiveMessages = (messages) => {
  return({
    type: RECEIVE_MESSAGES,
    messages
  });
};

export const addMessage = (message) => {
  return({
    type: ADD_MESSAGE,
    message
  });
};

export const removeMessage = (id) => {
  return({
    type: DELETE_MESSAGE,
    id
  });
};
