import React from "react";
import {
  sendMessageCreator,
  updateNewTextMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewTextMessageCreator(body));
  };

  return (
    <Dialogs
      dialogsPage={state}
      newMessageBody={state.newMessageBody}
      sendMessage={onSendMessageClick}
      updateNewMessage={onNewMessageChange}
    />
  );
};

export default DialogsContainer;
