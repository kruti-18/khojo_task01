import React from 'react'
import wealth from '../assets/wealth.png'
import aboutImage from  '../assets/about.jpg'

function About() {
  return (
    <>
    <div className='sm:flex-col'>
    <div className='AboutSection w-[80%] my-0 mx-auto flex gap-x-10 justify-around text-center items-center'>

<div className='h-[100vh] w-[50%]  flex-1 flex-col '>
    <img src={aboutImage} alt="" className='w-full h-full object-cover invisible sm:visible '/>
</div>

<div className="aboutContent flex-1 mt-8 px-10">
    <div className='aboutHeading text-left my-5 pl-6'>
        <h4 className=' text-xs font-bold word tracking-widest'>WELCOME TO ACCOUNTING</h4>
        <h1 className='text-3xl font-bold'>We are best Accounting agency</h1>
    </div>
    <div className="aboutList ">
        <div className="aboutItem flex flex-row gap-x-3 py-6">
            <div className="icon w-[70px] h-[70px] mr-4  bg-[#1BA12D] rounded-full flex justify-center items-center">
                <img src={wealth} alt="" className='w-10 h-10 ' />
            </div>
           
            <div className="content flex-1 text-left">
                <h2 className=' mb-3 text-xl font-bold'>Market Analysis</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam alias saepe tempore voluptatem quaerat sed!</p>
            </div>
        </div>

        <div className="aboutItem flex flex-row gap-x-3 py-6">
            <div className="icon w-[70px] h-[70px] mr-4  bg-[#1BA12D] rounded-full flex justify-center items-center">
                <img src={wealth} alt="" className='w-10 h-10 ' />
            </div>
           
            <div className="content flex-1 text-left">
                <h2  className=' mb-3 text-xl font-bold'>Accounting Advisor</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam alias saepe tempore voluptatem quaerat sed!</p>
            </div>
        </div>

        <div className="aboutItem flex flex-row gap-x-3 py-6">
            <div className="icon w-[70px] h-[70px] mr-4  bg-[#1BA12D] rounded-full flex justify-center items-center">
                <img src={wealth} alt="" className='w-10 h-10 ' />
            </div>
           
            <div className="content flex-1 text-left">
                <h2  className=' mb-3 text-xl font-bold'>General Consultancy</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam alias saepe tempore voluptatem quaerat sed!</p>
            </div>
        </div>

        <div className="aboutItem flex flex-row gap-x-3 py-6">
            <div className="icon w-[70px] h-[70px] mr-4  bg-[#1BA12D] rounded-full flex justify-center items-center">
                <img src={wealth} alt="" className='w-10 h-10 ' />
            </div>
           
            <div className="content flex-1 text-left">
                <h2  className=' mb-3 text-xl font-bold'>Structured Assestment</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam alias saepe tempore voluptatem quaerat sed!</p>
            </div>
        </div>
    </div>
    
    
</div>
</div>
    </div>
    </>

  )
}

export default About