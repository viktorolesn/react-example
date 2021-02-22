import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsArray = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let addNewPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
            value={props.newPostText}
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
