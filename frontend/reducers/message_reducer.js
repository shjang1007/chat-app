import { RECEIVE_MESSAGES, ADD_MESSAGE, DELETE_MESSAGE } from "../actions/message_actions";

const _initialState = {
  messages: [];
};

const messageReducer = (oldState = _initialState, action) => {
  // Keep oldState immutable

  let newState;

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return {
        messages: action.messages;
      }
    case ADD_MESSAGE:
      newState = Object.assign(oldState, action.message);
      return newState;
    case DELETE_MESSAGE:
      newState = Object.assign(oldState, action.message);
      delete newState[action.messageId];
      return newState;
    default:
      return oldState;
  }
};

export default messageReducer;
