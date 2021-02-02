import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

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
      newMessageBody: "",
    },
    sidebar: {},
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewTextMessageCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default store;
window.store = store;

/*DISPATCH_HERE_BEFORE REDUCER

dispatch(action) {
    if (action.type === ADD_POST) {
        let newPost = {
          id: 5,
          message: this._state.profilePage.postElement,
          likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPost = "";
        this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.postElement = action.newText;
        this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        this._state.messagesPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
      } else if (action.type === SEND_MESSAGE) {
        let body = this._state.messagesPage.newMessageBody;
        this._state.messagesPage.newMessageBody = "";
        this._state.messagesPage.messages.push({ id: 6, message: body });
        this._callSubscriber(this._state);
      }
  } */
