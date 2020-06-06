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
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Square>1</Square>
          <Square>2</Square>
          <Square>3</Square>
          <Square>4</Square>
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
