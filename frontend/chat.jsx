// Import Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Import Root Component holding all components
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<Root/>, root);
});
