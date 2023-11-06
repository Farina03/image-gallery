import React from 'react'
import Navbar from './Navbar.jsx'
import SingleImage from './SingleImage.jsx'
import { data } from '../data.js'
import './newbody.css'
import { useState } from 'react';
import { AddPhotoAlternateOutlined } from '@mui/icons-material'
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy
} from '@dnd-kit/sortable'

const NewBody = () => {

  const [imgArr, setImgArr] = useState(data)

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint : {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint :{
        delay: 500,
        tolerance: 16,
      }
    })
  )

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

  function handleDragEnd(event) {
    const {active, over} = event;

    if(over && active.id !== over.id) {
      let activeIndex, overIndex
      imgArr.map((item,index) => {
        if(item.id === active.id)
          activeIndex = index
        if(item.id === over.id)
          overIndex = index
      })
      // console.log(activeIndex, overIndex)
      setImgArr(item => {
        return arrayMove(item, activeIndex, overIndex)
      })
    }
  }
  
  return (
    <div className='container'>
      <Navbar nums = {cnt} handleClick={handleDelete}/>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd} >

        <SortableContext items={imgArr.map(i => i.id)} strategy={rectSortingStrategy} >
          <div className='list'>
            {imgArr.map((item, index) => {
              return (
                <div className={index === 0 ? "featurebox wrapper" : "wrapper"}>
                  <SingleImage key={item.id} imgindex={index} url={item.url} currentid={item.id}
                          toCheck={item.selected} handleChange={editImgArr} />
                </div>
              )}
            )}
            <div className="wrapper">
              <div className='addimagebox'>
                <div className='icon'><AddPhotoAlternateOutlined/> </div>
                <div>Add Images</div>
              </div>
            </div>
          </div>
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default NewBody