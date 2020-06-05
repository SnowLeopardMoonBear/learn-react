# react 핵심만 따서 정리

### 0. 리액트는 무엇?

웹페이지를 컴포넌트 단위로 구성케 도와주는 **라이브러리**다. MVC 모델을 따르며 데이터가 변할 때 바로 DOM을 업데이트하며 View를 렌더링해준다. 또한 보통 JSX를 활용해 JS 파일 안에 HTML문법으로 컴포넌트를 작성하며, 각 컴포넌트를 함수형으로 프로그래밍하는게 특징이다. (그래야 데이터가 바뀔 때마다 그 값을 넣어주며 렌더링할 수 있어서일듯)

### 1. 리액트는 어떻게 작동하나?

리액트는 특정 id값을 가진 DOM 요소에 컴포넌트를 마운트하는 방식으로 동작한다. 때문에 기존 JS기반 프로젝트의 일부만 리액트를 적용하는 일도 가능하다. 또한 데이터값은 props를 활용해 상위 컴포넌트에서 하위 컴포넌트 방향으로 전달된다.

프로젝트 안에서 리액트를 사용하려면 다음과 같이 할 수 있다. 먼저 엔트리 JS파일(보통 index.js)에 React와 ReactDOM(프로젝트 전체와는 구별되는 react의 DOM)을 import한다. 그 다음 ReactDOM.render((react DOM의 뿌리가 될 JSX), (getElementById로 불러온마운트할 뿌리 객체)) 함수로 엔트리 HTML 파일(보통 index.html, CLI로 자동구성 가능)에 마운트해준다. 이 때 함수에 들어가는  JSX에는 페이지에 들어갈 하위 react 컴포넌트들을 불러와 <App/>과 같은 형태로 작성해준다.

CLI를 이용해 간편하게 프로젝트를 구성할 수 있다. 이 경우 프로젝트 구동에 필요한 npm, webpack 등의 기타 다양한 설정을 자동으로 해주고, JSX 같은 확장 문법이나 템플릿 언어 등을 컴파일 가능하게 만든다. npm 명령어를 통해 프론트엔드를 직접 실행하여 브라우저에서 결과물을 확인할 수 있다.

리액트를 더 편하게 활용하기 위해 Redux와 같은 저장소도, 한 리액트 컴포넌트 js 파일 안에 스타일까지 넣는 styled component를 사용할 수 있으며, 리액트 바깥에서 디자인 라이브러리를 불러오는 것도 가능하다.

### 2. 리액트 컴포넌트의 구조

리액트 컴포넌트는 아래와 같은 구조로 이루어진다. 먼저, 각 컴포넌트는 (보통 JSX로 쓰인) .js 파일이다. 파일의 첫머리에는 React, Component를 패키지 매니저로 설치한 "react" 또는 react Web URI에서 불러온다. 그리고 사용할 하위 컴포넌트 js파일, 이 컴포넌트에서 쓰일 css 파일 등을 불러온다. 

다음은 컴포넌트 전체를 감쌀 클래스를, import한 Component 모듈을 extend하여 정의(class (작성할 컴포넌트 이름) extends Component)한다.(Component 모듈은 말 그대로 컴포넌트로서 작동키 위한 기능적인 부분이며, 우리가 만들 view와는 관련이 없는 듯) 클래스 안에는 state, props, 우리가 짠 로직과 내부컴포넌트가 담긴 함수, 우리가 짠 내부컴포넌트가 담긴 class, render()함수 등이 들어간다. 이 때 render()함수는 클래스 안에 반드시 하나 이상 들어가야 한다. 

마지막으로는 JS 모듈 시스템이 작성한 컴포넌트 클래스를 상위 컴포넌트에서 읽어 포함시킬 수 있도록 export 해준다. (예: export default (컴포넌트 이름))

참고로 데이터의 개수에 따라 컴포넌트 개수를 다르게 동적으로 불러올 수 있는데, JS 객체의 내장 메서드인 .map()을 사용해 반복 가능한 해당 데이터를 인자로 넣고 무엇을 리턴할지 지정하면 된다. 또, JSX 태그나 태그 안쪽에서 해당 컴포넌트의 값을 {this.movie}와 같이 불러올 수 있다. 

예시)

 ```데이터 개수에 따라 동적으로 렌더링하기
_renderMovies = ()=>{
	const movies = this.state.movies.map((movie)=>{
		return (
			<Movie
				title = {movie.title_english}
				poster = {movie.medium_cover_image}
		)
	});
	return movies;
}
 ```



### 3. 클래스와 함수

컴포넌트 안에서 클래스와 함수는 둘 다 HTML 확장 형태인 내부 구성요소를 렌더링하지만, 둘은 차이점이 많다. 먼저 함수는 최초로 렌더링된 값들을 고정시키나, 클래스는 참조한 데이터가 바뀔 때마다 구성요소를 다시 렌더링해준다. 예를 들어 내부 로직에 따라 state, props 등의 값이 바뀐다면, 클래스는 다시 렌더링에 들어간다. 반면 함수로 만든 컴포넌트는 한 번 렌더링되면 변하지 않는다. 그 이유는 클래스에 state와 LifeCycle이 있기 때문이다. 

