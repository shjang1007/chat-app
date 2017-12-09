// import dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

// import actions to dispatch
import { fetchMessages } from "../../actions/message_actions";

// import modular component
import MessageDetail from "./message_detail";

class ChatHistory extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { user, messages } = this.props;
    debugger
    const messageList = messages.map( (message) => {
      return <MessageDetail message={message} user={user}/>
    });

    return(
      <section>
        <h4>Chat history!</h4>
        <div>{ user.name } is currently logged in</div>
        <br/>
        <ul>
          { messageList }
        </ul>
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
