import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost } from "./redux/state";
import { updateNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderAll = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
