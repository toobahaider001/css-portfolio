import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className='about-text'>
            <h3>About <span>me</span></h3>
            <p>I'm a frontend developer dedicated to building responsive and visually appealing web interfaces. I focus on writing clean, maintainable code and strive to deliver user-friendly experiences using the latest tools and technologies.</p>
        </div>
        <div className='about-img'>
            <Image className='doodle' src="/doodle.png" alt='' height={500} width={500} />
            <Image  className="imgper" src="/img2.png" alt='' height={400} width={400} />
        </div>
    </div>
  )
}

export default About