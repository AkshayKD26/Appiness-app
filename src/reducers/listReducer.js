
const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_LiST":
      return action.payload;
    default:
      return state;
  }
}