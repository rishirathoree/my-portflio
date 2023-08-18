import React, { useEffect, useState } from 'react'
import dp from '../assets/dp.jpg'

const ProfileWithSwiper = () => {
  const skills =  ["Crafting Engaging Web Experiences with React.js",
  "Transforming Ideas into Beautifully Functional React.js Applications",
  "Building the Future with React.js: Innovative Solutions, Flawless UI",
  "Empowering Businesses with Cutting-Edge React.js Development",
  "Elevating User Experiences through Elegant React.js Solutions",
  "Passionate React.js Developer Creating Impactful Web Solutions",
  "Driving Innovation and Efficiency with React.js Development",
  "Mastering React.js to Deliver Seamless User Interfaces"]
  const [currentIndex,setCurrentIndex] = useState(0)
  useEffect(()=>{
  const swipingIndexes = () => {
    setCurrentIndex(prev=> (prev + 1) % skills.length)
  } 
  const interval = setInterval(swipingIndexes, 4000);
  return()=>{clearInterval(interval)}
  },[skills.length])
  console.log(currentIndex)
  return (
    <>
    <div>
    <div className='flex-col w-full space-y-8 h-full px-12 py-24 flex items- justify-between'>
    <div className='space-y-4'>
    <div>
      <img src={dp} className='w-40 grayscale rounded-full' alt="" />
    </div>
    <div>
    <span className=''><p className='text-xsm font-light'>"Passionate React.js Developer with a proven track record of crafting dynamic and interactive web solutions. Armed with expertise in leveraging the power of React.js, I specialize in delivering high-quality and scalable applications. With a keen eye for user experience, I strive to create seamless and intuitive interfaces that drive innovation and leave a lasting impression. Through my mastery of React.js, I bring concepts to life, building modern, responsive, and performant applications. Join me on this exciting journey as we harness the cutting-edge technology of React.js to empower businesses and transform the digital landscape."</p></span>
    </div>
    <div>
      <p className='font-normal text-sm my-4'>Experience : 6 Months</p>
    {skills.map((item,index)=>{
          return(
            <span className={`${currentIndex === index ? 'relative duration-1000 opacity-100' : 'absolute duration-0  opacity-0'}`}><p className='font-semibold text-md'>{item}</p></span>
          )
        })} 
    </div> 
    </div>    
    <div>
      <p className='font-light text-xsm'>Rishi Rathore</p>
      <p className='font-light text-xsm'>Indore</p>
      <p className='font-light text-xsm'>MP</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default ProfileWithSwiper