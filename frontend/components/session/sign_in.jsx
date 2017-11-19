// Import dependencies
import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <a href="/auth/google/">Sign In</a>
        <br/>
        <a href="/logout">Log out</a>
      </section>
    )
  }
}

export default SignIn;
