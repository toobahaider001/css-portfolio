import React from 'react'
import { FaFacebook, FaInstagram, FaPerson, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { IoIosCall, IoIosHome } from 'react-icons/io'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-text'>
                <div className='home'>
                <IoIosHome size={30} color='white' />
                <h2>Home</h2>
                </div>
                <div className='aboutme'>
                <FaPerson size={30} color='white' />
                <h2>About </h2>
                </div>
                <div className='contactme'>
                <IoIosCall size={30} color='white' />
                <h2>Contact</h2>
                </div>
      </div>
      <div className='footer-icons'>
        <div className='facebook'>
        <FaFacebook  size={40} color='white'/>
        </div>
        <div className='insta'>
        <FaInstagram  size={40} color='white'/>
        </div>
        <div className='twitter'>
            <FaTwitter size={40} color='white' />
        </div>
        <div className='youtube'>
          <FaYoutube  size={40} color='white'/>
        </div>
      </div>
    </div>
  )
}

export default Footer