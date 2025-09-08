import React, { useContext, useEffect, useState } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import Title from './Title'
import Card from './Card'

const BestSeller = () => {
let {products}= useContext(ShopDataContext)
let [bestSeller , setBestSeller]= useState([])


useEffect(()=>{
  let filterProduct = products.filter((item)=> item.bestSeller)
  setBestSeller(filterProduct.slice(0,4))
},[products])
 
  return (
    <div>
       <div className="h-[8%] w-[100%] text-center mt-[50px]">
        <Title text1={"BEST"} text2={" SELLER"} />
        <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
          Tried, Tested, Loved - Discover Our All-Time Best Sellers.
        </p>
      </div>
      <div className='w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
        {bestSeller.length > 0 ? (
      bestSeller.map((item, index)=>(
        <Card key={index}  name={item.name}
        id={item._id} price={item.price} image={item.image1}/>
      ))
    ): (
 <p className="text-white text-center">No best sellers available</p>
    )}
        </div>
    </div>
  )
}

export default BestSeller