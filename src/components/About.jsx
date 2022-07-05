import React from 'react'
import Btn from './Btn'
import img1 from '../assets/logo-bcc.jpg'
const About = () => {
  return (
    <div>
        <h1>About</h1>
        <img src={img1} alt="" />
        <Btn text="About Me" className="btn"/>
    </div>
  )
}

export default About