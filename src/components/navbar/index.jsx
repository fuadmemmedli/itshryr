import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-between',fontSize:'20px', padding:'10px 50px'}}>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
    </div>
  )
}

export default Navbar