# redux로 배열의 특정 인덱스에 접근해 값을 변경하기

### 1. array.map() 이용하기

```using .map() method
case 'SOME_ACTION':
   return { 
       ...state, 
       contents: state.contents.map(
           (content, i) => i === 1 ? {...content, text: action.payload}
                                   : content
       )
    }
```

### 2. React Immutability Helper 이용하기(권장)

React에서는 어떤 배열을 복사한 배열의 값을 변경해도, 참조하고 있는 배열이 똑같으니 변경사항이 제대로 저장되지 않는다. 그래서 react-addons-update라는 helper에 포함된 update함수를 액션 객체에 사용함으로써 id값으로 저장소에 접근해 값을 바꿔줄 수 있다. 아래는 stackoverflow의 예시 코드다.

```action
import update from 'react-addons-update';

// ...    

case 'SOME_ACTION':
  return update(state, { 
    contents: { 
      1: {
        text: {$set: action.payload}
      }
    }
  });
```

```reducer
case 'SOME_ACTION':
  return update(state, { 
    contents: { 
      [action.id]: {
        text: {$set: action.payload}
      }
    }
  });
```

