import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CharSubtitle = styled.h2`
  color: black;
  font-size: 45px;
`;

const CharacterCard = props => {
  return (
    <div>
      <img alt={`${props.name}`} src={props.image} />
      <CharSubtitle>{props.name}</CharSubtitle>
      <p>{props.status}</p>
    </div>
  );
};

export default CharacterCard;
