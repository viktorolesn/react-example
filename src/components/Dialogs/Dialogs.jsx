import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElementsArray = props.state.dialogs.map((item) => (
    <DialogItem id={item.id} username={item.username} />
  ));

  let dialogMessagesArray = props.state.messages.map((item) => (
    <Message message={item.message} />
  ));

  let newPostElement = React.createRef();

  let addElement = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogElementsArray}</div>
      <div className={s.messages}>{dialogMessagesArray}</div>
      <textarea ref={newPostElement}></textarea>
      <button onClick={addElement}></button>
    </div>
  );
};

export default Dialogs;
