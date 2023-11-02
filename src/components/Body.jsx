import React from 'react'
import Navbar from './Navbar.jsx'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'
import { data } from '../data.js'
import './body.css'
// import img from '../images/image-1.webp'

const Container = styled.div`
  ${mobile({ padding: 0 })};
  ${tablet({ padding: 0 })};
`;
const GridWrapper = styled.div`
  padding: 20px 70px;
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, 12rem);
  justify-content: center;
  ${mobile({ padding: "20px 20px" })};
  ${tablet({ padding: "20px 50px" })};
`;
const Wrapper = styled.div`
  height: 12rem;
  position: relative;
`;
const FeatureBox = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  width: 25.2rem;
  height: 25.2rem;
  position: relative;
`;
const Box = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid white;
  border-radius: 7px;
  box-shadow: 0px 2px 8px 0px #B9B4C7;
  transition: all 0.5s ease;
  position: absolute;
  background-color: white;
  z-index: 1;
  &: hover {
    border: 2px solid darkgrey;
    transform: scale(1.05);
    background-color: rgba(0,0,0,0.4);
    z-index: 3;
  };
`;
//background-color: rgba(0,0,0,0.4);
//opacity: .6;
const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  position: absolute;
  transition: all 0.5s ease;
  z-index: -1;
  &: hover {
    opacity: 0.4;
  }
`;
const AddImgBox = styled.div`
  height: 100%;
  width: 100%;
  border: 2px dashed darkgrey;
`;

const Body = () => {
  // const dataArray = data.map((item) => {
  //   return item
  // })
  function handleChange() {

  }
  return (
    <Container>
      <Navbar nums = {false}/>
      <GridWrapper>
        {data.map((item) => {
          return (item === data[0]) ?
          <FeatureBox key={item.id}>
            <Box className="box-class">
              <Image src={item.url}/>
              <input className="checkbox-class" 
                    type="checkbox"
                    name="isSelected"
                    checked={item.isSelected}
                    onChange={handleChange}></input>
            </Box>
          </FeatureBox>
          : <Wrapper key={item.id}>
            <Box className="box-class">
              <Image src = {item.url}/>
              <input className="checkbox-class" type="checkbox"></input>
            </Box>
          </Wrapper>
        })}
        <Wrapper>
          <AddImgBox>Add Image</AddImgBox>
        </Wrapper>
      </GridWrapper>
    </Container>
  )
}

export default Body



{/* <FeatureBox>
          <Box><Image src={data[0].url}/></Box>
        </FeatureBox>
        <Wrapper>
          <Box><Image src = {data[1].url}/></Box>
        </Wrapper>
        <Wrapper>
          <Box><Image src = {data[1].url}/></Box>
        </Wrapper>
        <Wrapper>
          <Box><Image src = {data[1].url}/></Box>
        </Wrapper>
        <Wrapper>
          <Box><Image src = {data[1].url}/></Box>
        </Wrapper>
        <Wrapper>
          <Box><Image src = {data[1].url}/></Box>
        </Wrapper>
        <Wrapper>
          <Box><Image src = {data[1].url}/></Box>
        </Wrapper>
        <Wrapper>
          <Box><Image src = {data[1].url}/></Box>
        </Wrapper>
        <Wrapper>
          <Box><Image src = {data[1].url}/></Box>
        </Wrapper>
        <Wrapper>
          <Box><Image src = {data[1].url}/></Box>
        </Wrapper> */}