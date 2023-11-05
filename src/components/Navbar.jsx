import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from "../responsive";

const Container = styled.div`
    padding: 0px 80px;
    height: 75px;
    margin: 0;
    color: white;
    letter-spacing: -0.8px;
    background: linear-gradient(90deg, #4F3B78 1.18%, #927FBF 100%);
    box-shadow: 0px 2px 8px 0px #8EACCD;
    ${mobile({ padding: "0px 30px" })};
`;
const Wrapper = styled.div`
    padding: 20px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "20px 30px" })};
    ${tablet({ padding: "20px 30px" })};
`;
const Title = styled.span`
    font-size: 32px;
    font-family: 'Charm', cursive;
`;
const Left = styled.div`
    font-size: 22px;
    margin-right: auto;
`;
const Right = styled.div`
    cursor: pointer;
    font-size: 20px;
    transition: all 0.2s ease;
    background-color: #E64848;
    height: 40px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    &: hover {
        transform: scale(1.05);
        background-color: #D72323;
    }
`;

const Navbar = (props) => {
  const arrSize = props.nums
  return (
    <Container>
      {arrSize ?
      <Wrapper>
        {arrSize === 1 ? <Left>{`${arrSize} item selected`}</Left> :
        <Left>{`${arrSize} items selected`}</Left>}
        <Right onClick={props.handleClick}>Delete</Right>
      </Wrapper>
      : <Wrapper>
        <Title>Galleria</Title>
      </Wrapper> }
    </Container>
  )
}

export default Navbar