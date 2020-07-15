import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 50vw;
  margin-left: 25vw;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 20px;
  border-color: #82589f;
  font-size: 1.4em;
  color: #474787;
`;

export default function SearchBar(props) {
  const getTextHandle = (e) => {
    const text = e.target.value;
    props.textHandle(text);
  };

  return (
    <div>
      <Input onChange={(e) => getTextHandle(e)} value={props.text} />
    </div>
  );
}
