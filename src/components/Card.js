import React from 'react'
const Card = (props) => {

  return (
    <div className='card' id={props.id}>
      <img src={props.data.gifUrl} alt='cardimg' width='300px'/>
      <h3>{props.data.name}</h3>
      <p><b>Target Muscle:</b> {props.data.target}</p>
      <p><b>Equipment:</b> {props.data.equipment}</p>
      <span className='topBrdr'></span>
    </div>
  )
}

export default Card
