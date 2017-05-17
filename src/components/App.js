import React from 'react';
import styled from 'styled-components';

//Define your custom elements here
const RedDiv = styled.div`
  width: 400px;
  height: 200px;
  background-color: red;
  color: white;
`

const MyFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 600px;
  height: 600px;
  background-color: rgb(142, 210, 226);
`

const MyFlexItem = styled.div`
  background-color: rgb(196, 147, 199)
  border: 1px solid green;
  flex: 1 0 50px;
`




class App extends React.Component {
  constructor() {
    super();

  }

  //render your custom components here
  render() {
    return(
      <div>
        <RedDiv>I'm a big red div</RedDiv>
        <MyFlexContainer>
          <MyFlexItem>Alpha</MyFlexItem>
          <MyFlexItem>Bravo</MyFlexItem>
          <MyFlexItem>Charlie</MyFlexItem>
          <MyFlexItem>Delta</MyFlexItem>
          <MyFlexItem>Echo</MyFlexItem>
        </MyFlexContainer>
      </div>
    )
  }
}

export default App;
