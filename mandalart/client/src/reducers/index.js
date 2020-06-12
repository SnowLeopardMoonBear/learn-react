import { UPDATE, RESET } from "../actions";

const initialState = {
  content: localStorage.Mandalart ? 
  localStorage.Mandalart.split(",") : 
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
  '나의 만다라트', 42, 43, 44, 45, 46, 47, 48, 49, 50, 
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81], // 초기값을 로컬스토리지에서 불러옴
};

const manStore = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      var newContent = [];
      for (var i = 0; i < 81; i++) {
        i === action.index
          ? newContent.push(action.newSquare)
          : newContent.push(state.content[i]);
      }
      if (action.index % 9 === 4){
        newContent[(36+parseInt(action.index/9))] = action.newSquare;
      }
      if (action.index >=36 && action.index <=44){
        newContent[(4+9*(action.index-36))] = action.newSquare;
      }
      localStorage.Mandalart = newContent; // 업데이트시 새로운 내용을 로컬스토리지에 저장
      // Object.assign() 메서드로 객체 안의 내용을 덮어쓰기
      return Object.assign({}, state, {
        content: newContent,
      });
    case RESET:
      localStorage.Mandalart = action.initialArray;
      return Object.assign({}, state, {
        content: action.initialArray
      });
    default:
      return state;
  }
};
export default manStore;
