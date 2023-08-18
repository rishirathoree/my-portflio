  import React, { useEffect, useState } from 'react'
  import pattern from '../assets/pattern.png'
  import { Link } from 'react-router-dom'
  import Navbar from '../Components/Navbar'
  import ProjectModal from '../Components/ProjectModal'
import Loader from '../Components/Loader'
  const Home = () => {
    const [showProjects,setShowProjects] = useState(false)
    const [shimmer,setShimmer] = useState(true)
    const [mousePosition,setMousePosition] = useState({x:0,y:0})
    const mousePositionValue = (e) => {
      if(!showProjects && window.innerWidth > 300){
      const mouseX = e.clientX - 60;
      const mouseY = e.clientY - 60;
      setMousePosition({x:mouseX,y:mouseY})
      }
    }
    useEffect(()=>{
      const shimmertimout = () => {
        setShimmer(false)
      } 
      const timeoutVariable = setTimeout(shimmertimout, 2000);
      return()=>{
        clearTimeout(timeoutVariable)
      }
    },[])
    return (
      <>
          <Loader shimmer={shimmer} />
      <Navbar setShowProjects={setShowProjects} showProjects={showProjects} />
      <div onMouseMove={mousePositionValue} className='h-screen grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 overflow-hidden'>
        <div className='text-white flex items-center justify-start p-12'>
          <div className='space-y-6'>
          <p className='font-semibold tracking-wide text-[12px]'>Hi There &#128400;, I'm</p>
          <p className='font-bold leading-3 -tracking-[2px] text-4xl'>Rishi Rathore</p>
        <p className='font-semibold tracking-wide leading-3 text-sm text-[#6ace60]'>Frontend Developer</p>
        <p className='font-light text-gray-100/50 animate-pulse tracking-wide text-[12px]'>I'm design minded frontend developer <br />Based on Indore, Madhya Pradesh</p>
          </div>
        </div>
        <div className='text-white lg:block md:block sm:hidden w-full h-full relative'>
          <div className='absolute top-0 -z-50 -right-0'><img src={pattern} className='w-full object-cover h-screen' alt="" /></div>
        </div>
      <div onClick={()=>{setShowProjects(true)}} style={{left:`${mousePosition.x}px`,top:`${mousePosition.y}px`}} className={`absolute group/item duration-500 flex items-center justify-center top-0 right-0 w-28 h-28 rounded-full ring-1 ring-white/50 hover:ring-white/80 lg:flex md:flex sm:hidden ${showProjects ? 'opacity-0' : 'opacity-100'}`}>
        <p className='font-semibold text-light cursor-pointer text-[12px] text-center duration-700  text-white'>Show Projects</p>
      </div>
      </div>
      <ProjectModal showProjects={showProjects} setShowProjects={setShowProjects} />
      </>
    )
  }

  export default Home