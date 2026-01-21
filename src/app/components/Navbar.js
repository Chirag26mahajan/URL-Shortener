import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='h-16 bg-purple-700 flex justify-between px-4 items-center text-white'>
        <div className="logo font-bold text-lg">
        Linkly
        </div>
        <ul className='flex justify-center gap-4 items-centre'>
           <Link href='/'><li>Home</li> </Link>
           <Link href='/about'><li>About</li></Link>
           <Link href='/generate'><li>Shorten</li></Link>
           <Link href='/contact'><li>Contact US</li></Link>
            <li className='flex gap-3'>
                <Link href="/generate"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
