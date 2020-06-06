import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 252px;
  height: 252px;
  display: table-cell;
  vertical-align: middle;
  float: left;
  border: 2px;
  border-color: #ff69b4;
  border-style: solid;
`;

const Square = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 2px;
  border-color: #ff69b4;
  border-style: solid;
  width: 80px;
  height: 80px;
  font-size: 2rem;
  font-weight: 700;
  float: left;
  text-align: center;
`;

const Center = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 2px;
  border-color: #ff69b4;
  border-style: solid;
  width: 80px;
  height: 80px;
  font-size: 2rem;
  font-weight: 700;
  float: left;
  text-align: center;
  background-color: #fd8bc4;
  color: aliceblue;
`;
class NineSquares extends React.Component {
  static defaultProps = {
    name: "기본props",
    넘버1: "1번",
    넘버2: "2번",
    배열: [123, 456, 789]
  };
  
  render() {
    return (
      <div>
        <Wrapper>
          <Square>{this.props.content[0]}</Square>
          <Square>{this.props.content[1]}</Square>
          <Square>{this.props.content[2]}</Square>
          <Square>{this.props.content[80]}</Square>
          <Center>5</Center>
          <Square>6</Square>
          <Square>7</Square>
          <Square>8</Square>
          <Square>9</Square>
        </Wrapper>
      </div>
    );
  }
}
export default NineSquares;
