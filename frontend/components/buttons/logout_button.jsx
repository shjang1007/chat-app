// import dependencies
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import user actions
import { removeUser } from "../../actions/simple_session_actions";

const LogoutButton = ({ removeUser }) => {

  return(
    <button onClick={ (e) => removeUser() }>Change Username</button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(removeUser())
  }
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(LogoutButton));
