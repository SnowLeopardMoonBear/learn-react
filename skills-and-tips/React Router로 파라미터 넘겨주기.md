# React Router에서 파라미터값에 따라 렌더링하기

### 1. url 뒤에 :(변수명)으로 파라미터로 넘겨줄 값을 지정

```:name
<Route exact path='/:number' component={nine_squares}
```

### 2. 링크된 페이지에서는 {match.params.(변수명)}으로 해당 변수에 접근

```{match.params.number}
const number = {match.params.number}
```

### 3. 링크된 페이지에서 쓸 값을 url을 통해 {location} 객체로 넘겨줘도 된다.

```use props
<Route exact path='/square/5?name=5#5' component={square})>
```

```square
{location} = {
	pathname: "/square",
	search: "?name=5",
	hash: "#5"
}
```

JS의 qs 모듈을 이용해 쿼리스트링 파싱이 가능하다.

```qs 모듈
import qs from 'qs';

const num = qs.parse(location.number, {
		ignoreQueryPrefix: true
	});
console.log(num.number);
// 5
// 파싱한 값들은 문자열 자료형으로 저장된다
```

