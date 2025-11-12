import React from 'react'
import storm from "../../assets/icons/storm.svg"
import Zapier from "../../assets/images/companies/zapier.png"
import Spotify from "../../assets/images/companies/spotify.png"
import Zoom from "../../assets/images/companies/zoom.png"
import Amozone from "../../assets/images/companies/amazon.png"
import Adobe from "../../assets/images/companies/adobe.png"
import Notion from "../../assets/images/companies/notion.png"
import Netflix from "../../assets/images/companies/netflix.png"
function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <section className='mt-[119px]'>
          <div className=' flex flex-wrap items-center justify-center'>
            <div className='flex items-center gap-[20px]'>
              <img src={storm} alt="" />
              <h1 className='text-[40px] font-[600]'><span className='text-[#FF9500]'>Unlock</span> Your Creative Potential</h1>
            </div>
          </div>
          <h2 className='mt-[20px] text-center font-[500] text-[30px]'>with Online Design and Development Courses.</h2>
          <p className='text-center text-[15px] mt-[10px]'>Learn from Industry Experts and Enhance Your Skills.</p>
          <div className='flex items-center justify-center mt-[30px] gap-[20px]'>
            <button className='bg-[#FF9500] p-[10px] rounded-[10px] text-[15px] font-[600] text-white'><a href="#">Explore Courses</a></button>
            <button className='bg-[white] p-[10px] rounded-[10px] font-[500]'><a href="#">View Pricing</a></button>
          </div>
        </section>
        <section>
          <div className='flex items-center '>
            <img src={Zapier} alt="" />
            <img src={Spotify} alt="" />
            <img src={Zoom} alt="" />
            <img src={Amozone} alt="" />
            <img src={Adobe} alt="" />
            <img src={Notion} alt="" />
            <img src={Netflix} alt="" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
