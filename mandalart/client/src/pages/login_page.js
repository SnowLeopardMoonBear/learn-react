import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #fffaff;
  color: #333333;
  padding: 10px;
  height: 100vh;
  text-align: center;
`;
const Title = styled.h1`
  color: #333333;
`;
const Form = styled.div`
  padding: 5px;
  margin: 5px;
`;

const Input = styled.input`
  background-color: #fffdfd;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
`;
const Button = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 2px;
  margin: 10px;
  background-color: #ff8fe3;
  color: #fff7f7;
  &:hover {
    color: #ffffff;
    background-color: #ff6bda;
    cursor: pointer;
  }
`;
const Band = styled.div`
  position: fixed;
  height: 5vh;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 36px);
  bottom: 15px;
  vertical-align: center;
  color: #ffffff;
  background-color: #4400bb;
`;

class LoginPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>로그인</Title>
        <Form>
          <Input type="text" placeholder="아이디"></Input>
          <Input type="password" placeholder="비밀번호"></Input>
        </Form>
        <Button>로그인하기</Button>
        <Band>
          나만의 만다라트와 함께해요 :)
          <Button>회원가입</Button>
        </Band>
      </Wrapper>
    );
  }
}
export default LoginPage;
