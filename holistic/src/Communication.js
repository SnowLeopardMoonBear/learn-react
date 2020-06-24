import React from "react";
import DBComponent from "./DBComponent.js";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core";
import { Button } from "@material-ui/core";

const ButtonS = styled(Button)`
  color: blue;
  background-color: #ffffff;
`;

function Communication(props) {
  return (
    <div>
      <StylesProvider injectFirst>
        <h1>Communication</h1>
        <ButtonS>I'm a styled button</ButtonS>
        <h2>props test: {props.text}</h2>
        <DBComponent></DBComponent>
      </StylesProvider>
    </div>
  );
}

export default Communication;
