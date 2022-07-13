import React from 'react'
import { Link } from 'react-router-dom'


const NavLink = () => {
    const link = [
      {
        link: "Home",
        dir: '/'
      },
      {
        link: "About",
        dir: '/about'
      },
      {
        link: "Service",
        dir: '/service'
      },
      {
        link: "Product",
        dir: '/product'
      }
    ]
  return (
    <>
    <ul>
        
   
           {
link.map(({link,dir})=>{
    return(
<li><Link to={dir}>{link}</Link></li>
    )
})
           } 
     
    </ul>
    </>
  )
}

export default NavLink