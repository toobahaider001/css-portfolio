import React from 'react'
import Button from '../shared/Button'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='text'>
            <h2>CREATIVE FRONTEND <span>DEVELOPER</span></h2>
            <p> I create responsive, user-focused web interfaces with clean code and modern design.</p>
            <div className='btn-hero'>
            <Button  text='Hire Me' />
            </div>
        </div>
        <div className='img'>
          <Image className="imgs"src="/doodle.png" alt='' height={450} width={450} />
          <Image className='img2' src="/per.png" alt='' height={350} width={300}/>
        </div>
        <div className='shadow'></div>
    </div>
  )
}

export default Hero