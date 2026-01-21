import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='h-16 bg-purple-700 flex justify-between px-4 items-center text-white'>
        <div className="logo font-bold text-lg">
        Linkly
        </div>
        <ul className='flex justify-center gap-4 items-centre'>
            <li>Home</li>
            <li>About</li>
            <li>Shorten</li>
            <li>Contact US</li>
            
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
