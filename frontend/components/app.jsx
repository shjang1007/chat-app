// import dependencies
import React, { Component } from "react";

// import login page
import ChooseUser from "./start_page/choose_user";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <ChooseUser/>
      </section>
    )
  }
}

export default App;
