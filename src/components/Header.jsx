import React, { useEffect, useState } from 'react'
import img_1 from '../assets/img_1.jpg'
import img_2 from '../assets/img_2.jpg'
import '../styles/Header.css'


let primaryColor = '#E04356';
const images = [
  img_1,
  img_2
 
];

const colors = [ '#E04356', '#4285F4', '#34A853', '#FBBC05' ]

function Header() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() =>{
    const interval = setInterval(() =>{
      document.querySelector('.slider-imgs').classList.add('fade-out');

      setTimeout(() => {
       
        setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
        
     
        document.querySelector('.slider-imgs').classList.remove('fade-out');
      }, 500);
    }, 3000);
    return () => clearInterval(interval)
  }, [])


  return (
   <>
    <div className="background-slider">
      <div className="slider-imgs flex flex-col justify-center text-center align-middle" style={{ backgroundColor: colors[currentIndex] }}>
        <h3 className='text-[#1BA12D] bg-white'>We help business grow</h3>
        <h1 className='my-4 text-4xl font-extrabold text-white'>Lorem ipsum dolor, sit amet consectetur  <br />adipisicing elit.</h1>
        <button className='px-3 py-2 my-8 mx-auto bg-white w-[9rem] rounded-md text-[#1BA12D] hover:bg-[#1BA12D] hover:text-white '>CONTACT US</button>
      </div>
    </div>
   </>
 
  )
}

export default Header
