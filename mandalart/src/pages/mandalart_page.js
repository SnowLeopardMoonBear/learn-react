import React from "react";
import { connect } from "react-redux";
import { reset } from "../actions"
import NineSquares from "../components/nine_squares"
import Styled from "styled-components"

const Wrapper = Styled.div`
  width: 768px;
  margin-left:auto;
  margin-right:auto;
`
const Title = Styled.h1`
  text-align:center;
`
const Reset =  Styled.div`
  position: relative;
  border-radius:3px;
  font-size:1.5rem;
  z-index: 6;
  width: 88px;
  background-color:#ee0000;
  color:white;
  text-align:center;
  font-family: 돋움, Helvetica;
  margin-left: auto;
  margin-bottom: 20px
`

class MandalartPage extends React.Component {
  dispatchReset = () => {
    this.props.clear();
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
        <NineSquares content={this.props.content} index={4}></NineSquares>
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
