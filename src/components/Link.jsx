import React from 'react'

const Link = () => {
    const link = ["Home", "About", "Service", "Contact"]
  return (
    <>
    <ul>
        
   
           {
link.map((link)=>{
    return(
<li><a href="/">{link}</a></li>
    )
})
           } 
     
    </ul>
    </>
  )
}

export default Link