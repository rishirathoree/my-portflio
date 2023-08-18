import React from 'react'

const Loader = ({shimmer}) => {
    
  return (
    <>
    <div className={`fixed space-y-6 top-0 w-full flex-col h-screen duration-700 flex items-center justify-center bg-black z-[700] ${shimmer ? 'visible opacity-100' : 'invisible opacity-0'}`}>
    <p className='font-bold leading-3 animate-bounce -tracking-[2px] text-2xl text-[#6ace60]'>Rishi</p>
    <p className='font-semibold text-[10px] text-white'>Use mouse to see some effect,Thanks</p>
    </div>
    </>
  )
}

export default Loader
