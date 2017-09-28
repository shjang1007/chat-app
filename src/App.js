import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <section>
        <Link to={"/"}>Go back to homepage</Link>
      </section>
    )
  }
}

export default App;
