import React from "react";
import styled from "styled-components";

const LayOut = styled.div`
  width: 50vw;
  margin-left: 25vw;
  padding: 5px 5px 5px 5px;
  font-size: 1.2em;
  font-family: Courier New;
  font-weight: bold;
  background-color: ${(props) => (props.id % 2 === 0 ? "#d2dae2" : "#f7f1e3")};
`;

export default function Contact(props) {
  return (
    <div>
      {props.contacts.map(({ name, email, id }) => {
        return (
          <LayOut key={id} id={id}>
            <span style={{ float: "left" }}>{name}</span>
            <span style={{ float: "right" }}>{email}</span>
            <br />
          </LayOut>
        );
      })}
    </div>
  );
}
