// 만다라트 텍스트 배열을 업데이트하는 액션을 생성합니다.

export const UPDATE = "UPDATE";

// new_content는 새로운 배열
export function update(new_content) {
  return {
    type: UPDATE,
    data: new_content,
  };
}