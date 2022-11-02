import React, { useState } from 'react'
import Banner from '../assets/heroimg.jpg'
import Card from '../components/Card'
import CategoryCard from '../components/CategoryCard'
import SearchContainer from '../components/SearchContainer'
import cardio from '../assets/muscles/cardio.png'
import chest from '../assets/muscles/chest.png'
import neck from '../assets/muscles/neck.png'
import shoulders from '../assets/muscles/shoulders.png'
import upperarms from '../assets/muscles/upperarms.png'
import upperlegs from '../assets/muscles/upperlegs.png'
import waist from '../assets/muscles/waist.png'
import back from '../assets/muscles/back.png'
import lowerarms from '../assets/muscles/lowerarms.png'
import lowerlegs from '../assets/muscles/lowerlegs.png'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
const Home = ({ excercise, mainExc, setMainExc }) => {
    const [bodyParts,] = useState([
        { title: 'cardio', img: cardio },
        { title: 'neck', img: neck },
        { title: 'chest', img: chest },
        { title: 'back', img: back },
        { title: 'shoulders', img: shoulders },
        { title: 'upperarms', img: upperarms },
        { title: 'lowerarms', img: lowerarms },
        { title: 'waist', img: waist },
        { title: 'upperlegs', img: upperlegs },
        { title: 'lowerlegs', img: lowerlegs }
    ]);

    return (
        <main >
            <div className='heroContent'>
                <div className='intro'>
                    <h1>Charge Your <span className='brandColor'>Blood</span><br></br> and <span className='brandColor'>Confidence</span>,<br></br>
                        with daily dose of<br></br> workout videos.</h1>
                </div>
                <img src={Banner} className='bannerimg' alt='Banner' />
            </div>

            <h3 className='searchOptions'>Explore excercises based on categories below or Search for the specific ones.</h3>
            <div className='categoryContainer'>
                {bodyParts.map(item => {
                    return <CategoryCard key={item.title} data={excercise} setter={setMainExc} bodyPart={item.title} img={item.img} name={item.title} />
                })}
            </div>
            <SearchContainer setter={setMainExc} data={excercise} />
            <div className='cardContainer'>

                {!mainExc.length && <Loader />}
                {mainExc.map(item => {
                    return <Link key={item.id} to={`excercise_details/${item.id}`}><Card key={item.id} id={item.id} data={item} /></Link>
                })}
            </div>
        </main>
    )
}

export default Home
