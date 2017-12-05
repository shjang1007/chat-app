// import dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

// import action
import { createMessage } from "../../actions/message_actions";

class MessageForm extends Component {
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
      <form onSubmit={ this.handleSubmit }>
        <label>
          Send Message:
          <input
            value={ this.state.content }
            placeholder="Enter your message"
            onChange={ this.update("content") }
            required/>
        </label>
         <button>Send Message</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (message) => dispatch(createMessage(message))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MessageForm);
