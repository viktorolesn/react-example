import { rerenderAll } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you", likesCount: "0" },
      { id: 2, message: "It's my first post", likesCount: "23" },
      { id: 3, message: "Wowowo", likesCount: "89" },
    ],
    postElement: "",
  },
  messagesPage: {
    dialogs: [
      { id: "1", username: "Viktor" },
      { id: "3", username: "Alex" },
      { id: "2", username: "John" },
      { id: "4", username: "Frank" },
      { id: "5", username: "Maxym" },
    ],
    messages: [
      { id: "1", message: "Hi" },
      { id: "2", message: "How are you today" },
      { id: "3", message: "All good, how about you? What's new around?" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.postElement,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  updateNewPostText("");
};

export let updateNewPostText = (newText) => {
  state.profilePage.postElement = newText;
  rerenderAll(state);
};
export default state;
