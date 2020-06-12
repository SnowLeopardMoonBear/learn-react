// 만다라트 텍스트 배열을 업데이트하는 액션을 생성합니다.
import defaultArray from "../reducers/helpers/default_array.js"
export const UPDATE = "UPDATE";
export const RESET = "RESET";

// new_content는 새로운 배열
export function update(index, newSquare) {
  return {
    type: UPDATE,
    newSquare, index
  };
}
export function reset() {
  return {
    type: RESET,
    initialArray: defaultArray
  };
}