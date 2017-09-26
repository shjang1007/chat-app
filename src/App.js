import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <section>
        <Link to={"/"}>Go back to homepage</Link>
        <form>
          <label>
            Type your topics
            <input></input>
          </label>
          <button>Submit!</button>
        </form>
      </section>
    )
  }
}

export default App;
