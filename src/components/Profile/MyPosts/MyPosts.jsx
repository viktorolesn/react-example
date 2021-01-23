import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextCreator,
} from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsArray = props.postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let addNewPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextCreator(text);
    props.dispatch(action);
  };

  let newPostElement = React.createRef();

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.postElement}
          />
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsArray}</div>
    </div>
  );
};

export default MyPosts;
