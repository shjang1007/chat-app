// import Dependencies
import React from "react";
import ReactDOM from "react-dom";

// import store
import configureStore from "./store/store";

// import Root Component holding all components
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const store = configureStore()

  ReactDOM.render(<Root store={ store }/>, root);
});