또한 클래스는 반드시 render((컴포넌트 JSX)) 함수를 포함해야 한다. 반면 함수는 (컴포넌트 JSX)를 리턴하기만 하면 된다. 클래스에는 render() 함수에, 함수는 return 하는 값에 HTML 태그와 같이 <(클래스명 또는 함수명)/> 꼴로 렌더링할 내용을 넣어준다.

함수 중에서는 react 컴포넌트의 생애주기 훅에 따라 자동으로 실행되는 react 내장함수가 있다. 예를 들어 componentDidMount()와 같이, react에서 제공하는 컴포넌트의 생애주기 훅 함수 안에, 실행하고자 하는  JSX 스크립트를 담을 수 있다. 우리가 직접 짠 함수는 react 내장함수와 구별하기 위해 앞에 '_'를 넣어준다.

### 4. props와 state

props와 state는 컴포넌트에서 활용할 변수값이다. 그런데 props는 상위 컴포넌트에서 받아오며, state는 그 컴포넌트 안에서 정의한다는 차이가 있다.

props는 vue.js와 같이 태그 안에 넣어줄 수 있다. (예: <Movie title={movie.title}/>) props가 하위 컴포넌트에 전달되면, 하위 컴포넌트 코드상에 props를 따로 정의하지 않아도, {this.props.(전달받은 값의 이름)}으로 호출할 수 있다. 또한 함수형 컴포넌트에서는 인자값을 입력할 때 {this.movie}와 같이 this를 붙이지 않고, {movie}와 같이 prop 이름으로 바로 호출 가능하다. 

state는 컴포넌트 안쪽에 정의한다. (예: state = {number=0}) 그리고 state 안의 값을 변경할 때 state에 직접 접근하면 안 되며, 반드시 따로 함수를 정의한 뒤 this.setState()라는 react 내장함수로 바꾸어야 한다.

```this.setState()
this.setState({
	counter: this.state.counter + 1
})
```

단, setState() 함수가 state 객체 내부의 객체에서 특정 값만 찾지는 못한다. 그래서 내부 특정 객체의 특정 값을 바꾸고 싶으면, ... 문법을 활용해 해당 객체 전체를 업데이트해줘야 한다.

```setState()로 객체 내부 업데이트
this.setState({
	value: {
	...this.state.value, innerValue: 42
	}
})
```

### 5. 이벤트

JSX에서 HTML처럼 태그 안에 이벤트를 지정해줄 수 있다. 이 때 이벤트의 이름이 반드시 camelCase여야 하니 주의하자.(예: mouseover -> mouseOver) 또한 이벤트 발동시 이벤트에 전달해주는 값은 반드시 함수 자체여야 한다. 이벤트에 함수를 {this.increaseCounter}와 같은 형식으로 넣어줄 수 있다. onClick={this.increaseCounter()}처럼 넣어준다면 이벤트 발생시가 아니라 컴포넌트가 렌더링될 때마다 해당 함수가 실행된다. 특히 함수 실행시 값이 바뀌어 다시 렌더링된다면 무한루프에 빠진다.

### 6. react lifecycle API

react 컴포넌트의 생성 마운트 소멸 등의 생애주기에 따라 특정 명령을 시행할 수 있게 해주는 API다. 

1. constructor(props): 컴포넌트가 새로 생성될 때마다 이 함수가 호출된다
2. componentWillMount(): 컴포넌트가 화면에 나오기 직전에 호출된다. 리액트16.3 이후부터 사용하지 않는다.
3. componentDidMount(): 컴포넌트가 마운트되어 화면에 나타난 직후 호출된다. 주로 DOM 사용해야 하는 외부 라이브러리 연동, 컴포넌트에서 필요한 데이터를 axios, fetch등으로 ajax 요청, DOM의 속성을 읽거나 변경하는데 쓰인다.
4. componentWillReceiveProps(nextProps): 컴포넌트가 새로운 props를 받게 될 때 호출된다. 주로 props에 따라 state가 바뀌어야 하는 상황에서 쓰였으나, react 16.3부터 사용하지 않는다.
5. static getDerivedStateFromProps(nextProps, prevState): 4.를 대체할 수 있고 리액트 16.3부터 쓰인다.
6. shouldComponentUpdate(nextProps, nextState): 조건에 따라 false를 반환하면, 해당 조건에서 render함수를 호출하지 않는다.
7. componentWillUpdate(nextProps, nextState): 이제 안 쓰인다
8. getSnapshotBeforeUpdate(prevProps, prevState): DOM 변화 직전의 DOM 상태를 가져오고, 리턴되는 값은 componentDidUpdate에서 3번째 파라미터로 받아올 수 있다.
9. componentDidUpdate(prevProps, prevState, snapshot): 컴포넌트에서 render()를 호출한 다음 발생한다. 파라미터를 통해 이전의 값을 조회할 수 있다. 
10. componentWillUnmount(): 등록했던 이벤트, setTimeOut, 외부 라이브러리 인스턴스 등을 제거하는데 주로 쓰인다. 
11. componentDidCatch(error, info): 에러 발생시 실행되며, 주로 자식 컴포넌트 내부에서 발생하는 에러들을 잡아내는데 쓰인다.

