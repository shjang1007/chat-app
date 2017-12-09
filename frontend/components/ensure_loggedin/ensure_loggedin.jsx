// import dependencies
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class EnsureLoggedin extends Component {
  componentDidMount() {
    if (!this.props.user.username) {
      this.props.history.push("/");
    }
  }

  render() {
    return(
      <div>It's Ensure Loggedin Component</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
};

export default withRouter(connect(
  mapStateToProps,
  null
)(EnsureLoggedin));
