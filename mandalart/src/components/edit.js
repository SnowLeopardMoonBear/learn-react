import React from "react";
import Styled from "styled-components";

class Edit extends React.Component {
  submitToStore = (data) => {
    // Redux Store의 reducer로 보내는 dispatch와 액션생성함수
  };
  render() {
    return (
      <div>
        <h3>{this.props.content[`${this.props.index}`]} 수정하기</h3>
        <input
          type="text"
          placeholder={this.props.content[`${this.props.index}`]}
        ></input>
        <button onClick="submitToStore">저장</button>
      </div>
    );
  }
}

export default Edit;
