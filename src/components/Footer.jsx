import React from 'react'
import Logo from "../assets/Icons/Logo (1).svg"
import Pochta from "../assets/Icons/Pochta.svg"
import Phone from "../assets/Icons/Phone.svg"
import Loco from "../assets/icons/location.svg"
import Facebook from "../assets/icons/facebook.svg"
import Twitter from "../assets/icons/twitter.svg"
import In from "../assets/icons/in.svg"
function Footer() {
  return (
    <>
      <footer className='bg-white mt-[150px] p-[60px]'>
        <div className="container mx-auto">
          <div className="rowFooter flex items-center justify-between">
            <div>
              <img src={Logo} alt="" />
              <div className='flex items-center mt-[20px] gap-[10px]'>
                <img src={Pochta} alt="" />
                <p>hello@skillbridge.com</p>
              </div>
              <div className='flex items-center mt-[10px] gap-[10px]'>
                <img src={Phone} alt="" />
                <p>+91 91813 23 2309</p>
              </div>
              <div className='flex items-center mt-[10px] gap-[10px]'>
                <img src={Loco} alt="" />
                <p>Somewhere in the World</p>
              </div>
            </div>
            <div>
              <h1 className='font-[600] text-[20px]'>Home</h1>
              <p className='text-[#59595A]'>Benefits</p>
              <p className='text-[#59595A]'>Our Courses</p>
              <p className='text-[#59595A]'>Our Testimonials</p>
              <p className='text-[#59595A]'>Our FAQ</p>
            </div>
            <div>
              <h1 className='text-[20px] font-[600]'>About Us</h1>
              <p className='text-[#59595A]'>Company</p>
              <p className='text-[#59595A]'>Achievements</p>
              <p className='text-[#59595A]'>Our Goals</p>
            </div>
            <div>
              <h1 className='font-[600] text-[20px]'>Social Profiles</h1>
              <div className='flex items-center mt-[10px] gap-[5px]'>
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
                <img src={In} alt="" />
              </div>
            </div>
          </div>
          <hr className='mt-[50px] border-[1px] border-[#F1F1F3]' />
          <p className='text-center mt-[50px]'>© 2023 Skillbridge. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
