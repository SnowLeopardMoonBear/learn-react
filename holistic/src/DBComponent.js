import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
  background-color: #eeeefa;
`;

function DBComponent(props) {
  return (
    <Wrapper>
      <div>
        <h1>Place for DB</h1>
        <span>{props.reduxText}</span>
      </div>
    </Wrapper>
  );
}
export default DBComponent;
