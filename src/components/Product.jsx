import React from 'react'
import Btn from './Btn'
import NavLink from './NavLink'


const Product = () => {

    return (
       <div>
        <h1>Product</h1>
        <Btn text="Product Button" className="btn"/>
        <h2>This is the product page....</h2>
        <NavLink/>
       </div>
    )
}

export default Product