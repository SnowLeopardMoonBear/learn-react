import React from "react";
import { Link } from "react-router-dom";
import { Update } from "../actions/index.js";
import { Connect } from "react-redux";

class SquarePage extends React.Component {
  send = () => {
    alert("전송합니다");
  };

  render() {
    return (
      <div className="square-id">
        <h1> {this.props.match.params.content} </h1>
        <input
          id="input"
          type="text"
          placeholder={this.props.match.params.content}
        ></input>
        <Link to="/">
          <button onClick={this.send}>전송</button>
        </Link>
      </div>
    );
  }
}

export default SquarePage;
