import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <a href="/auth/google/">Sign In</a>

        <Link to={"/logout"}>Log the F out</Link>
      </section>
    )
  }
}

export default App;
