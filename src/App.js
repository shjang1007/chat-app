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
        <Link to={"/"}>Go back to homepage</Link>
      </section>
    )
  }
}

export default App;
