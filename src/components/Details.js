import React, { useState, useEffect } from 'react'
import Card from './Card';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Details = ({ data, maindata }) => {
    const [superdata,] = useState(maindata);
    const [recomendation, setRecomendation] = useState([]);
    useEffect(() => {
        const filteredData = superdata.filter(
            item => item.target.toLowerCase().replaceAll(' ', '').includes(data.target)
                || item.target.toLowerCase().replaceAll(' ', '').includes(data.target)
        )
        setRecomendation(filteredData.slice(0, 10))
    }, [])
    return (
        <>
            <div className='detailcontainer'>
                <img src={data.gifUrl} alt={data.name} width='400px' />
                <div className='excdetails'>
                    <h2>{data.name}</h2>
                    <p><b>Target Muscle: </b>{data.target}</p>
                    <p><b>Equipment: </b>{data.equipment}</p>
                    <p><b>{data.name}</b> excercise is very helpful to work on {data.target} muscles.</p>
                </div>
            </div>
            <h1>Some recomendations based on your interest.</h1>
            <div className='recomendation'>
                {!recomendation.length && <Loader />}
                <div className='recomendCards'>
                    {recomendation.map(item => <Link key={item.id} to={`/excercise_details/${item.id}`}><Card key={item.id} id={item.id} data={item} /></Link>)}
                </div>
            </div>
        </>
    )
}

export default Details
