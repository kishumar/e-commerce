import React from 'react'
import Title from '../components/Title'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import { AuthDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useEffect } from 'react'
import Loading from '../../../admin/src/components/Loading'

const Order = () => {
let [orderData , setOrderData] = useState([])
let {currency} = useContext(ShopDataContext)
let {serverUrl } = useContext(AuthDataContext)
const [loading , setLoading] = useState(false)


const loadOrderData = async()=>{
  setLoading(true)
  try {
    let result = await axios.post(serverUrl + "/api/order/userorder" ,{},{withCredentials:true})
    if(result.data){
      let allOrdersItem =[]
      result.data.map((order)=>{
        order.items.map((item)=>{
          item["status"] = order.status
          item["payment"]= order.payment
          item["paymentMethod"]= order.paymentMethod
          item["date"]=order.date
          allOrdersItem.push(item)
        })
      })
      setOrderData(allOrdersItem.reverse())
    }
    setLoading(false)
    
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}

useEffect(()=>{
  loadOrderData()
})
  return (
    <div className='w-[99vw] min-h-[100vh] p-[20px] pb-[150px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]'>
      <div className='h-[8%] w-[100%] text-center mt-[80px] '>
        <Title text1={"MY"} text2={" ORDER"} />

      </div>
        <div className='w-[100%] h-[92%] flex flex-wrap gap-[20px]'>

          {
orderData.map((item, index)=>(
  <div className='w-[100%] h-[10%] border-t border-b
  ' key={index}>
    <div className='w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative'>
      <img src={item.image1} className='w-[130px] h-[130px] rounded-md' alt="" />
      <div className='flex items-start justify-center flex-col gap-[5px]'>
        <p className='text-white text-[20px] md:text-[25px]'>{item.name}</p>
        <div className='flex items-center gap-[8px] md:gap-[20px] '>

        <p className='text-[#aaf4ef] text-[12px] md:text-[18px]'>{currency} {item.price}</p>
        <p className='text-[#aaf4ef] text-[12px] md:text-[18px]'>Quantity: {item.quantity}</p>
        <p className='text-[#aaf4ef] text-[12px] md:text-[18px]'>Size: {item.size}</p>
        </div>
        <div className='flex items-center '>
          <p className='md:text-[18px] text-[12px] text-[#aaf4ef] '>Date: <span className='text-[#e4fbff] pl-[10px] md:text-[16px] text-[11px]'>{new Date(item.date).toDateString()}</span></p>
        </div>
        <div className='flex items-center '>
          <p className='md:text-[18px] text-[12px] text-[#aaf4ef] '>Payment Method : {item.paymentMethod}</p>
        </div>
        <div className='absolute md:left-[55%] md:top-[40%] right-[2%] top-[2%] '>
          <div className='flex items-center gap-[5px] '>
            <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
            <p className='md:text-[17px] text-[10px] text-[#f3f9fc]'>{item.status}</p>
          </div>
        </div>
        <div className='absolute md:right-[5%] right-[1%] md:top-[40%] top-[70%]'>
          <button className='md:px-[15px] px-[5px] md:py-[7px] rounded-md text-[#f3f9fc] cursor-pointer active:bg-slate-500 bg-[#101919] text-[12px] md:text-[16px]' onClick={loadOrderData}>Track Order
          </button>
    </div>
    </div>
    </div>
  </div>
))
          }
        </div>
    </div>
  )
}

export default Order