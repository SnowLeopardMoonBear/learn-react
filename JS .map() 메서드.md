# JS Map 함수

### 1. JS에서 map 함수란?

배열 안의 값을 특정 함수에 하나하나 통과시킨 값들의 배열을 반환하는 메서드. Array.map() 메서드는 인자값으로 객체에서 받아온 인자값이 있는 함수를 받는다. 이 때 key 값을 i로 받을 수도 있다.

### 2. 실사용례

```Array.map()
const sampleArr = ['Hello','.map()','method!']
const sampleMap = sampleArr.map((item, i)=>{((i.toString).concat(" ", item.toUpperCase())})
console.log(sampleMap)
// [0 HELLO,1 .MAP(),2 METHOD!]
```

