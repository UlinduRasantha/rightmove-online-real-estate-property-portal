import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    // navigate to the diferent routes when needed
    const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
      <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className='w-32 
      sm:w-44 cursor-pointer' />

      <div>
        <a href="#">Buy</a>
      </div>

      <button onClick={() => navigate('/admin')} className='h-10 mr-[10px] bg-white border-2
       border-primary box-border rounded-[8px] float-left px-4 flex items-center justify-center
       text-black font-semibold hover:bg-primary hover:text-white transition-colors duration-200'>
        <img src={assets.user} className='w-3.5 h-3.5 mr-2' alt="" />
        Sign in
      </button>
    </div>
  )
}

export default Navbar