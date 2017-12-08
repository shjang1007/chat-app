// import dependencies
import { createStore, applyMiddleware } from "redux";
import thunk from "../middleware/thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );

  store.subscribe(() => {
    const { user } = store.getState();
    localStorage.state = JSON.stringify({ user });
  });


  return store;
};

export default configureStore;
