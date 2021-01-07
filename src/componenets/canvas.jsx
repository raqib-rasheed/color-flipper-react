import React from 'react'
import { hexColorArray , rgbColors } from '../utils/index'

export default function Canvas( {isRGB} ){
  const [RGB,setRGB] = React.useState("rgb(0,0,0)")
  const [hex,setHex] = React.useState("#000")
  const [color,setColor] = React.useState("rgb(0,0,0)")

  function handleClick(){
    const index = Math.floor(Math.random() * 30)
    if(isRGB){
      const rgbColor = rgbColors[index]
      setColor(`rgb(${rgbColor})`)
      return setRGB(`rgb(${rgbColor})`)
    }else{
      const hexColor = hexColorArray[index]
      setRGB(null)
      setColor(hexColor)
      return setHex(hexColor)

    }
  }

  return(
    <div 
    id="container" 
    className="container mt-5 d-flex justify-content-center align-items-center"
    style= {{ backgroundColor : color }}>
    
    <div className="d-flex-column">
    
    <div 
    id='displayColor'
    className="d-flex justify-content-center align-items-center bg-light mb-2">
    <span 
    style= {{ color : color }}
    >{ RGB ?? hex }
    </span>
    </div>

    <div 
    className="d-flex justify-content-center align-items-center bg-grey">

    <button 
    className="btn btn-outline-light text-info"
    onClick={handleClick}>click to flip
    </button>

    </div>
    </div>
    </div>
  )
}