import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faMessage } from '@fortawesome/free-solid-svg-icons'
  import {faBagShopping} from  '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
   <footer className="footer bg-[#333333] text-white ">
  <div className="flex flex-col md:flex-row">
    <div className="footer-col about-us md:w-1/4">
      <h4>About us</h4>
      <p className='text-[#808080]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad recusandae quam magni similique modi.</p>
      <div className="social-links mt-4 md:mt-0">
        <a href="#"><FontAwesomeIcon icon={faMessage} /></a>
        <a href="#"><FontAwesomeIcon icon={faBagShopping} /></a>
        <a href="#"><FontAwesomeIcon icon={faCoffee} /></a>
      </div>
    </div>

    <div className="footer-col md:w-1/4">
      <h4>SERVICES</h4>
      <ul>
        <li><a href="#">Market Analysis</a></li>
        <li><a href="#">Accounting Advisor</a></li>
        <li><a href="#">General Consistency</a></li>
        <li><a href="#">Structured Assessment</a></li>
      </ul>
    </div>

    <div className="footer-col md:w-1/4">
      <h4>DISCOVER</h4>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Policies</a></li>
      </ul>
    </div>

    <div className="footer-col md:w-1/4">
      <h4>RESOURCES</h4>
      <ul>
        <li><a href="#">Security</a></li>
        <li><a href="#">Global</a></li>
        <li><a href="#">Charts</a></li>
        <li><a href="#">Privacy</a></li>
      </ul>
    </div>
  </div>

  <div className="footer-col mt-4 md:mt-0">
    <h4 className='mb-4'>FREE CONSULTATION</h4>
    <form action="">
      <input type="text" placeholder='Your name' className='mb-4 p-3 rounded-md w-full' />
      <input type="text" placeholder='Your Email' className='mb-4 p-3 rounded-md w-full' />
      <input type="text" placeholder='Subject' className='mb-4 p-3 rounded-md w-full' />
      <input type="text" placeholder='Message' className='mb-4 p-3 rounded-md w-full' />
      <button className='py-2 px-4 rounded-md bg-white text-[#1BA12D]'>SUBMIT</button>
    </form>
  </div>
</footer>

    </>
  )
}

export default Footer