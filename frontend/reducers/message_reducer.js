import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, DELETE_MESSAGE } from "../actions/message_actions";

const _initialState = {};

const messageReducer = (oldState = _initialState, action) => {
  // Keep oldState immutable
  Object.freeze(oldState);

  let newState;

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      debugger
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
