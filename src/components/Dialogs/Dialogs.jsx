import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewTextMessageCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;
  let dialogElementsArray = state.dialogs.map((item) => (
    <DialogItem id={item.id} username={item.username} />
  ));

  let dialogMessagesArray = state.messages.map((item) => (
    <Message message={item.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewTextMessageCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogElementsArray}</div>
      <div className={s.messages}>
        <div>{dialogMessagesArray}</div>

        <div>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
