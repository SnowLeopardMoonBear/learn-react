// input 다루는 건 https://velopert.com/3634 참조했습니다. 감사합니다!
import React from "react";
import { update } from "../actions/index.js";
import { connect } from "react-redux";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #fffaff;
  padding: 10px;
  height: 100vh;
`;
const Square = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcff;
  border: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: #ff69b4;
  border-style: solid;
  word-break: break-all;
  overflow: hidden;
  width: 80px;
  height: 80px;
  font-size: 1.1rem;
  font-weight: 400;
  color: #222222;
`;
const Edit = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  margin-left: auto;
  margin-right: auto;
`
const Send = styled.button`
  width: 40px;
`

class SquareContent extends React.Component {
  state = { inputText: this.props.match.params.content };

  // input 안의 값이 바뀔 때마다 발동되는 함수로, state의 inputText에 저장해준다.
  handleChange = (e) => {
    this.setState({ inputText: e.target.value }); // 이벤트를 유발한 element의 주소에 접근해 내부 값을 받아와 state를 업데이트.
  };
  // 수정 버튼 클릭시 발동하는 함수
  dispatchUpdate = () => {
    this.props.send(
      parseInt(this.props.match.params.index),
      this.state.inputText
    );
    this.props.history.push("/");
  };
  enterKey = (e) => {
    if (e.key === "Enter") {
      this.dispatchUpdate();
      alert("값이 변경되었습니다");
    }
  };

  render() {
    return (
      <Wrapper onKeyUp={this.enterKey}>
        <Title>스퀘어 수정하기</Title>
        <Square>{this.state.inputText} </Square>
        <Edit>
          <Input
            type="text"
            placeholder={this.props.match.params.content}
            onChange={this.handleChange}
          ></Input>
          
        <Send onClick={this.dispatchUpdate}>전송</Send>
        </Edit>
      </Wrapper>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    content: state.content,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    send: (index, newText) => dispatch(update(index, newText)),
  };
};
const SquarePage = connect(mapStateToProps, mapDispatchToProps)(SquareContent);
export default SquarePage;
