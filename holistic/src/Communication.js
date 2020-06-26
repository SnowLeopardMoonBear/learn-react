import React, {useState, useEffect} from "react";
import DBComponent from "./DBComponent.js";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core";
import { Button } from "@material-ui/core";
import axios from "axios";

const ButtonS = styled(Button)`
  color: blue;
  background-color: #ffffff;
`;

function Communication(props) {
  const [poke, setPoke] = useState("데이터 불러오기 전");
  const getPoke = (event)=>{
    event.preventDefault();
    axios.get("https://pokeapi.co/api/v2/pokemon/1")
      .then((res)=>{
        console.log(res);
        setPoke('Get PokeAPI Success');
      });
  }
  return (
    <div>
      <StylesProvider injectFirst>
        <h1>Communication</h1>
        <h2>props test: {props.text}</h2>
        <ButtonS onClick={getPoke}>Bring PokeAPI</ButtonS>
        <div>{poke}</div>
        <DBComponent></DBComponent>
      </StylesProvider>
    </div>
  );
}

export default Communication;
