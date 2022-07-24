import React from 'react'
import Btn from './Btn'
import img1 from '../assets/logo-bcc.jpg'
import NavLink from './NavLink'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Person = ({name,age}) =>{
  return(
    <>
    <h2>Name:{name} </h2>
    <h2>Age: {age}</h2>
    </>
  )
}

const About = () => {
const [counter, setCounter] = useState(0);
  return (
    <div>
        <h1>About</h1>
        <img src={img1} alt="" />
        <Btn text="About Me" className="btn"/>
        <NavLink/>
        <div>
          <Link to="/">Feature {'>'}<span className='space'>blog</span> </Link>
        </div>
        <Person name={'John'} age={20}/>
        <div className='counter'>
          <button onClick={()=> setCounter(counter - 1) }>-</button>
          <h2>{counter}</h2>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    </div>
  )
}

export default About