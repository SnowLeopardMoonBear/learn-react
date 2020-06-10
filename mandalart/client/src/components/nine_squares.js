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
  display: block;
  border-color: #ff69b4;
  border-style: solid;
  word-break:break-all;
  overflow:hidden;
  width: 80px;
  height: 80px;
  font-size: 1.1rem;
  font-weight: 400;
  float: left;
  text-align: center;
  color: #222222;
`;

// props 값 이용하는 건 아직 안 되네. 값 넘어오는 순서 때문인가
const Center = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 2px;
  border-color: #ff69b4;
  border-style: solid;
  display: block;
  word-break: break-word;
  overflow: hidden;
  width: 80px;
  height: 80px;
  font-size: 1.3rem;
  font-weight: 700;
  float: left;
  text-align: center;
  background-color: #ffb3d4;
  color: aliceblue;
`;
class NineSquares extends React.Component {
  
  render() {
    return (
      <div>
        <Wrapper>
          <Link to={'/square/'+(this.props.index*9+0)+'/'+(this.props.content[`${(this.props.index)*9+0}`])}><Square>{this.props.content[`${(this.props.index)*9+0}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+1)+'/'+(this.props.content[`${(this.props.index)*9+1}`])}><Square>{this.props.content[`${(this.props.index)*9+1}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+2)+'/'+(this.props.content[`${(this.props.index)*9+2}`])}><Square>{this.props.content[`${(this.props.index)*9+2}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+3)+'/'+(this.props.content[`${(this.props.index)*9+3}`])}><Square>{this.props.content[`${(this.props.index)*9+3}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+4)+'/'+(this.props.content[`${(this.props.index)*9+4}`])}><Center>{this.props.content[`${(this.props.index)*9+4}`]}</Center></Link>
          <Link to={'/square/'+(this.props.index*9+5)+'/'+(this.props.content[`${(this.props.index)*9+5}`])}><Square>{this.props.content[`${(this.props.index)*9+5}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+6)+'/'+(this.props.content[`${(this.props.index)*9+6}`])}><Square>{this.props.content[`${(this.props.index)*9+6}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+7)+'/'+(this.props.content[`${(this.props.index)*9+7}`])}><Square>{this.props.content[`${(this.props.index)*9+7}`]}</Square></Link>
          <Link to={'/square/'+(this.props.index*9+8)+'/'+(this.props.content[`${(this.props.index)*9+8}`])}><Square>{this.props.content[`${(this.props.index)*9+8}`]}</Square></Link>
        </Wrapper>
      </div>
    );
  }
}
export default NineSquares;
