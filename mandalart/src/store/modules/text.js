const CHANGE_TEXT = "counter/CHANGE_TEXT";

export const changeText = (squares) => ({ type: CHANGE_TEXT, squares });
const arr = new Array(81);
const initialState = {
  squares: arr,
};

export default function text(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        squares: action.squares,
      };
    default: 
      return state;
  }
}
