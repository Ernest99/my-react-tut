import React from 'react'
import Btn from './Btn'
import NavLink from './NavLink'
import Person from './About'

const Product = () => {

    return (
       <div>
        <h1>Product</h1>
        <Person name='Max' age='20'/>
        <Btn text="Product Button" className="btn"/>
        <h2>This is the product page....</h2>
        <NavLink/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi nihil debitis odio quis fuga accusamus perferendis est cum cumque?</p>
       </div>
    )
}

export default Product