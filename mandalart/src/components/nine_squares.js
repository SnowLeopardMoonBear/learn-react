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
  
  render() {
    return (
      <div>
        <Wrapper>
          <Square>{this.props.content[`${(this.props.index)*9+0}`]}</Square>
          <Square>{this.props.content[`${(this.props.index)*9+1}`]}</Square>
          <Square>{this.props.content[`${(this.props.index)*9+2}`]}</Square>
          <Square>{this.props.content[`${(this.props.index)*9+3}`]}</Square>
          <Center>{this.props.content[`${(this.props.index)*9+4}`]}</Center>
          <Square>{this.props.content[`${(this.props.index)*9+5}`]}</Square>
          <Square>{this.props.content[`${(this.props.index)*9+6}`]}</Square>
          <Square>{this.props.content[`${(this.props.index)*9+7}`]}</Square>
          <Square>{this.props.content[`${(this.props.index)*9+8}`]}</Square>
        </Wrapper>
      </div>
    );
  }
}
export default NineSquares;
