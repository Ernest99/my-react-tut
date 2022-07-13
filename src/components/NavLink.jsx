import React from 'react'
import { Link } from 'react-router-dom'


const NavLink = () => {
    const link = ["Home", "About", "Service", "Contact"]
  return (
    <>
    <ul>
        
   
           {
link.map((link)=>{
    return(
<li><Link to="/">{link}</Link></li>
    )
})
           } 
     
    </ul>
    </>
  )
}

export default NavLink