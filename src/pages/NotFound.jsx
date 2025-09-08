import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    let navigate = useNavigate()
  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l to-[#141414] from-[#0c2025] md:text-[70px] flex-col gap-[20px] text-white flex items-center justify-center '>404 page Not Found
    <button className='bg-white px-[20px] py-[10px] rounded-xl text-[18px] text-black cursor-pointer ' onClick={()=>navigate("/login")}>Login</button></div>
  )
}

export default NotFound