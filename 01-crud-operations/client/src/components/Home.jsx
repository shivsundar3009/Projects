import React, { useState} from 'react'

import { useNavigate } from 'react-router-dom'

import img from '../assets/plus.png'



function Home() {

  const Navigation = useNavigate()

  const Navigate = () => {
    Navigation('/create')
  }

  

  const [users, setUsers] = useState([
    {
      Name:'Shivsundar',
      Email:'shiv@gmail.com',
      Age:23
    }
  ])

  return (
    <div className='bg-[#f7e1d7] h-screen flex justify-center '>

      <div className='mt-5'>
         
         <div className='flex gap-3'>
        <button className='p-1.5 bg-blue-400 px-2 text-white font-bold flex items-center gap-2' onClick={Navigate}> ADD <img src={img} alt="" className='h-8'/></button>

        <h1 className='text-3xl '>CRUD OPERATION USING MERN STACK</h1>
         </div>

        
        <div className='mt-5'>


        <thead >
           
           <tr >
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th colSpan={2}>Action</th>
           </tr>
      
          
        </thead>
        <tbody>

        {
         users.map( (user) => (
           <tr key={user.Email} >
             <th className='px-5'>{user.Name}</th>
             <th className='px-5 '>{user.Email}</th>
             <th className='px-5' >{user.Age}</th>
             <th className='px-5'><button className='bg-green-500 p-1.5'>Update</button></th>
             <th><button className='bg-red-600 p-1.5'>Delete</button></th>
           </tr>
         )


         

         )
       }
          
        </tbody>
        </div>
      </div>

    </div>
  )
}

export default Home