import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Icons/Logo (1).svg"
import Arrow_Right from "../assets/Icons/arrow_right.svg"
function Header() {
  return (
    <header>
      <div className="container mx-auto p-[20px]">
        <section>
          <div className='flex justify-center mt-[20px] gap-[10px] rounded-[10px] p-[10px] items-center bg-[#FF9500]'>
            <p className='text-center text-white text-[20px]'>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
            <img className='mt-[5px]' src={Arrow_Right} alt="" />
          </div>
        </section>
        <section className='flex mt-[50px] items-center justify-between'>
          <div className='flex  items-center gap-[20px] '>
            <img src={Logo} alt="" />
            <ul className='flex items-center gap-[20px]'>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/courses"}>Courses</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/pricing"}>Pricing</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='flex items-center gap-[30px]'>
            <button className='bg-white p-[10px] rounded-[10px] w-[100px]'><a href="#">Sign Up</a></button>
            <button className='mr-[30px] bg-[#FF9500] rounded-[10px] p-[10px] w-[100px] '><a href="#">Login</a></button>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header
