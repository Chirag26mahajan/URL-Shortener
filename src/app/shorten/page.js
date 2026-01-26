"use client"
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl,setShorturl] = useState("")
    const [generated, setGenerated] = useState(false)

    const handleChange = ()=>{

    }

  return (
    <div className='mx-auto max-w-lg'>
      <h1>Generate your short URLs</h1>
      <div>
         <input type="text" placeholder='Enter your URL' onChange={handleChange}/>
         <input
         className='p-4 focus:outline-purple-600' 
         type="text" 
         placeholder ='Enter your preferred short URL text' onChange={handleChange}/>
         <button>Generate</button>
      </div>
    </div>
  )
}

export default Shorten
