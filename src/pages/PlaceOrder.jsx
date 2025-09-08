import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from './CartTotal'
import razorpay from "../assets/razorpay.jpeg"
import { ShopDataContext } from '../context/ShopContext'
import { AuthDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
    let [method , setMethod] =  useState("cod")
 let {cartItem , setCartItem , getCartAmount , delivery_fee, products } = useContext(ShopDataContext)
  let {serverUrl} = useContext(AuthDataContext)
  const navigate = useNavigate()

    let [formData , setFormData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      street:"",
      city:"",
      state:"",
      pinCode:"",
      country:"",
      phone:""
    })



    const onChangeHandler = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setFormData(data => ({...data,[name]:value}))
    }

    const initPay = (order)=>{
      const options = {
        key: import.meta.env.RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Order Payment",
        description: "Order payment",
        order_id: order.id,
        receipt:order.receipt,
        handler: async (response) => {
          console.log(response)
          const {data} = await axios.post(serverUrl + "/api/order//verifyrazorpay" , response, {withCredentials:true})
          if(data){
            navigate("/order")
            setCartItem({})
          }
          const rzp = new window.Razorpay(options)
          rzp.open()
        }

      }
    }

    const onSubmitHandler =  async (e)=>{
  e.preventDefault()
  try {
    let orderItems = []
    for(const items in cartItem){
      for (const item in cartItem[items]){
        if(cartItem[items][item] >0 ){
          const itemInfo = structuredClone(products.find(product => product._id === items))
          if(itemInfo){
            itemInfo.size = item
            itemInfo.quantity = cartItem[items][item]
            orderItems.push(itemInfo)
          }
        }
      }
    }
    let orderData = {
      address:formData,
      items:orderItems,
      amount:getCartAmount() + delivery_fee
    }
    switch(method){
      case "cod" :
        const result = await axios.post(serverUrl + "/api/order/placeorder" , orderData ,{withCredentials:true})
        if(result.data){
         setCartItem({}) 
         navigate("/order")
        }
        break;
        
        case "razorpay":
          const resultRazorpay = await axios.post(serverUrl + "/api/order/razorpay" ,orderData ,{withCredentials:true})
          if(resultRazorpay.data){
            console.log(resultRazorpay.data)
          }
        break
    }
  
  } catch (error) {
      console.error("Order submission failed", error);
  alert("Failed to place order. Please try again.");
  }
    }



  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] items-center justify-center to-[#0c2025] flex flex-col relative md:flex-row  gap-[50px]'>
       <div className='lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px]'>
        <form onSubmit={onSubmitHandler} action='' className='lg:w-[70%] w-[95%] lg:h-[70%] h-[100%]'>
            <div className='py-[10px]'>
                <Title text1={"DELIVERY"} text2={" INFORMATION"} />
            </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
     <input
    type='text'
    placeholder='First name'
    className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]' onChange={onChangeHandler} name='firstName' value={formData.firstName}
    required
  />
  <input
    type='text'
    placeholder='Last name'
    className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]' onChange={onChangeHandler} name='lastName' value={formData.lastName}
    required
  />
            </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                <input
    type='email'
    placeholder='Email address'
    className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]' onChange={onChangeHandler} name='email' value={formData.email}
    required
  />
            </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                <input
    type='text'
    placeholder='Street'
    className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]' onChange={onChangeHandler} name='street' value={formData.street}
    required
  /> 
  </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                <input
    type='text'
    placeholder='City'
    className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]' onChange={onChangeHandler} name='city' value={formData.city}
    required
  /> 
                <input
    type='text'
    placeholder='State'
    className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]'
    required onChange={onChangeHandler} name='state' value={formData.state}
  /> 
  </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                <input
    type='text'
    placeholder='Pincode'
    className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]'
    required onChange={onChangeHandler} name='pinCode' value={formData.pinCode}
  /> 
                <input
    type='text'
    placeholder='Country'
    className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]'
    required onChange={onChangeHandler} name='country' value={formData.country}
  /> 
  </div>
   <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                <input
    type='text'
    placeholder='Phone'
    className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]' onChange={onChangeHandler} name='phone' value={formData.phone}
    required
  /> 
  </div>
  <div>
    <button 
  type='submit' 
  className='text-[18px] active:bg-slate-500 cursor-pointer bg-[#3bcee848] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] absolute lg:right-[20%] bottom-[10%] right-[35%] border-[1px]  border-[#808084] ml-[30px] mt-[20px]'
>
  PLACE ORDER
</button>
  </div>
        </form>
    </div>
        <div className='lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]'>
            <div className='lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex items-center p-[30px] justify-center gap-[10px] flex-col'>
                <CartTotal/>
                <div className='py-[10px]'>
                    <Title text1={"PAYMENT"} text2={" METHOD"} />
                </div>
                <div className='w-[100%] h-[30vh] lg:h-[100px] flex items-start mt-[20px] lg:mt-[0px] justify-center gap-[50px]'>
                    <button 
  onClick={() => setMethod('razorpay')}
  className={`w-[150px] h-[50px] rounded-md ${
    method === 'razorpay' ? 'border-[5px] border-blue-900 rounded-sm' : ''
  }`}
>
  <img src={razorpay} className='w-[100%] rounded-md h-[80%] object-fill' alt='' />
</button>
<button 
  onClick={() => setMethod('cod')}
  className={`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-[#332f6f] cursor-pointer text-[14px] px-[20px] rounded-sm text-white font-bold ${
    method === 'cod' ? 'border-[5px] border-blue-900 rounded-full' : ''
  }`}
>
  CASH ON DELIVERY
</button>
                </div>
                </div>
            </div>
        </div>
       
  )
}

export default PlaceOrder