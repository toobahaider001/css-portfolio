import React from 'react'
import Button from '../shared/Button'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='projects'>
        <div className='textpro'>
            <h3>My recent <span>Projects</span></h3>
        </div>
        <div className='buttonspro'>
            <Button text='All' />
            <Button text='UI' secondary />
            <Button text='UX' secondary/>
        </div>
        <div className='imagespro'>
          <div className='threepr'>
            <Image className='img1' src="/pr1.png" alt='' height={220} width={270}/>
            <Image  className='img2p'src="/pr2.png" alt='' height={220} width={270}/>
            <Image className='img3  ' src="/pr3.png" alt='' height={220} width={270}/>
            </div>
            <div className='sixpr'>
            <Image className='img1' src="/pr4.png" alt='' height={220} width={270}/>
            <Image  className='img2p'src="/pr5.png" alt='' height={220} width={270}/>
            <Image className='img3  ' src="/pr6.png" alt='' height={220} width={270}/>
            </div>
        </div>
    </div>
  )
}

export default Projects