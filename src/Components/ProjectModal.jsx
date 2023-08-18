import React, { useRef } from 'react'
import caly from '../assets/dash.png'
import quatify from '../assets/quatify.png'
import kn from '../assets/kn.png'
import ntflx from '../assets/ntflx.png'
import astgrnd from '../assets/astg.png'
import dlp from '../assets/dlp.png'
import scrollProject from '../assets/scrollproject.png'
import mouse from '../assets/mouse.png'
import { Link } from 'react-router-dom'

const ProjectModal = ({showProjects,setShowProjects}) => {
    const projects = [
        {title:'Mouse Events',image:mouse,link:'https://beamish-cobbler-4215b9.netlify.app/'},
        {title:'Scroll Interesection Observer Project',image:scrollProject,link:'https://tubular-centaur-8c59a4.netlify.app/'},
        {title:'Caly - Admin Dashboard',image:caly,link:'https://chic-hamster-65218e.netlify.app/'},
        {title:'AssetGround - Landing Page With Swiper',image:astgrnd,link:'https://zippy-marzipan-40f9da.netlify.app/'},
        {title:'Netflix Clone - Multiple API Calls,Redux Complex Tree State Management & Firebase Authentication',image:ntflx,link:'https://peppy-hummingbird-40ede8.netlify.app/'},
        {title:'Developer Landing Page',image:dlp,link:'https://radiant-kulfi-da4367.netlify.app/'},
        {title:'Kicsknation - API Calls,Redux Complex State Management & Firebase Authentication',image:kn,link:'https://chimerical-pasca-a126cb.netlify.app/'},
        {title:'Quatify - API Call Quotes Display With Search Input',image:quatify,link:'https://euphonious-marigold-bc95b8.netlify.app/'},
      ]
      const modal = useRef()
      const toggleProjectOpacity = (e) => {
        if(e.target === modal.current){
            setShowProjects(false)
        }
      }
  return (
    <>
    <div ref={modal} onClick={toggleProjectOpacity} className={`top-0 duration-100 left-0 h-screen flex items-end justify-end bg-black/50 w-full fixed ${showProjects ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className={`h-[calc(100vh-10%)] transition-transform bg-  ${showProjects ? 'delay-500 duration-1000 translate-y-0' : 'duration-0 delay-0 translate-y-full'} overflow-y-auto  gap-8 restrict-scroll w-full bg-[#161616] rounded-t-3xl p-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1`}>
            {projects.map((item,idx)=>{
                return(
                    <Link to={item.link}>
                     <div className='h-60 group ring-1 ring-black/5 relative shadow-2xl shadow-black/5 overflow-hidden rounded-xl gap-8'>
                        <div className='absolute z-50 bg-gradient-to-t from-black/50 to-white/0 flex items-end justify-end p-4 w-full h-full top-0 left-0'>
                            <p className='font-semibold group-hover:pb-2 duration-200 text-white text-[12px]'>{item.title.slice(0,40)}</p>
                        </div>
                        <div><img src={item.image} className='w-full group-hover:scale-110 duration-500 h-full object-cover' alt="" /></div>
                     </div>
                    </Link>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default ProjectModal
