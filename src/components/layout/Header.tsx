import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        Tooba Haider
      </div>
      <div className='links'>
        <Link className='link' href={"/"}>Home</Link>
        <Link className='link'  href={"/about"}>About</Link>
        <Link  className='link' href={"/contact"}>Contact</Link>
      </div>
    </div>
  )
}

export default Header