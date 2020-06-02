//  From https://velog.io/@velopert/Redux-3-리덕스를-리액트와-함께-사용하기-nvjltahf5e
// redux를 react와 함께 쓰기 위해 원래 컴포넌트에 더해주는 컨테이너 컴포넌트입니다.
// 1. store의 값이 변하면 -> 변한 값을 받아와서 -> 원래 컴포넌트에 props로 넣어줍니다
// 2. store에서 내려보낸 내장함수 dispatch와 reducer를 props로 받아 새 state를 dispatch하는 함수를 만들고, 
//    그 함수를 원래 컴포넌트에 prop로 넣어줍니다

import React, { Component } from "react"; // 컨테이너도 react 컴포넌트니 당연히 불러와야죠?
import { connect } from "react-redux"; // redux의 값과 react 컴포넌트를 이어주기 위해 필요
import Palette from "../components/Palette"; // 값을 넣어주기 위해서는 원래 컴포넌트를 불러와야죠?
import { changeColor } from "../store/modules/counter"; // 스토어에 저장된 changeColor 함수를 import

// 컨테이너 컴포넌트를 정의합니다!
class PaletteContainer extends Component {
  // 스토어에서 불러온 함수를 이 컨테이너 컴포넌트에 props로 주고, 이걸 바탕으로 connect에서 dispatch와 함께 action 객체를 만듦
  handleSelect = (color) => {
    const { changeColor } = this.props;
    console.log("what");
    changeColor(color); // mapDispatchToProps에 정의된 action 생성기로 state 값을 바꿔줌
  };

  // render() 함수는 props를 포함한 state 값이 바뀔 때마다 감싸준 컴포넌트를 렌더링해줍니다.
  render() {
    const { color } = this.props;
    // 컨테이너가 컴포넌트를 감싸 스토어에서 불러온 값과 함수를 props로 넣는 방식! 왜 이름이 컨테이너였는지 알겠다!
    // 타겟 컴포넌트에서 이벤트 발생시 props로 받은 onSelect를 발동한다
    return <Palette onSelect={this.handleSelect} selected={color} />;
  }
}

// store의 state가 바뀔 때마다 state를 컨테이너 컴포넌트에 props 로 넣어주데 쓰일 함수입니다.
const mapStateToProps = (state) => ({
  color: state.counter.color,
});

// props 로 넣어줄 액션 생성함수: 액션 객체를 생성해 스토어에 전달합니다!
// 함수형 프로그래밍 머리아프네... 왜 이렇게 짜는지 이해는 간다...
// 컨테이너와 원래 컴포넌트를 분리하는게 목적이니 원래 컴포넌트에 액션 생성함수를 정의하지는 않습니다.

// 함수를 저장하는 상수(...)
// dispatch는 스토어 내장함수로, 액션생성함수(changeColor)로 만들어진 액션 객체를 스토어에 전달합니다.
// 아래 부분은 스토어 내장함수인 dispatch를 가져와 스토어의 changeColor 함수에 color를 파라미터로 액션 객체를 생성한 뒤 
// 스토어에 디스패치하는 함수를 컴포넌트의 props로 전달합니다.
const mapDispatchToProps = (dispatch) => ({
  changeColor: (color) => dispatch(changeColor(color)),
});

// 컨테이너 컴포넌트에 리덕스 스토어를 연동해줄 때에는 react-redux의 connect 함수 사용: 덕분에 subscribe하지 않아도 됨
export default connect(mapStateToProps, mapDispatchToProps)(PaletteContainer);
