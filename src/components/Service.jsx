import React from 'react'
import image1 from '../assets/Art_nature.jpg'
import image2 from '../assets/Art_animals.jpg'
import image3 from '../assets/Art.jpg'
import image4 from '../assets/Art_dogs.jpg'
import Btn from './Btn'
import Link from './Link'

const data = [
    {
        id: 1,
        image: image1,
        title: "Nature",
        butt: <Btn text="service" className="btn"/>
    },
    {
        id: 2,
        image: image2,
        title: "Animals"
    },
    {
        id: 3,
        image: image3,
        title: "Abstract"
    },
    {
        id: 4,
        image: image4,
        title: "Dogs"
    }
]
const Service = () => {
    
  return (
    <>
    <Link/>
    <div className="service">
        <h1>Service</h1>
<div className="cards">
    {
        data.map(({id,image,title,butt})=>{
            return(
    <div className="card" key={id}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        {butt}
    </div>
            )
        })
    }
    
</div>
    </div>
    </>
  )
}

export default Service