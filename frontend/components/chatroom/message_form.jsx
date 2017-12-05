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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(propoerty) {
    return (e) => {
      return this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createMessage(this.state);

    this.setState({ content: "" });
  }

  render() {
    return(
      <form>
        <label>
          Send Message:
          <input/>
        </label>
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
