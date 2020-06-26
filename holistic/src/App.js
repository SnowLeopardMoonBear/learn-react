import React from "react";
import styled from "styled-components";
import Communication from "./Communication.js";

const Wrapper = styled.div`
  max-width: 1024px;
  background-color: #eeeeee;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1000px){
    background-color: #faeeee;
  }
`;

function App() {
  return (
    <Wrapper>
        <Communication text="Communication Test Component"></Communication>
    </Wrapper>
  );
}

export default App;
