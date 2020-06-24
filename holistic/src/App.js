import React from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core";

const ButtonS = styled(Button)`
  color: blue;
`

function App() {
  return (
    <StylesProvider injectFirst>
      <ButtonS>I'm a button</ButtonS>
    </StylesProvider>
  );
}

export default App;
