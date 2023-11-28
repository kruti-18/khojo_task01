import React from 'react'
import CountUp from 'react-countup'

function Services() {
  return (
    <>
  
 
  <div className='flex w-full md:w-[80%] my-10 mx-auto px-2 justify-around flex-wrap leading-4 '>
  <div className="flex flex-col w-full md:w-60 h-36 mb-8 md:mb-0">
    <div className="heading text-xl font-bold text-center sm:text-left">Accounting</div>
    <div className="content pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed quidem possimus voluptatibus.</div>
  </div>

  <div className="flex flex-col w-full md:w-60 h-36 mb-8 md:mb-0">
    <div className="heading text-xl font-bold text-center sm:text-leftr">Tax, Compliance & Payroll</div>
    <div className="content pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed quidem possimus voluptatibus.</div>
  </div>

  <div className="flex flex-col w-full md:w-60 h-36 mb-8 md:mb-0">
    <div className="heading text-xl font-bold text-center sm:text-left">Financial Services</div>
    <div className="content pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed quidem possimus voluptatibus.</div>
  </div>

  <div className="flex flex-col w-full md:w-60 h-36 mb-8 md:mb-0">
    <div className="heading text-xl font-bold  text-center sm:text-left">Growth & Funding Access</div>
    <div className="content pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed quidem possimus voluptatibus.</div>
  </div>
</div>


    <div className="numberBlock w-full md:w-[80%] my-10 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between">
  <div className="number-card flex flex-col justify-center text-center mb-5 md:mb-0">
    <div className="number text-5xl font-bold">
      <CountUp className='number text-5xl font-bold text-[#1BA12D]' start={0} end={50} duration={2} delay={1} />
    </div>
    <div className="text p-3">YEARS OF EXPERIENCE</div>
  </div>

  <div className="number-card flex flex-col justify-center text-center mb-5 md:mb-0">
    <div className="number text-5xl font-bold">
      <CountUp className='number text-5xl font-bold text-[#1BA12D]' start={0} end={8500} duration={2} delay={1} />
    </div>
    <div className="text p-3">CASES COMPLETED</div>
  </div>

  <div className="number-card flex flex-col justify-center text-center mb-5 md:mb-0">
    <div className="number text-5xl font-bold">
      <CountUp className='number text-5xl font-bold text-[#1BA12D]' start={0} end={20} duration={2} delay={1} />
    </div>
    <div className="text p-3">AWARDS WON</div>
  </div>

  <div className="number-card flex flex-col justify-center text-center mb-5 md:mb-0">
    <div className="number text-5xl font-bold">
      <CountUp className='number text-5xl font-bold text-[#1BA12D]' start={0} end={50} duration={2} delay={1} />
    </div>
    <div className="text p-3">EXPERT CONSULTANT</div>
  </div>
</div>

    </>

  )
}

export default Services