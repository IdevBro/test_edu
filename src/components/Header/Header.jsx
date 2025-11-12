import React from 'react'
import Menu from "../Menu/Menu"
import Logo from "../../assets/icons/Logo.svg"
import arrow_right from "../../assets/icons/arrow-right.svg"
function Header() {
    return (
        <header>
            <div className="container mx-auto p-[20px]">
                <section className='bg-[#FF9500] rounded-[10px] p-[20px] text-white'>
                    <div className='flex items-center justify-center gap-[10px]'>
                        <h1>Free Courses 🌟 Sale Ends Soon, Get It Now</h1>
                        <img className='w-[10px] mt-[2px]' src={arrow_right} alt="" />
                    </div>
                </section>
                <section className='mt-[20px]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[30px]'>
                            <img src={Logo} alt="" />
                            <nav>
                                <ul className='flex items-center gap-[20px]'>
                                    <Menu text={"Home"} />
                                    <Menu text={"Courses"} />
                                    <Menu text={"About Us"} />
                                    <Menu text={"Pricing"} />
                                    <Menu text={"Contact"} />
                                </ul>
                            </nav>
                        </div>
                        <div className='flex items-center gap-[20px]'>
                            <button className='bg-white p-[10px] w-[100px] rounded-[10px]'><a href="#">Sign Up</a></button>
                            <button className='ml-[20px] w-[100px] text-[white] bg-[#FF9500] p-[10px] rounded-[10px]'><a href="#">Login</a></button>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
