// import types
import { RECEIVE_USER, REMOVE_USER } from "../actions/simple_session_actions";

const _initialState = {};

const simpleSessionReducer = (oldState=_initialState, action) => {

  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case REMOVE_USER:
      return {};
    default:
      return oldState;
  };
};

export default simpleSessionReducer;
