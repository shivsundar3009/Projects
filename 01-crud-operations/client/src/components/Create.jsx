import React from 'react'

import img from '../assets/bg.jpg'
import {useNavigate} from 'react-router-dom'

function Create() {

  const Navigation = useNavigate()

  const Navigate = () => {
    Navigation('/')
  }

  return (
    
    <div style={{backgroundImage: `url(${img})`}} className='h-screen bg-cover flex justify-center items-center'>

      <div className='bg-slate-200 w-1/2 h-1/2 flex flex-col p-6'>
        <h2 className='text-center bg-blue-400 text-white font-bold cursor-pointer p-2' onClick={Navigate}>Add User</h2>

        <div className='flex flex-col p-2 gap-1'>
          <label htmlFor="userName">Enter Your Name</label>

          <input type="text" placeholder='Enter your Name' id='userName' className='w-1/2 p-2'/>
        </div>

        <div className='flex flex-col p-2 gap-1'>
          <label htmlFor="Email">Enter Your Email</label>

          <input type="email" placeholder='Enter Your Email' id='Email' className='w-1/2 p-2'/>
        </div>

        <div className='flex flex-col p-2 gap-1'>
          <label htmlFor="Age">Age</label>

          <input type="number" placeholder='Age' id='Age' className='w-1/2 p-2'/>
        </div>
      </div>



    </div>

  )
}

export default Create