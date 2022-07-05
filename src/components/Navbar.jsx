import React from 'react'
import {Link} from 'react-router-dom'

window.addEventListener('scroll', () => {
const nav = document.querySelector('nav');
window.pageYOffset > 100 ? nav.classList.add('active') : nav.classList.remove('active')
});

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Product</Link>
                <Link to="/service">Service</Link>
            </nav>
        </div>
    )
}

export default Navbar