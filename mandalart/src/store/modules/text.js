const CHANGE_TEXT = "text/CHANGE_TEXT";
const TEST_STORE = "text/TEST_STORE"

export const changeText = (squares) => ({ type: CHANGE_TEXT, squares });
export const testStore = (squares) => ({ type: TEST_STORE, squares});

// 베열의 초기값을 생성
const arr = new Array(81);
const initialState = {
  squares: arr,
  test: 'Nah'
};

// reducer: 정의한 action을 받아 새로운 상태를 반환
export default function text(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        squares: action.squares,
      };
    case TEST_STORE:
      return {
        ...state,
        test: 'Test success!'
      }
    default: 
      return state;
  }
}
