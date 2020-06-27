const CHANGETEXT = "CHANGETEXT";

const initialState = {
  reduxText: "default",
};

function testText(state = initialState, action) {
  switch (action.type) {
    case CHANGETEXT:
      return {
        reduxText: action.reduxText
      }
    default: 
      return state;
  }
}
export default testText;