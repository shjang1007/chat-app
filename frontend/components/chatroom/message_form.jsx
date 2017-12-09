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
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ "content": e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createMessage({
      content: this.state.content,
      user: this.props.user.name
    });

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
            onChange={ this.update }
            required/>
        </label>
         <button>Send Message</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (message) => dispatch(createMessage(message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
