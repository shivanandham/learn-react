import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 50%;
  border: 2px solid #eee;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  cursor: pointer;
  @media(min-width: 500px) {
    width: 450px;
  }
`;
const Person = (props) => {
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <h3 onClick={props.click}>This is {props.name} of age {props.age}</h3>
      <input type="text" onChange={props.changes} value={props.name}></input>
      <p>{props.children}</p>
    </StyledDiv>
  );
};

export default Person;