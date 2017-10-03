import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    this.state = {
      data : [];
    }
  }

  fetchChatHistory() {
    axios.get(this.props.url).then(res => {
      this.setState({ data: res.data });
  })
}
  }

  render() {
    return (
      <section>
        You should only see this if you are logged in!
      </section>
    )
  }
}

export default App;
