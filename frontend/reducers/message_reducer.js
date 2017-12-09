import { RECEIVE_MESSAGES, ADD_MESSAGE, DELETE_MESSAGE } from "../actions/message_actions";

const _initialState = {
  messages: [];
};

const messageReducer = (oldState = _initialState, action) => {

  let updatedMessages;

  switch (action.type) {
    case RECEIVE_MESSAGES:

      return { messages: action.messages; }

    case ADD_MESSAGE:
      updatedMessages = oldState.messages.push(action.message);

      return { messages: updatedMessages };

    case DELETE_MESSAGE:
      updatedMessages = oldState.messages;
      let index;
      for (let i = 0; i < updatedMessages.length; i++) {
        const element = updatedMessages[i];
        if (element.id === action.messageId) {
          index = i;
          break
        };
      };

      updatedMessages.splice(index, 1);

      return updatedMessages;
    default:
      return oldState;
  }
};

export default messageReducer;
