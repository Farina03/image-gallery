import React from 'react'
import './singleimage.css'
import { useSortable } from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'

const SingleImage = (props) => {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({id: props.currentid})

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="wrapper-inner">
        <img className="image-class" src={props.url} />
        <input className="checkbox-class" type="checkbox" name={props.currentid} 
              checked={props.toCheck} onChange={props.handleChange} />
      </div>
    </div>
  )
}

export default SingleImage