import React from 'react'
import { FaCircle } from "react-icons/fa";

function Hero({heroDate,heroCount,setHereCount}) {
  return (
    <div className='w-[40%] h-[100%] relative'>
        <div className='absolute text-[#88d9ee] text-[30px][ md:text-[40px] lg:text-[55px] md:left-[10%] md:top-[90px] lg:top-[130px] top-[10px] '>
<p>{heroDate.text1}</p>
<p>{heroDate.text2}</p>

        </div>
        <div className='absolute md:top-[400px] lg:top-[400px] top-[160px] left-[10%] flex items-center justify-center gap-[10px] '>
<FaCircle  className={`w-[14px] ${heroCount ===0 ? "fill-orange-400" :" fill-white"}`}onClick={()=>setHereCount(0)}/>
<FaCircle className={`w-[14px] ${heroCount ===1 ? "fill-orange-400" :" fill-white"}`}onClick={()=>setHereCount(0)}/>
<FaCircle className={`w-[14px] ${heroCount ===2 ? "fill-orange-400" :" fill-white"}`}onClick={()=>setHereCount(0)}/>
<FaCircle className={`w-[14px] ${heroCount ===3 ? "fill-orange-400" :" fill-white"}`}onClick={()=>setHereCount(0)}/>
        </div>
    </div>
  )
}

export default Hero