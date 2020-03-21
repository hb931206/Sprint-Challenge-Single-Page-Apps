import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CharSubtitle = styled.h2`
  color: black;
  font-size: 45px;
  border: 1px solid black;
`;

const CharacterCard = props => {
  return <CharSubtitle>{props.name}</CharSubtitle>;
};

export default CharacterCard;
