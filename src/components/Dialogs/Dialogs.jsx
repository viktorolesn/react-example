import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogElementsArray = state.dialogs.map((item) => (
    <DialogItem id={item.id} username={item.username} />
  ));

  let dialogMessagesArray = state.messages.map((item) => (
    <Message message={item.message} />
  ));

  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessage(body);
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
