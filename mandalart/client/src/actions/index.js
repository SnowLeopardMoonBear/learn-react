// 만다라트 텍스트 배열을 업데이트하는 액션을 생성합니다.

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
    initialArray: 
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
      31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
      '나의 만다라트', 42, 43, 44, 45, 46, 47, 48, 49, 50, 
      51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
      71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81]
  };
}