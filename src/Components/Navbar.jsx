import React from 'react'

const Navbar = ({showProjects,setShowProjects}) => {
  const toggleProject = () => {
    setShowProjects(p=>!p)
  }
  return (
    <>

    <div className='p-10 fixed w-full top-0 right-0 flex items-center justify-between'>
      <p className='font-bold leading-3 -tracking-[2px] text-2xl text-[#6ace60]'>Rishi</p>
      <div onClick={toggleProject} className={`space-y-1 items-center flex justify-center flex-col`}>
        <div className={`block w-2 h-[1px] bg-white`}></div>
        <div className='block w-4 h-[1px] bg-white'></div>
        <div className={`block w-2 h-[1px] bg-white`}></div>
      </div>
    </div>
    </>
  )
}

export default Navbar
