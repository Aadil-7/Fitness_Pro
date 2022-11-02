import React from 'react'

const CategoryCard = (props) => {

  const categorySearch=(para)=>{
    const searchResult = props.data.filter(
      item => item.bodyPart.toLowerCase().replaceAll(' ', '').includes(para)
    )
    props.setter(searchResult)
  }

  return (
    <div className='categoryCard' value={props.bodyPart} onClick={()=>categorySearch(props.bodyPart)}>
      <img src={props.img} alt={props.bodyPart} width='80px'/>
      <p>{props.bodyPart}</p>
    </div>
  )
}

export default CategoryCard
