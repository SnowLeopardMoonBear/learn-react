import React from 'react';
import styled from "styled-components";
import Level2 from './Level2'

const Level1 = styled.div`
  font-size: 50px;
`

function App() {
  return (
    <Level1>
      Level 1 Text
      <Level2></Level2>
    </Level1>
  );
}

export default App;
