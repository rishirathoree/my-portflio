import React from 'react'

const Navbar = () => {
  return (
    <div className='flex fixed w-full top-0 right-0 items-center justify-between px-12 py-4'>
      <h1 className='font-semibold text-sm'>Portfolio</h1>
        <div className='gap-4 flex items-center'>
            <button className=' '><i className='bx bx-receipt'></i></button>
            <button className=' '><i className='bx bxl-github'></i></button>
            <button className=' '><i className='bx bxl-linkedin'></i></button>
        </div>
    </div>
  )
}

export default Navbar