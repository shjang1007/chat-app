// import dependencies
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class EnsureLoggedin extends Component {
  componentWillMount() {
    if (!this.props.user.name) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
};

export default withRouter(connect(
  mapStateToProps,
  null
)(EnsureLoggedin));
