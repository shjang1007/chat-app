import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <Link to={"/auth/google"}>To Google Auth</Link>
        <Link to={"/logout"}>Log the F out</Link>
      </section>
    )
  }
}

export default App;
