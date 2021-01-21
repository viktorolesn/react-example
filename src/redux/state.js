let store = {
  _state: {
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
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.postElement,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this.updateNewPostText("");
  },
  updateNewPostText(newText) {
    this._state.profilePage.postElement = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.postElement,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPost = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST") {
      this._state.profilePage.postElement = action.newText;
      this._callSubscriber(this._state);
    }
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
