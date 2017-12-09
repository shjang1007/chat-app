// import dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

// import actions to dispatch
import { fetchMessages } from "../../actions/message_actions";

class ChatHistory extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    return(
      <section>
        <h4>Chat history!</h4>
        <div>{ this.props.user.name } is currently logged in</div>
        <br/>
      </section>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.messageState,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => dispatch(fetchMessages())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatHistory);
