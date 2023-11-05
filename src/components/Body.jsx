import React from 'react'
import Navbar from './Navbar.jsx'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'
import { data } from '../data.js'
import './body.css'
import { useState } from 'react';
import { AddPhotoAlternateOutlined } from '@mui/icons-material'
import SortableList, {SortableItem} from 'react-easy-sort'
import { arrayMoveImmutable } from 'array-move'

const Container = styled.div`
  ${mobile({ padding: 0 })};
  ${tablet({ padding: 0 })};
`;
const GridWrapper = styled.div`
  padding: 20px 70px;
  justify-content: center;
  ${mobile({ padding: "20px 20px" })};
  ${tablet({ padding: "20px 50px" })};
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  z-index: 0;
  transition: all 0.5s ease;
`;
const Box = styled.div`
  border: 2px solid white;
  border-radius: 7px;
  box-shadow: 0px 2px 8px 0px #B9B4C7;
  transition: all 0.5s ease;
  background-color: white;
  position: relative;
  cursor: drag;
  display: flex;
  &: hover {
    border: 2px solid darkgrey;
    transform: scale(1.05);
    background-color: rgba(0,0,0,.6);
  }
  &: hover ${Image} {
    opacity: .5;
  }
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
  imgArr.map(item => {
    item.selected && cnt++
  })
  function editImgArr(event) {
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
  const onSortEnd = (oldIndex, newIndex) => {
    setImgArr(array => arrayMoveImmutable(array, oldIndex, newIndex))
  }
  
  return (
    <Container>
      <Navbar nums = {cnt} handleClick={handleDelete}/>
      {console.log(cnt)}
      <GridWrapper>
      <SortableList className="list" onSortEnd={onSortEnd} draggedItemClassName="dragged">
        {imgArr.map((item, index) => {
         return (
            <SortableItem key={item.id}>
              {/* <FeatureBox key={item.id}> */}
              
              <Box className={index === 0 ? "featurebox" : "wrapper"} > 
              <Image src={item.url}/>
              <input className="checkbox-class" type="checkbox" name={item.id} 
                      checked={item.selected} onChange={editImgArr} />
              {/* </FeatureBox> */}
              </Box>
            </SortableItem>
            )}
        )}
        <Box className="wrapper">
          <AddImgBox>
            <Icon><AddPhotoAlternateOutlined/> </Icon>
            <div>Add Images</div>
          </AddImgBox>
        </Box>
        </SortableList>
      </GridWrapper>
    </Container>
  )
}

export default Body