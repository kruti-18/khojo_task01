import React from 'react'
import '../styles/SlideStyle.css'

function Slider({data}) {

  return (
    <>
         <div>
            {data.map((item, ind) =>{
                return <img src={item.src} alt={item.alt} key={ind}/>
            })}
         </div>
    </>
   
  )
}

export default Slider