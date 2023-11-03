import React from 'react'
import styled from 'styled-components'
import './body.css'

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  position: absolute;
  transition: all 0.5s ease;
`;
const Box = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid white;
  border-radius: 7px;
  box-shadow: 0px 2px 8px 0px #B9B4C7;
  transition: all 0.5s ease;
  position: absolute;
  &: hover {
    border: 2px solid darkgrey;
    transform: scale(1.05);
    background-color: rgba(0,0,0,.6);
  }
  &: hover ${Image} {
    opacity: .5;
  }
`;

const SingleImage = (props) => {
  return (
      <Box className="box-class" >
      <Image src={props.url}/>
      <input className="checkbox-class" type="checkbox" name={props.currentid} checked={props.toCheck} 
      onChange={props.handleChange} />
    </Box>
  )
}

export default SingleImage