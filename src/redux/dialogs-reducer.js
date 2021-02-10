const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewTextMessageCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
