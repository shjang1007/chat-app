import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <section>
        I am inside a react app
        <ul>
          <li><a href='/auth/google'>Google</a></li>
          <li><a href='/logout'>logout</a></li>
          </ul>
      </section>
    )
  }
}

export default App;
