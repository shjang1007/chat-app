// import dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

// import actions
import { receiveUser, removeUser } from "../../actions/simple_session_actions";

class ChooseUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {

  }
}

const mapStateToProps = (state) => {
  return({
    user: this.state.user
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
