import React from "react";
import { connect } from "react-redux";
import { reset } from "../actions"
import NineSquares from "../components/nine_squares"
import Styled from "styled-components"

const Wrapper = Styled.div`
  width: 768px;
`
const Title = Styled.h1`
  text-align:center;
`
const Reset =  Styled.h5`
  font-size:1.5rem;
  color:black;
  text-align:center;
`

class MandalartPage extends React.Component {
  dispatchReset = () => {
    this.props.clear();
  }
  render() {
    return (
      <Wrapper>
        <Title>My Mandalart</Title>
        <NineSquares content={this.props.content} index={0}></NineSquares>
        <NineSquares content={this.props.content} index={1}></NineSquares>
        <NineSquares content={this.props.content} index={2}></NineSquares>
        <NineSquares content={this.props.content} index={3}></NineSquares>
        <NineSquares content={this.props.content} index={4}></NineSquares>
        <NineSquares content={this.props.content} index={5}></NineSquares>
        <NineSquares content={this.props.content} index={6}></NineSquares>
        <NineSquares content={this.props.content} index={7}></NineSquares>
        <NineSquares content={this.props.content} index={8}></NineSquares>
        <Reset onClick={this.dispatchReset}>리셋</Reset>
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
