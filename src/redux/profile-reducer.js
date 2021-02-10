const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: "0" },
    { id: 2, message: "It's my first post", likesCount: "23" },
    { id: 3, message: "Wowowo", likesCount: "89" },
  ],
  postElement: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.postElement,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPost = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.postElement = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