### 7. Redux

**![img](https://miro.medium.com/max/2242/0*Z18iLsM7Bf1xoNth.)Redux**는 react 프로젝트에서 함께 쓰이는 **상태관리 라이브러리**다.(react 없이 사용할 수도 있다!) react에서는 데이터를 상위 컴포넌트에서 하위 컴포넌트까지 prop를 통해 한 단계씩 전달한다. 그러나 애플리케이션이 복잡해질수록 컴포넌트 트리가 복잡해져 데이터의 상속관계를 파악하기 어려워진다. 때문에 컴포넌트 계층관계를 변경할 때마다 다른 컴포넌트의 데이터 상속관계를 신경써야 하니 유지보수가 힘들어진다. 또한 받아온 데이터를 상위 컴포넌트로 전달하기도 매우 어렵다. Redux는 컴포넌트 계층관계 바깥에 계층이 없는 독립적인 데이터 저장소를 만들고 모든 컴포넌트가 접근할 수 있도록 함으로써 이 문제를 해결한다. Vue.js에서 Vuex가 필요한 상황과 비슷하다.

Redux는 저장소지만, react store처럼 값에 직접 접근해 변경하지 않고, 값을 변경하는 함수를 이용한다. Redux 작동과정을 알아보기에 앞서 액션(action), 액션 생성함수(action creator), 리듀서(reducer) 개념을 알아보자. 먼저 **액션**은 type과 data를 가지는 객체로, type 필드를 반드시 가지고 있어야 한다. 

``` action 객체
{
	type: "ADD_USERNAME",
	data: {
		username: "gomti"
	}
}
```

**액션 생성함수**는 액션을 만드는 함수다. 인자값으로 데이터를 받아오면, 그 데이터를 바탕으로 액션 객체를 리턴한다.

```action 생성함수
function changeName(data){
	return {
		type:CHANGE_NAME,
		data // data:data 와 같은 js문법
	}
}
```

**리듀서**는 변화를 일으키는 함수다. 현재의 상태와 전달받은 액션을 각각 첫번째, 두번째 인자로 받아, 새로운 상태를 반환한다. 이 때 이전 상태를 직접 조작하지 않는 이유는, 상태는 읽기 전용이기 때문이다. 상태 자체를 변경하는 대신 새로운 상태를 만들어 반환한다.

**스토어**는 현재의 앱 상태와 리듀서, 몇 가지 내장함수를 저장하는 공간이다. 애플리케이션 하나에 하나의 스토어를 만든다.

마지막으로 **디스패치**는 스토어의 내장함수 중 하나로, 액션을 인자값으로 받아 리듀서 함수 중 해당 액션을 처리하는 로직이 있을 때 새로운 상태를 만들어준다.

### 8. React Hook

React 16.8에서 추가된 기능으로, class 없이 state를 비롯한 React의 여러 기능을 사용할 수 있게 해준다. 

**State Hook** 은 state 변화를 함수 내에서 감지하게 돕는다. react 모듈에서 useState() 함수를 가져와 사용한다. 먼저 const [(변수명), (변수의 state를 업데이트하는 함수)] = useState((초기값)); 과 같이 state로 사용할 변수를 작성한다. 변수인데 const를 사용하는 이유는 redux와 비슷하게, 값에 직접 접근해 변경하지 않고 새로운 state로 대체하는 패턴을 따르기 때문이다. 이벤트 발생시 변수를 업데이트하는 함수를 불러와 인자값으로 변수의 새 state를 넣어준다. 그러면 바뀐 변수값에 따라 컴포넌트가 새로 렌더링된다. 물론 하나의 컴포넌트에서 State Hook을 여러 번 사용할 수도 있다. 단, class 안에서 react hook을 사용할 수는 없다. 그렇다고 클래스들을 모두 함수로 교체하는 건 권장되지 않는다.

**Effect Hook**은 DOM이 업데이트되는 상황을 감지해 다른 무언가를 업데이트하는 훅으로, componentDidMount, componentDidUpdate API와 비슷하다. react의 useEffect 함수를 가져와 인자로 업데이트시 실행할 함수를 넣어준다. 예시에서는 데이터에 따라 API에 다른 요청을 보내는데 쓰인다.(다만 effect Hook이 state hook과 어떻게 다른지, 어떤 상황에서 쓰이는지는 좀 더 알아봐야 한다.)

Hook을 사용하는데는 두 가지 규칙이 있다. 먼저 반복문, 조건문, 중첩된 함수 등이 아닌, 최상위 레벨에서만 호출해야 한다. 또한 앞서 강조했듯이 React 함수 컴포넌트(예를 들어 class는 안 됨) 안에서만 호출해야 한다. 다만 직접 작성한 custom Hook 안에서는 호출이 가능하다.

Custom Hook은 필요성을 느낄 때 다시 알아보자.