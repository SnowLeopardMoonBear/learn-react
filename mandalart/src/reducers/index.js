import { UPDATE } from "../actions";

const initialState = {
  content: localStorage.Mandalart.split(","), // 초기값을 로컬스토리지에서 불러옴
};

const update = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      var newContent = [];
      for (var i = 0; i < 81; i++) {
        i === action.index
          ? newContent.push(action.newSquare)
          : newContent.push(state.content[i]);
      }
      localStorage.Mandalart = newContent; // 업데이트시 새로운 내용을 로컬스토리지에 저장
      // Object.assign() 메서드로 객체 안의 내용을 덮어쓰기
      return Object.assign({}, state, {
        content: newContent,
      });
    default:
      return state;
  }
};
export default update;
