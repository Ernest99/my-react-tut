import React from 'react'
import { useTypewriter} from 'react-simple-typewriter'
import Btn from './Btn'
import img1 from '../assets/logo-bcc.jpg'

const Home = () => {
    const {text} = useTypewriter({
        words: [' Developer...', 'Creator...', 'Designer...', 'Mentor...'],
        loop: 0, 
        typeSpeed: 300,
        deleteSpeed: 30,
        delaySpeed: 1000
      })
    return (
        <>
            <h1>Home</h1>
            <h2>I'm a <span className='color'> {text}<span className="cursor">|</span></span></h2>
            <div className="center">
<Btn text="Download CV" className="btn"/>

</div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>Id ipsum commodi labore minus excepturi, sit quasi distinctio laborum enim harum.</p>
<img src={img1} alt="" />
        </>
    )
}

export default Home