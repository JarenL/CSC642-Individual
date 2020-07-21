/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { render } from "react-dom";
import Styles from "./styles";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Split = styled.div`
  // padding: 12px;
  // padding-right: 6px;
  width: 50%;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
  border: 2px black solid
  
`;

const SplitContent = styled.p`
  font-size: 20px;
  // padding: 12px;
  text-align: center;
  width: 100%;
  // border: 2px black solid
`;

const TextWrapper = styled.div`
  width: 100%;
`;

//foreground
//activeBackground

const Submit = (props) => {
  console.log(props);
  const name = props.data.firstName + " " + props.data.lastName;
  const address = props.data.address + " " + props.data.zip;
  const phoneNumber = props.data.phoneNumber;
  const email = props.data.email;
  const birthDay =
    props.data.birthMonth.toString() +
    "/" +
    props.data.birthDay.toString() +
    "/" +
    props.data.birthYear.toString();
  const education =
    props.data.education !== undefined ? props.data.education : "None";
  const height =
    props.data.heightFeet !== undefined
      ? props.data.heightFeet.toString() + "'" + props.data.heightInches + '"'
      : "None";

  return (
    // <Styles>
    <>
      <Split>
        <SplitContent>Name</SplitContent>
        <SplitContent>{name}</SplitContent>
      </Split>
      <Split>
        <SplitContent>Birth Day</SplitContent>
        <SplitContent>{birthDay}</SplitContent>
      </Split>
      <Split>

      <SplitContent>Height</SplitContent>
      <SplitContent>{height}</SplitContent>
      </Split>

      <Split>
        <SplitContent>address</SplitContent>
        <SplitContent>{address}</SplitContent>
      </Split>
      <Split>
        <SplitContent>Email</SplitContent>
        <SplitContent>{email}</SplitContent>
      </Split>
      <Split>
        <SplitContent>Phone</SplitContent>
        <SplitContent>{phoneNumber}</SplitContent>
      </Split>
      <Split>
        <SplitContent>Education</SplitContent>
        <SplitContent>{education}</SplitContent>
        {/* <pre>{JSON.stringify(props, 0, 2)}</pre> */}
      </Split>
    </>
  );
};

export default Submit;
