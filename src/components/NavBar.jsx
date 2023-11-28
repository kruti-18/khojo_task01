// import React, {useState} from 'react'
// import profile from '../assets/profile-user (1).png'
// import '../styles/Navbar.css'
import searchIcon from '../assets/search.png'

// function NavBar() {
//     const [click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     const closeMenu = () => setClick(false)
//   return (
    
//     <div className='w-[100%] bg-white'>
//         <div className='NavBar sm:w-[80%] mx-auto w-[80%] h-32 flex items-center text-center justify-between align-middle '>
//             <div className='left flex items-center'>
//                 <a className=' text-3xl font-extrabold font-[Arial] '>Accounting</a>
//             </div>

//             <ul className={click ? "nav-menu active" : "nav-menu sm:flex hidden"}>
//             <li className="nav-item">
//               <a href="/" onClick={closeMenu}>
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#about" onClick={closeMenu}>
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#testimonials" onClick={closeMenu}>
//                 Services
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#demo" onClick={closeMenu}>
//                 Case Study
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#demo" onClick={closeMenu}>
//                 Blog
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#demo" onClick={closeMenu}>
//                 Contact
//               </a>
//             </li>
//           </ul>

//             <div className="searchBar relative">
//             <div>
                
//                 <input type="text" placeholder='search' className=' px-3 py-[12px] rounded-sm border-[1px] border-gray-200 '/>
//               
//             </div> 
//             </div>


//         </div>
//     </div>

      
//   )
// }

// export default NavBar

import React from 'react'

function NavBar() {
  return (
    <div className="navbar bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Case Study</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>

        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-center ml-2">Accounting</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Case Study</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
    
    </ul>
  </div>
  <div className="navbar-end  ">
  <div className=" bg-white mx-3 flex justify-center items-center">
  {/* <img className='h-5 w-5 mx-5 visible sm:invisible'  src={searchIcon} alt="" /> */}
   <input type="text" placeholder="Search" className="input input-bordered bg-yellow-200 ml-1 w-24 md:w-auto invisible sm:visible "/>
     
    </div>
  </div>
</div>
  )
}

export default NavBar
