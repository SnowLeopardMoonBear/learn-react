// input 다루는 건 https://velopert.com/3634 참조했습니다. 감사합니다!
import React from "react";
import { Link } from "react-router-dom";
import { update } from "../actions/index.js";
import { connect } from "react-redux";

class SquareContent extends React.Component {
  state = {inputText:"default"}

  // input 안의 값이 바뀔 때마다 발동되는 함수로, state의 inputText에 저장해준다.
  handleChange = (e) => {
    this.setState({inputText: e.target.value}) // 이벤트를 유발한 element의 주소에 접근해 내부 값을 받아와 state를 업데이트.
  }
  dispatchUpdate = () => {
    this.props.send(parseInt(this.props.match.params.index), this.state.inputText);
    console.log(this.props.match.params.index, this.state.inputText)
  }

  render() {
    return (
      <div className="square-id">
        <h1>스퀘어 수정하기</h1>
        <h1> {this.props.match.params.content} </h1>
        <input
          id="input"
          type="text"
          placeholder={this.props.match.params.content}
          onChange={this.handleChange}
        ></input>
        <h1>{this.state.inputText}</h1>
        <button onClick={this.dispatchUpdate}>전송</button>
        <Link to="/"><span>홈으로</span></Link>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
let mapStateToProps = (state)=>{
  return{
    content: state.content
  };
}
let mapDispatchToProps = (dispatch) => {
  return {
    send: (index, newText) => dispatch(update(index,newText))
  };
}
const SquarePage = connect(mapStateToProps, mapDispatchToProps)(SquareContent);
export default SquarePage;
