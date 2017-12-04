// import dependencies
import React from "react";
import { connect } from "react-redux";

// import action
import { createMessage } from "../../actions/message_actions";

class MessageForm {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }
  }

  render() {
    return(
      <form>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (message) => dispatch(createMessage(message));
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MessageForm);
