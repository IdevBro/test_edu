import React from 'react'
import Arrow_top from "../assets/Icons/arrow_top.svg"
import Strom from "../assets/Icons/storm.svg"
import Zapier from "../assets/Images/zapier.png"
import Amazon from "../assets/Images/amazon.png"
import Adobe from "../assets/Images/adobe.png"
import Zoom from "../assets/Images/zoom.png"
import Netflix from "../assets/Images/netflix.png"
import Notion from "../assets/Images/notion.png"
import Spotify from "../assets/Images/spotify.png"
import Poster from "../assets/Images/Poster.png"
import Sarah from "../assets/Icons/Sarah.svg"
import Emely from "../assets/Icons/Emely.svg"
import Jason from "../assets/Icons/Jason.svg"
import Michail from "../assets/Icons/Michail.svg"
import Course1 from "../assets/Images/Courses1.png"
import Courses2 from "../assets/Images/Courses2.png"
import Courses3 from "../assets/Images/Courses3.png"
import Courses4 from "../assets/Images/Courses4.png"
import Courses5 from "../assets/Images/Courses5.png"
import Courses6 from "../assets/Images/Courses6.png"
import Error from "../assets/Icons/Error.svg"
import Tick from "../assets/Icons/Tick.svg"
import BenefitsProps from '../components/BenefitsProps'
import BenefitsBoxProps from '../components/BenefitsBoxProps'
import CoursesProps from '../components/CoursesProps'
import TestiminiolasProps from '../components/TestiminiolasProps'
import FeaturesProps from "../components/FeaturesProps"
import DropDown from '../components/DropDown'
function Home() {
  return (
    <>
      <div className='container mx-auto mt-[100px] p-[20px]'>
        <section>
          <div className='flex bg-[#FCFCFD] p-[10px] w-[700px] rounded-[10px] m-auto items-center gap-[20px] justify-center'>
            <img src={Strom} alt="" />
            <h1 className='text-[35px] font-[600]'><span className='text-[#FF9500]'>Unlock</span> Your Creative Potential</h1>
          </div>
          <h2 className='text-center mt-[20px] text-[30px] mb-[10px] text-[#262626] font-[600]'>with Online Design and Development Courses.</h2>
          <p className='text-center text-[#262626]'>Learn from Industry Experts and Enhance Your Skills.</p>
          <div className='flex items-center justify-center gap-[20px] mt-[60px]'>
            <button className='text-white rounded-[10px] p-[10px]  bg-[#FF9500]'><a href="#">Explore Courses</a></button>
            <button className='bg-white rounded-[10px] p-[10px] '><a href="#">View Pricing</a></button>
          </div>
        </section>
        <section>
          <div className='flex items-center gap-[50px] justify-center mt-[130px] bg-white p-[30px] w-[1300px] m-auto rounded-[10px] '>
            <img className='p-[10px]' src={Zapier} alt="" />
            <img className='p-[10px]' src={Spotify} alt="" />
            <img className='p-[10px]' src={Zoom} alt="" />
            <img className='p-[10px]' src={Amazon} alt="" />
            <img className='p-[10px]' src={Adobe} alt="" />
            <img className='p-[10px]' src={Notion} alt="" />
            <img className='p-[10px]' src={Netflix} alt="" />
          </div>
        </section>
        <section>
          <div className='mt-[100px]'>
            <img src={Poster} alt="" />
          </div>
        </section>
        <section>
          <div className='flex items-center justify-between'>
            <div>
              <BenefitsProps text={"Benefits"} />
              <BenefitsProps title={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."} />
            </div>
            <div>
              <button className='bg-white rounded-[10px] p-[10px] w-[100px]'><a href="#">View All</a></button>
            </div>
          </div>
          <div className='flex items-center flex-wrap justify-center w-[1000px] m-auto gap-[30px] '>
            <div className='flex gap-[30px] '>
              <div className='bg-white p-[20px] w-[450px] rounded-[10px]'>
                <div className='text-[50px] flex justify-end items-end font-bold'>
                  <BenefitsBoxProps number={"01"} />
                </div>
                <div className='mt-[50px] mb-[14px] font-[600] text-[30px]'>
                  <BenefitsBoxProps text={"Flexible Learning Schedule"} />
                </div>
                <div className='text-[20px] text-[#4C4C4D] w-[419px]'>
                  <BenefitsBoxProps title={"Fit your coursework around your existing commitments and obligations."} />
                </div>
                <div className='felx items-end justify-end mt-[50px] ml-[350px]'>
                  <img src={Arrow_top} alt="" />
                </div>
              </div>
              <div className='bg-white p-[20px] w-[450px] rounded-[10px]'>
                <div className='text-[50px] flex justify-end items-end font-bold'>
                  <BenefitsBoxProps number={"02"} />
                </div>
                <div className='mt-[50px] mb-[14px] font-[600] text-[30px]'>
                  <BenefitsBoxProps text={"Expert Instruction"} />
                </div>
                <div className='text-[20px] text-[#4C4C4D] w-[419px]'>
                  <BenefitsBoxProps title={"Learn from industry experts who have hands-on experience in design and development."} />
                </div>
                <div className='mt-[50px] ml-[350px]'>
                  <img src={Arrow_top} alt="" />
                </div>
              </div>
              <div className='bg-white p-[20px] w-[450px] rounded-[10px]'>
                <div className='text-[50px] flex justify-end items-end font-bold'>
                  <BenefitsBoxProps number={"03"} />
                </div>
                <div className='mt-[50px] mb-[14px] font-[600] text-[30px]'>
                  <BenefitsBoxProps text={"Diverse Course Offerings"} />
                </div>
                <div className='text-[20px] text-[#4C4C4D] w-[419px]'>
                  <BenefitsBoxProps title={"Explore a wide range of design and development courses covering various topics."} />
                </div>
                <div className='mt-[50px] ml-[350px]'>
                  <img src={Arrow_top} alt="" />
                </div>
              </div>

            </div>
            <div className='flex gap-[30px]'>
              <div className='bg-white p-[20px] w-[450px] rounded-[10px]'>
                <div className='text-[50px] flex justify-end items-end font-bold'>
                  <BenefitsBoxProps number={"04"} />
                </div>
                <div className='mt-[50px] mb-[14px] font-[600] text-[30px]'>
                  <BenefitsBoxProps text={"Updated Curriculum"} />
                </div>
                <div className='text-[20px] text-[#4C4C4D] w-[339px]'>
                  <BenefitsBoxProps title={"Access courses with up-to-date content reflecting the latest trends and industry practices."} />
                </div>
                <div className='mt-[50px] ml-[350px]'>
                  <img src={Arrow_top} alt="" />
                </div>
              </div>
              <div className='bg-white p-[20px] w-[450px] rounded-[10px]'>
                <div className='text-[50px] flex justify-end items-end font-bold'>
                  <BenefitsBoxProps number={"05"} />
                </div>
                <div className='mt-[50px] mb-[14px] font-[600] text-[30px]'>
                  <BenefitsBoxProps text={"Practical Projects and Assignments"} />
                </div>
                <div className='text-[20px] text-[#4C4C4D] w-[419px]'>
                  <BenefitsBoxProps title={"Develop a portfolio showcasing your skills and abilities to potential employers."} />
                </div>
                <div className='ml-[350px] mt-[50px]'>
                  <img src={Arrow_top} alt="" />
                </div>
              </div>
              <div className='bg-white p-[20px] w-[450px] rounded-[10px]'>
                <div className='text-[50px] flex justify-end items-end font-bold'>
                  <BenefitsBoxProps number={"06"} />
                </div>
                <div className='mt-[50px] mb-[14px] font-[600] text-[30px]'>
                  <BenefitsBoxProps text={"Interactive Learning Environment"} />
                </div>
                <div className='text-[20px] text-[#4C4C4D] w-[439px]'>
                  <BenefitsBoxProps title={"Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."} />
                </div>
                <div className='ml-[350px] mt-[50px]'>
                  <img src={Arrow_top} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='flex mt-[100px] items-center justify-between'>
            <div>
              <BenefitsProps text={"Our Courses"} />
              <BenefitsProps title={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."} />
            </div>
            <div>
              <button className='bg-white rounded-[10px] p-[10px] w-[100px]'><a href="#">View All</a></button>
            </div>
          </div>
          <div className='flex items-center flex-wrap justify-center gap-[50px]'>
            <div className='bg-white w-[700px] p-[20px] rounded-[10px] border-[2px] border-[#F1F1F3]'>
              <img src={Course1} alt="" />
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[20px] mt-[30px] mb-[30px]'>
                  <div className='bg-white border-[2px] border-[#F1F1F3] p-[5px] rounded-[10px]'>
                    <CoursesProps week={"4 weeks"} />
                  </div>
                  <div className='bg-white border-[#F1F1F3] border-[2px] p-[5px] rounded-[10px]'>
                    <CoursesProps lvl={"Begginers"} />
                  </div>
                </div>
                <div className='font-[600px]'>
                  <CoursesProps name={"By John Smith"} />
                </div>
              </div>
              <div className='font-bold text-[#262626] mb-[14px] text-[30px]'>
                <CoursesProps name={"Web Design Fundamentals"} />
              </div>
              <div className='teext-[#4C4C4D] text-[18px] w-[683.5px]'>
                <CoursesProps name={"Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."} />
              </div>
              <button className='ml-[30px] font-bold bg-[#F7F7F8] border-[2px] border-[#F1F1F3] rounded-[10px] justify-center flex items-center w-[600px] p-[10px] mt-[30px]'><a href="#">Get it Now</a></button>
            </div>
            <div className='bg-white w-[700px] p-[20px] rounded-[10px] border-[2px] border-[#F1F1F3]'>
              <img src={Courses2} alt="" />
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[20px] mt-[30px] mb-[30px]'>
                  <div className='bg-white border-[2px] border-[#F1F1F3] p-[5px] rounded-[10px]'>
                    <CoursesProps week={"6 weeks"} />
                  </div>
                  <div className='bg-white border-[#F1F1F3] border-[2px] p-[5px] rounded-[10px]'>
                    <CoursesProps lvl={"intermediate"} />
                  </div>
                </div>
                <div className='font-[600px]'>
                  <CoursesProps name={"By Emily Johnson"} />
                </div>
              </div>
              <div className='font-bold text-[#262626] mb-[14px] text-[30px]'>
                <CoursesProps name={"UI/UX Design"} />
              </div>
              <div className='teext-[#4C4C4D] text-[18px] w-[683.5px]'>
                <CoursesProps name={"Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."} />
              </div>
              <button className='ml-[30px] font-bold bg-[#F7F7F8] border-[2px] border-[#F1F1F3] rounded-[10px] justify-center flex items-center w-[600px] p-[10px] mt-[30px]'><a href="#">Get it Now</a></button>
            </div>
            <div className='bg-white w-[700px] p-[20px] rounded-[10px] border-[2px] border-[#F1F1F3]'>
              <img src={Courses3} alt="" />
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[20px] mt-[30px] mb-[30px]'>
                  <div className='bg-white border-[2px] border-[#F1F1F3] p-[5px] rounded-[10px]'>
                    <CoursesProps week={"8 weeks"} />
                  </div>
                  <div className='bg-white border-[#F1F1F3] border-[2px] p-[5px] rounded-[10px]'>
                    <CoursesProps lvl={"Intermediate"} />
                  </div>
                </div>
                <div className='font-[600px]'>
                  <CoursesProps name={"By David Brown"} />
                </div>
              </div>
              <div className='font-bold text-[#262626] mb-[14px] text-[30px]'>
                <CoursesProps name={"Mobile App Development"} />
              </div>
              <div className='teext-[#4C4C4D] text-[18px] w-[683.5px]'>
                <CoursesProps name={"Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."} />
              </div>
              <button className='ml-[30px] font-bold bg-[#F7F7F8] border-[2px] border-[#F1F1F3] rounded-[10px] justify-center flex items-center w-[600px] p-[10px] mt-[30px]'><a href="#">Get it Now</a></button>
            </div>
            <div className='bg-white w-[700px] p-[20px] rounded-[10px] border-[2px] border-[#F1F1F3]'>
              <img src={Courses4} alt="" />
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[20px] mt-[30px] mb-[30px]'>
                  <div className='bg-white border-[2px] border-[#F1F1F3] p-[5px] rounded-[10px]'>
                    <CoursesProps week={"10 weeks"} />
                  </div>
                  <div className='bg-white border-[#F1F1F3] border-[2px] p-[5px] rounded-[10px]'>
                    <CoursesProps lvl={"Begginer"} />
                  </div>
                </div>
                <div className='font-[600px]'>
                  <CoursesProps name={"By Sarah Thompson"} />
                </div>
              </div>
              <div className='font-bold text-[#262626] mb-[14px] text-[30px]'>
                <CoursesProps name={"Graphic Design for Beginners"} />
              </div>
              <div className='teext-[#4C4C4D] text-[18px] w-[683.5px]'>
                <CoursesProps name={"Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."} />
              </div>
              <button className='ml-[30px] font-bold bg-[#F7F7F8] border-[2px] border-[#F1F1F3] rounded-[10px] justify-center flex items-center w-[600px] p-[10px] mt-[30px]'><a href="#">Get it Now</a></button>
            </div>
            <div className='bg-white w-[700px] p-[20px] rounded-[10px] border-[2px] border-[#F1F1F3]'>
              <img src={Courses5} alt="" />
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[20px] mt-[30px] mb-[30px]'>
                  <div className='bg-white border-[2px] border-[#F1F1F3] p-[5px] rounded-[10px]'>
                    <CoursesProps week={"10 weeks"} />
                  </div>
                  <div className='bg-white border-[#F1F1F3] border-[2px] p-[5px] rounded-[10px]'>
                    <CoursesProps lvl={"Intermediate"} />
                  </div>
                </div>
                <div className='font-[600px]'>
                  <CoursesProps name={"By Michael Adams"} />
                </div>
              </div>
              <div className='font-bold text-[#262626] mb-[14px] text-[30px]'>
                <CoursesProps name={"Front-End Web Development"} />
              </div>
              <div className='teext-[#4C4C4D] text-[18px] w-[683.5px]'>
                <CoursesProps name={"Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."} />
              </div>
              <button className='ml-[30px] font-bold bg-[#F7F7F8] border-[2px] border-[#F1F1F3] rounded-[10px] justify-center flex items-center w-[600px] p-[10px] mt-[30px]'><a href="#">Get it Now</a></button>
            </div>
            <div className='bg-white w-[700px] p-[20px] rounded-[10px] border-[2px] border-[#F1F1F3]'>
              <img src={Courses6} alt="" />
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[20px] mt-[30px] mb-[30px]'>
                  <div className='bg-white border-[2px] border-[#F1F1F3] p-[5px] rounded-[10px]'>
                    <CoursesProps week={"6 weeks"} />
                  </div>
                  <div className='bg-white border-[#F1F1F3] border-[2px] p-[5px] rounded-[10px]'>
                    <CoursesProps lvl={"Advanced"} />
                  </div>
                </div>
                <div className='font-[600px]'>
                  <CoursesProps name={"By Jennifer Wilson"} />
                </div>
              </div>
              <div className='font-bold text-[#262626] mb-[14px] text-[30px]'>
                <CoursesProps name={"Advanced JavaScript"} />
              </div>
              <div className='teext-[#4C4C4D] text-[18px] w-[683.5px]'>
                <CoursesProps name={"Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."} />
              </div>
              <button className='ml-[30px] font-bold bg-[#F7F7F8] border-[2px] border-[#F1F1F3] rounded-[10px] justify-center flex items-center w-[600px] p-[10px] mt-[30px]'><a href="#">Get it Now</a></button>
            </div>
          </div>
        </section>
        <section>
          <div className='flex mt-[100px] items-center justify-between'>
            <div>
              <BenefitsProps text={"Our Testimonials"} />
              <BenefitsProps title={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."} />
            </div>
            <div>
              <button className='bg-white rounded-[10px] p-[10px] w-[100px]'><a href="#">View All</a></button>
            </div>
          </div>
          <div className='mt-[80px] flex items-center gap-[20px] justify-center '>
            <div>
              <div>
                <div className='bg-white p-[30px] w-[700px] rounded-t-[10px]'>
                  <div className='w-[683.5px] text-[#4C4C4D] text-[18px] '>
                    <TestiminiolasProps text={"The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"} />
                  </div>
                </div>
                <div className='flex bg-[#FCFCFD] p-[10px] border-t-[2px] w-[700px] border-[#F1F1F3] rounded-b-[10px] items-center justify-between'>
                  <div className='flex items-center gap-[20px]'>
                    <img src={Sarah} alt="" />
                    <p>Sarah L</p>
                  </div>
                  <div>
                    <button className='bg-[#F7F7F8] rounded-[10px] p-[10px] border-[2px] border-[#F1F1F3]'><a href="#">Read Full Story</a></button>
                  </div>
                </div>
              </div>
              <div>
                <div className='bg-white p-[30px] w-[700px] mt-[20px] rounded-t-[10px]'>
                  <div className='w-[683.5px] text-[#4C4C4D] text-[18px] '>
                    <TestiminiolasProps text={"The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"} />
                  </div>
                </div>
              </div>
              <div className='flex bg-[#FCFCFD] p-[10px] border-t-[2px] w-[700px] border-[#F1F1F3] rounded-b-[10px] items-center justify-between'>
                <div className='flex items-center gap-[20px]'>
                  <img src={Emely} alt="" />
                  <p>Emily R</p>
                </div>
                <div>
                  <button className='bg-[#F7F7F8] rounded-[10px] p-[10px] border-[2px] border-[#F1F1F3]'><a href="#">Read Full Story</a></button>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className='bg-white p-[30px] w-[700px]  rounded-t-[10px]'>
                  <div className='w-[683.5px] text-[#4C4C4D] text-[18px] '>
                    <TestiminiolasProps text={"The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"} />
                  </div>
                </div>
                <div className='flex bg-[#FCFCFD] p-[10px] border-t-[2px] w-[700px] border-[#F1F1F3] rounded-b-[10px] items-center justify-between'>
                  <div className='flex items-center gap-[20px]'>
                    <img src={Jason} alt="" />
                    <p>Jason M</p>
                  </div>
                  <div>
                    <button className='bg-[#F7F7F8] rounded-[10px] p-[10px] border-[2px] border-[#F1F1F3]'><a href="#">Read Full Story</a></button>
                  </div>
                </div>
              </div>
              <div className='mt-[20px]'>
                <div className='bg-white p-[30px] w-[700px] rounded-t-[10px]'>
                  <div className='w-[683.5px] text-[#4C4C4D] text-[18px] '>
                    <TestiminiolasProps text={"I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!"} />
                  </div>
                </div>
                <div className='flex bg-[#FCFCFD] p-[10px] border-t-[2px] w-[700px] border-[#F1F1F3] rounded-b-[10px] items-center justify-between'>
                  <div className='flex items-center gap-[20px]'>
                    <img src={Michail} alt="" />
                    <p>Michael K</p>
                  </div>
                  <div>
                    <button className='bg-[#F7F7F8] rounded-[10px] p-[10px] border-[2px] border-[#F1F1F3]'><a href="#">Read Full Story</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section>
          <div className='flex mt-[100px] items-center justify-between'>
            <div>
              <BenefitsProps text={"Our Pricing"} />
              <BenefitsProps title={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."} />
            </div>
            <div className='flex items-center bg-white p-[10px] rounded-[10px] gap-[20px]'>
              <button className='w-[100px] text-white font-[600] rounded-[10px] bg-[#FF9500] p-[10px]'><a href="#">Monthly</a></button>
              <button className='w-[100px] bg-white font-[600] rounded-[10px] p-[10px]'><a href="#">Yearly</a></button>
            </div>
          </div>
          <div className='bg-white p-[50px] rounded-[10px] flex items-center mt-[80px] gap-[20px]'>
            <div className='bg-[#FCFCFD] w-[700px] border-[2px] rounded-[10px] p-[10px] border-[#F1F1F3]'>
              <button className='ml-[300px]'><a href="#">Free Plan </a></button>
              <div className='flex ml-[300px] mt-[30px] '>
                <h1 className='text-center font-bold text-[70px]'>$0</h1>
                <p className='text-center text-[20px] mt-[60px]'>/month</p>
              </div>
              <div className='bg-white mt-[50px] p-[20px]'>
                <h1 className='text-center font-[600]'>Available Features</h1>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[white] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Tick} alt="" />
                  <FeaturesProps title={"Access to selected free courses."} />
                </div>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[#FCFCFD] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Tick} alt="" />
                  <FeaturesProps title={"Access to selected free courses."} />
                </div>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[#FCFCFD] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Tick} alt="" />
                  <FeaturesProps title={"Access to selected free courses."} />
                </div>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[#FCFCFD] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Tick} alt="" />
                  <FeaturesProps title={"Access to selected free courses."} />
                </div>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[#FCFCFD] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Error} alt="" />
                  <FeaturesProps title={"Access to exclusive Pro Plan community forums."} />
                </div>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[#FCFCFD] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Error} alt="" />
                  <FeaturesProps title={"Early access to new courses and updates."} />
                </div>
                <button className='bg-[#FF9500] text-white w-[100%] rounded-b-[10px] mt-[20px] p-[10px]'><a href="#">Get Started</a></button>
              </div>
            </div>
            <div className='bg-[#FCFCFD] w-[700px] border-[2px] rounded-[10px] p-[10px] border-[#F1F1F3]'>
              <button className='ml-[300px]'><a href="#">Pro Plan </a></button>
              <div className='flex ml-[300px] mt-[30px] '>
                <h1 className='text-center font-bold text-[70px]'>$79</h1>
                <p className='text-center text-[20px] mt-[60px]'>/month</p>
              </div>
              <div className='bg-white mt-[50px] p-[20px]'>
                <h1 className='text-center font-[600]'>Available Features</h1>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[white] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Tick} alt="" />
                  <FeaturesProps title={"Access to selected all courses."} />
                </div>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[#FCFCFD] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Tick} alt="" />
                  <FeaturesProps title={"Unlimited course materials and resources."} />
                </div>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[#FCFCFD] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Tick} alt="" />
                  <FeaturesProps title={"Priority support from instructors."} />
                </div>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[#FCFCFD] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Tick} alt="" />
                  <FeaturesProps title={"Ad-free experience."} />
                </div>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[#FCFCFD] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Tick} alt="" />
                  <FeaturesProps title={"Access to exclusive Pro Plan community forums."} />
                </div>
                <div className='mt-[30px] flex items-center gap-[10px] bg-[#FCFCFD] border-[2px] ml-[50px] w-[500px] border-[#F1F1F3] p-[10px] rounded-[10px]'>
                  <img src={Tick} alt="" />
                  <FeaturesProps title={"Early access to new courses and updates."} />
                </div>
                <button className='bg-[#FF9500] text-white w-[100%] mt-[20px] rounded-b-[10px] p-[10px]'><a href="#">Get Started</a></button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <DropDown />
        </section>
      </div>
    </>
  )
}

export default Home
