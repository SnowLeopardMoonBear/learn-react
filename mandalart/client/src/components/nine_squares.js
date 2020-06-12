import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 252px;
  height: 252px;
  float: left;
  border: 2px;
  border-color: #ff69b4;
  border-style: solid;
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
  word-break:break-all;
  overflow:hidden;
  width: 80px;
  height: 80px;
  font-size: 1rem;
  font-weight: 400;
  float: left;
  color: #222222;
  &:hover{
    color: aliceblue;
    background-color: ${props => (`#${(props.index+7).toString(16)}faaee`)};
  }
`;

// props 값 이용하는 건 아직 안 되네. 값 넘어오는 순서 때문인가
const Center = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 2px;
  border-color: #ff69b4;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  overflow: hidden;
  width: 80px;
  height: 80px;
  font-size: 1.1rem;
  font-weight: 700;
  float: left;
  background-color: ${props => (`#${(props.index+6).toString(16)}f69b4`)};
  color: aliceblue;
  &:hover{
    color: aliceblue;
    background-color: #eeaaee;
  }
`;
class NineSquares extends React.Component {
  
  render() {
    return (
      <div>
        <Wrapper>
          <Link to={'/square/'+(this.props.index*9+0)+'/'+(this.props.content[`${(this.props.index)*9+0}`])}><Square index={(this.props.index)}>{this.props.content[`${(this.props.index)*9+0}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+1)+'/'+(this.props.content[`${(this.props.index)*9+1}`])}><Square index={(this.props.index)}>{this.props.content[`${(this.props.index)*9+1}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+2)+'/'+(this.props.content[`${(this.props.index)*9+2}`])}><Square index={(this.props.index)}>{this.props.content[`${(this.props.index)*9+2}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+3)+'/'+(this.props.content[`${(this.props.index)*9+3}`])}><Square index={(this.props.index)}>{this.props.content[`${(this.props.index)*9+3}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+4)+'/'+(this.props.content[`${(this.props.index)*9+4}`])}><Center index={(this.props.index)}>{this.props.content[`${(this.props.index)*9+4}`]}</Center></Link>
          <Link to={'/square/'+(this.props.index*9+5)+'/'+(this.props.content[`${(this.props.index)*9+5}`])}><Square index={(this.props.index)}>{this.props.content[`${(this.props.index)*9+5}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+6)+'/'+(this.props.content[`${(this.props.index)*9+6}`])}><Square index={(this.props.index)}>{this.props.content[`${(this.props.index)*9+6}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+7)+'/'+(this.props.content[`${(this.props.index)*9+7}`])}><Square index={(this.props.index)}>{this.props.content[`${(this.props.index)*9+7}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+8)+'/'+(this.props.content[`${(this.props.index)*9+8}`])}><Square index={(this.props.index)}>{this.props.content[`${(this.props.index)*9+8}`]}</Square></Link>
        </Wrapper>
      </div>
    );
  }
}
export default NineSquares;
