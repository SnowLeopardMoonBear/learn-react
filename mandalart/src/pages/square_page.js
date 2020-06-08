// input 다루는 건 https://velopert.com/3634 참조했습니다. 감사합니다!
import React from "react";
import { Link } from "react-router-dom";
import { Update } from "../actions/index.js";
import { Connect } from "react-redux";

class SquarePage extends React.Component {
  state = {inputText:"default"}
  send = () => {
    alert(this.state.inputText);
  };
  // input 안의 값이 바뀔 때마다 발동되는 함수로, state의 inputText에 저장해준다.
  handleChange = (e) => {
    this.setState({inputText: e.target.value}) // 이벤트를 유발한 element의 주소에 접근해 내부 값을 받아와 state를 업데이트.
  }
  render() {
    return (
      <div className="square-id">
        <h1> {this.props.match.params.content} </h1>
        <input
          id="input"
          type="text"
          placeholder={this.props.match.params.content}
          onChange={this.handleChange}
        ></input>
        <h1>{this.state.inputText}</h1>
        <Link to="/">
          <button onClick={this.send}>전송</button>
        </Link>
      </div>
    );
  }
}

export default SquarePage;
