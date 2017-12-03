// import dependencies
import React, { Component } from "react";

// import actions to dispatch
import { fetchMessages } from "../../actions/message_actions";

class ChatHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        Welcome to Chat History
      </section>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.messageState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => dispatch(fetchMessages())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatHistory);
