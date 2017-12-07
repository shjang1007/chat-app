// import combineReducers to combine all the reducers without having to import each reducer separetly
import { combineReducers } from "redux";

// import reducers to be combined
import messageReducer from "./message_reducer";
import simpleSessionReducer from "./simple_session_actions";

export default combineReducers({
  messageState: messageReducer,
  user: simpleSessionReducer
});
