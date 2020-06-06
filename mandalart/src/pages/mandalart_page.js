import React from "react";
import { connect } from "react-redux";
import NineSquares from "../components/nine_squares"
import Styled from "styled-components"

const Wrapper = Styled.div`
  width: 768px;
`
const Title = Styled.h1`
  text-align:center;
`


class MandalartPage extends React.Component {
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
      </Wrapper>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    content: state.content
  }
}

MandalartPage = connect(mapStateToProps)(MandalartPage);

export default MandalartPage;
