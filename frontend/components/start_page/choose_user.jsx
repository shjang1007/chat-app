// import dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
    this.handleChangeUser = this.handleChangeUser.bind(this);
  }

  update(e) {
    this.setState({ "name": e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.receiveUser(this.state);

    this.setState({ name: "" });

    this.props.history.push("/chat");
  }

  handleChangeUser(e) {
    this.props.removeUser();
  }

  render() {
    const name = this.props.user.name

    // Now that it works, add if statement to check whether user exists. if it does, render different html lines
    if (name) {
      return(
        <section>
          <div>Hi { name }</div>
          <br/>
          <button onClick={ this.handleChangeUser }>Change Username</button>
        </section>
      );
    } else {
      return(
        <form onSubmit={ this.handleSubmit }>
          <h4>Hello there, Please enter your name to get started ~!</h4>
          <label>
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseUser));
