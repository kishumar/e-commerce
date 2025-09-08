import React from 'react'
import logo from '../assets/vcart logo.png'

const Footer = () => {
  return (
      <div className="w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]">
      <div className="w-[100%] md:h-[30vh] h-[15vh] md:mb-[0px] bg-[#0e0d0d] flex items-center justify-center md:px-[50px] px-[5px]">
        <div className="md:w-[30%] w-[35%] h-[100%] flex items-start justify-start flex-col gap-[5px] mt-[10px] md:mt-[40px]">
            <div className='flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]'>

      <img src={logo} alt=""  className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]'/>
          <p className="text-[19px] md:text-[20px] text-[#f1eded]">OneCart</p>
            </div>
           <p className="text-[15px] text-[#eef4f5] hidden md:block">
            OneCart is your all-in-one online shopping destination, offering
            top-quality products, unbeatable deals, and fast delivery—all
            backed by trusted service designed to make your life easier every day.
          </p>
           <p className="text-[15px] text-[#e8edef] flex md:hidden">
            Fast. Easy. Reliable. OneCart Shopping
          </p>
      </div>
 <div className="md:w-[25%] w-[30%] h-full flex items-center justify-center flex-col text-center">
  <div className="flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]">
    <p className="text-[19px] md:text-[20px] text-[#f8fafa] font-sans font-semibold ">COMPANY</p>
        </div>
    <ul>
        <li className='text-[15px] text-[#f5f9fa] hiddeb md:block'>Home</li>
        <li className='text-[15px] text-[#f1f3f3] hiddeb md:block'>About us</li>
        <li className='text-[15px] text-[#f1f5f6] hiddeb md:block'>Delivery</li>
        <li className='text-[15px] text-[#f6f9fa] hiddeb md:block'>Privacy Policy</li>
    </ul>
        </div>
        <div className="md:w-[25%] w-[30%] h-full flex items-center justify-center flex-col text-center">
  <div className="flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]">
    <p className="text-[19px] md:text-[20px] text-[#ebeff0] font-sans font-semibold ">
      GET IN TOUCH
    </p>
    </div>
    <ul>
        <li className='text-[15px] text-[#dee0e0] hiddeb md:block'>+91-9876543210</li>
        <li className='text-[15px] text-[#eaecec] hiddeb md:block'>contact@onecart.com</li>
        <li className='text-[15px] text-[#e8ebec] hiddeb md:block'>+1-123-684-3497</li>
        <li className='text-[15px] text-[#eceff0] hiddeb md:block'>admin@onecart.com</li>
    </ul>
    </div>
    </div>
    <div className='w-[100%] h-[1px] bg-[#272626ec]'></div>
    <div className='w-[100%] h-[6vh] bg-[#0e0d0d] flex text-white items-center justify-center'>Copyright 2025@0necart.com-All Rights Reserved</div>
    </div>
  )
}

export default Footer