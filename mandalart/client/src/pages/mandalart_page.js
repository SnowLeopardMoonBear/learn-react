import React from "react";
import { connect } from "react-redux";
import { reset } from "../actions"
import NineSquares from "../components/nine_squares"
import CenterSquares from "../components/center_squares.js"
import Styled from "styled-components"

const Wrapper = Styled.div`
  display: relative;
  width: 768px;
  margin:auto;
  text-align: center;
  background-color: #fff0ff;
`
const Title = Styled.h1`
  color: #333333;
  text-align:center;
  display:inline-block;
  margin:auto auto 10px 10px;
`
const Reset =  Styled.div`
  position: absolute;
  right: calc((100% - 760px) / 2);
  top: 16px;
  display: inline-block;
  border-radius:3px;
  font-size:1.3rem;
  z-index: 6;
  width: 80px;
  background-color:#ff5050;
  color:white;
  text-align:center;
  font-family: 돋움, Helvetica;
  margin-left: auto;
  margin-bottom: 20px;
  &:hover{
    background-color: #ff2222;
    cursor: pointer;
  }
`

class MandalartPage extends React.Component {
  dispatchReset = () => {
    if (window.confirm("만다라트를 모두 지웁니다. 정말 삭제하시겠어요?")){
      this.props.clear();
    }
  }
  render() {
    return (
      <Wrapper>
        <Title>My Mandalart</Title>
        <Reset onClick={this.dispatchReset}>리셋</Reset>
        <NineSquares content={this.props.content} index={0}></NineSquares>
        <NineSquares content={this.props.content} index={1}></NineSquares>
        <NineSquares content={this.props.content} index={2}></NineSquares>
        <NineSquares content={this.props.content} index={3}></NineSquares>
        <CenterSquares content={this.props.content} index={4}></CenterSquares>
        <NineSquares content={this.props.content} index={5}></NineSquares>
        <NineSquares content={this.props.content} index={6}></NineSquares>
        <NineSquares content={this.props.content} index={7}></NineSquares>
        <NineSquares content={this.props.content} index={8}></NineSquares>
      </Wrapper>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    content: state.content
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    clear: ()=>dispatch(reset())
  }
}

MandalartPage = connect(mapStateToProps, mapDispatchToProps)(MandalartPage);

export default MandalartPage;
