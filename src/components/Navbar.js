import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../fitness.png'
const Navbar = () => {
  return (
    <nav>
      <div className='navBranding'>
      <img src={logo} alt="logo" className='branding'/>
      <Link to='/'>
        <h1>Fitness<span className='brandColor'>Pro</span></h1>
      </Link>
      </div>
    </nav>
  )
}

export default Navbar
