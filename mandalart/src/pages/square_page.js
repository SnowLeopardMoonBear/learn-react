import React from "react";
import { Link } from "react-router-dom";

const SquarePage = ({ match }) => {
  const send = () => {
    alert("전송합니다");
  };

  return (
    <div className="square-id">
      <h1> {match.params.id} </h1>
      <input type="text" placeholder="만다라트 내용을 입력해주세요"></input>
      <Link to="/">
        <button onClick={send}>전송</button>
      </Link>
    </div>
  );
};

export default SquarePage;
