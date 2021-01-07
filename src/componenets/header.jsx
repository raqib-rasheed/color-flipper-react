import React from 'react'
import PropTypes from 'prop-types'
import Canvas from './canvas';

export default function Header(){
  const [isRGB, setIsRGB] = React.useState(true)
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-md">
    <h4>Color Flipper</h4>
    <button className="btn-outline-dark btn" onClick={()=>{setIsRGB(true)}
    }>
    RGBA</button>
    <button className="btn-outline-dark btn" onClick={()=>setIsRGB(false)}>Hex</button>
  </div>
</nav>
<Canvas isRGB={isRGB} />
</>
  )
}
Header.proptye = {
  setIsRGB:PropTypes.func.isRequired
}
