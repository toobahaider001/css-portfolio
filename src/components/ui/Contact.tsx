import Image from 'next/image'
import React from 'react'
import Button from '../shared/Button'

const Contact = () => {
  return (
    <div className='contact'>
                <div className='contact-img'>
                    <h2>Got a project in <br /><span>mind?</span> <br /></h2>
                    <Image className='cntimg' src="/contact.png" alt='' height={300} width={250} />
                </div>
                <div className='contact-text'>
                    <div className='name-email'>
                        <div>
                            <label htmlFor="">Your Name</label>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div>
                            <label htmlFor="">Your Email</label>
                            <input type="text" placeholder='Email' />
                        </div>
                    </div>
                    <div className='des'>
                        <label htmlFor="">Your message</label>
                        <textarea name="" id="">Message</textarea>
                    </div>
                    <div className='btn'>
                        <Button text='Send message' />
                    </div>
                </div>
    </div>
  )
}

export default Contact