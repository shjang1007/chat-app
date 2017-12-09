// import dependencies
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class EnsureLoggedin extends Component {
  componentWillUnmount() {
    debugger
  }

  componentDidMount() {
    if (!this.props.user.username) {
      this.props.history.push("/");
    }
  }

  render() {

  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
};

export default withRouter(connect(
  mapStateToProps
)(EnsureLoggedin));

//   componentWillMount() {
  //   debugger
  //   const username = ;
  //
  //   if (!username) replace("/");
  // }
