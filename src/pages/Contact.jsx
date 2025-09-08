import React from 'react'
import Title from '../components/Title'
import NewLetterBox from '../components/NewLetterBox'
import contactimage from "../assets/contact.jpg"

const Contact = () => {
  return (
    <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>

<Title text1={'CONTACT'} text2={' US'}/>
<div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
    <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
        <img className='lg:w-[70%] w-[80%] shadom-md shadow-black rounded-sm' src={contactimage} alt="" />
    </div>
    <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
        <p className='lg:w-[80%] w-[100%] text-white font-bold lg:text-[18px] text-[15px]'>Our Store</p>
        <p className='lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px]'>
            <p>12345 Random Station</p>
            <p>random city, state, India</p>
        </p>
        <p className='lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px]'>
            <p>tel: +91-9871883778 </p>
            <p>Email: admin@onecart.com</p>
        </p>
        <p className='lg:w-[80%] w-[100%] lg:text-[18px] text-white font-bold mt-[10px] text-[13px]'>Careers at OneCart</p>
        <p className='lg:w-[80%] w-[100%] text-white lg:text-[18px] font-bold mt-[10px] text-[13px]'>Learn more about our teams and job openings</p>
        <button className='px-[30px] py-[20px] flex items-center justify-center text-white bg-transparent border active:bg-slate-600 rounded-md'>Explore Jobs</button>
    </div>
</div>
<NewLetterBox/>
    </div>
  )
}

export default Contact