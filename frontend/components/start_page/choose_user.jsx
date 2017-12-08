// import dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

// import actions
import { receiveUser, removeUser } from "../../actions/simple_session_actions";

class ChooseUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ "userName": e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.receiveUser(this.state);

    this.setState({ userName: "" });
  }

  render() {
    const userName = this.props.user.userName
    // Now that it works, add if statement to check whether user exists. if it does, render different html lines
    if (userName) {
      return(
        <section>
          <div>Hi { userName }</div>
          <button>Change Username</button>
        </section>
      );
    } else {
      return(
        <form onSubmit={ this.handleSubmit }>
          <label>
            Send Message:
            <input
              value={ this.state.content }
              placeholder="Enter your name"
              onChange={ this.update }
              required/>
          </label>
          <button>Send Message</button>
        </form>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return({
    user: state.user
  })
};

const mapDispatchToProps = (dispatch) => {
  return({
    receiveUser: (user) => dispatch(receiveUser(user)),
    removeUser: () => dispatch(removeUser())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseUser);
