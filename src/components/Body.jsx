import React from 'react'
import Navbar from './Navbar.jsx'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'
import { data } from '../data.js'
import './body.css'
import { useState } from 'react';
import { AddPhotoAlternateOutlined } from '@mui/icons-material'
import SingleImage from './SingleImage.jsx'

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
  background-color: white;
`;
const FeatureBox = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  width: 25.2rem;
  height: 25.2rem;
  position: relative;
`;
const AddImgBox = styled.div`
  height: 100%;
  width: 100%;
  border: 2px dashed darkgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;
const Icon = styled.div`
  margin-bottom: 20px;
`;

const Body = () => {
  const [imgArr, setImgArr] = useState(data)
  let cnt = 0;

  async function editImgArr(event) {
    const {name, checked} = event.target
    setImgArr(imgArr.map(item => {
      if(item.id == name) {
        return {
          ...item,
          selected:checked
        }}
        else {
          return item;
        }
      })
    )
  }
  function handleDelete() {
    setImgArr(imgArr.filter(item => !item.selected));
  }
  
  return (
    <Container>
      {imgArr.map(item => {
        item.selected && cnt++
      })}
      <Navbar nums = {cnt} handleClick={handleDelete}/>
      {console.log(cnt)}
      <GridWrapper>
        {imgArr.map((item) => {
         return (item === imgArr[0]) ?
          <FeatureBox key={item.id}>
            <SingleImage currentid={item.id} url={item.url} 
                        toCheck={item.selected} handleChange={editImgArr}/>
            {console.log(item)}
          </FeatureBox>
          : <Wrapper key={item.id}>
            <SingleImage currentid={item.id} url={item.url} 
                        toCheck={item.selected} handleChange={editImgArr}/>
            {console.log(item)}
          </Wrapper>
        })}
        <Wrapper>
          <AddImgBox>
            <Icon><AddPhotoAlternateOutlined/> </Icon>
            <div>Add Images</div>
          </AddImgBox>
        </Wrapper>
      </GridWrapper>
    </Container>
  )
}

export default Body