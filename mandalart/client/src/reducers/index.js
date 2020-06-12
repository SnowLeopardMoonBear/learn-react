import { UPDATE, RESET } from "../actions";
import defaultArray from "./helpers/default_array.js";
const initialState = {
  content: localStorage.Mandalart ? 
  localStorage.Mandalart.split(",") : 
  defaultArray, // 초기값을 로컬스토리지에서 불러옴
};

const manStore = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      // action.newSquare는 새로 입력한 값, action.index는 변경할 스퀘어의 인덱스
      var newContent = [];
      for (var i = 0; i < 81; i++) {
        i === action.index
          ? newContent.push(action.newSquare)
          : newContent.push(state.content[i]);
      }
      // 중앙 3x3 스퀘어의 카테고리명과, 각 3x3 스퀘어의 카테고리명이 연동되도록 로직을 추가
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
