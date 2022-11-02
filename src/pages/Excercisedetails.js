import React from 'react'
import Details from '../components/Details'
import { useParams, } from 'react-router-dom'

const Excercisedetails = ({ excercise }) => {
  const { id } = useParams()
  return (
    <div className='maindetails'>
      {excercise.map(item => item.id === id && <Details key={item.id} data={item} maindata={excercise} />)}
    </div>
  )
}

export default Excercisedetails
