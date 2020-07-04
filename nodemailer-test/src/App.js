import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <h1>내 이름으로 이메일 보내기</h1>
      <form action="http://localhost:5001/" method="post">
        <input type="email" name="email" placeholder="메일 보낼 주소"></input>
        <input type="text" name="text" placeholder="보낼내용"></input>
        <input type="submit" value="전송"></input>
      </form>
    </div>
  );
}

export default App;
