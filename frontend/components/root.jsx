// import dependencies
import React from "react";
import { BrowserRouter, Router } from "react-router-dom";

// import App
import App from "./app";

const Root = () => {
  return(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default Root;
