import React from 'react'
import caly from '../assets/dash.png'
import quatify from '../assets/quatify.png'
import kn from '../assets/kn.png'
import ntflx from '../assets/ntflx.png'
import astgrnd from '../assets/astg.png'
import dlp from '../assets/dlp.png'
import ProfileWithSwiper from '../Components/ProfileWithSwiper'
import { Link } from 'react-router-dom'
const Home = () => {
  const projects = [
    {title:'Caly - Admin Dashboard',image:caly,link:'https://chic-hamster-65218e.netlify.app/'},
    {title:'AssetGround - Landing Page With Swiper',image:astgrnd,link:'https://zippy-marzipan-40f9da.netlify.app/'},
    {title:'Netflix Clone - Multiple API Calls,Redux Complex Tree State Management & Firebase Authentication',image:ntflx,link:'https://peppy-hummingbird-40ede8.netlify.app/'},
    {title:'Developer Landing Page',image:dlp,link:'https://radiant-kulfi-da4367.netlify.app/'},
    {title:'Kicsknation - API Calls,Redux Complex State Management & Firebase Authentication',image:kn,link:'https://chimerical-pasca-a126cb.netlify.app/'},
    {title:'Quatify - API Call Quotes Display With Search Input',image:quatify,link:'https://euphonious-marigold-bc95b8.netlify.app/'},
  ]
  return (
    <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-screen '>
    <ProfileWithSwiper />
    {/* project right side */}
    <div className='overflow-hidden overflow-y-auto bg-gradient-to-tl from-teal-50 to-purple-50'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-12 py-24 gap-8'>
        {projects.map((item,index)=>{
          return(
            <Link to={`${item.link}`}>
            <div className='space-y-4  '>
          <div className='w-full h-52 overflow-hidden rounded-lg bg-white shadow-custom'>
            <img src={`${item.image}`} className='w-full h-full object-cover' alt="" />
          </div>
          <p className='font-semibold text-xsm'>{item.title}</p>
      </div>
            </Link>
          )
        })}
      </div>
    </div>
  </div>
  )
}

export default Home