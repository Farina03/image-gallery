import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from "../responsive";

const Container = styled.div`
    padding: 0px 80px;
    height: 75px;
    margin: 0;
    color: white;
    background: linear-gradient(90deg, #7c81ad 1.18%, #8eaccd 100%);
    box-shadow: 0px 2px 8px 0px #8EACCD;
    ${mobile({ padding: 0 })};
`;
//#fff5e0
const Wrapper = styled.div`
    padding: 20px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "20px 20px" })};
    ${tablet({ padding: "20px 50px" })};
`;
const Title = styled.span`
    font-size: 30px;
`;
const Left = styled.div`
    font-size: 20px;
    margin-right: auto;
`;
const Right = styled.div`
    cursor: pointer;
    font-size: 20px;
    transition: all 0.5s ease;

    &: hover {
        transform: scale(1.1);
        color: #E64848;
    }
`;

const Navbar = (props) => {
  const arrSize = props.nums ? 3 : 0;
  return (
    <Container>
      {arrSize ?
      <Wrapper>
        <Title>Gallery</Title>
      </Wrapper> :
      <Wrapper>
        <Left>{`${arrSize} items chosen`}</Left>
        <Right onClick={props.handleClick}>Delete</Right>
      </Wrapper>}
    </Container>
  )
}

export default Navbar