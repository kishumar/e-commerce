import React, { useContext } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import Title from '../components/Title'


const CartTotal = () => {

     const {delivery_fee, currency , getCartAmount} = useContext(ShopDataContext)
  return (
    <div className='w-full lg:ml-[30px]'>
        <div className='text-xl py-[10px]'>
            <Title text1={"CART"}  text2={" TOTALS"} />
        </div>
        <div className='flex flex-col text-white gap-2 mt-2 text-sm p-[30px] border-[2px] border-[#4d8990]'>
  <div className='flex justify-between text-white text-[18px] p-[10px]'>
    <p>Subtotal</p>
    <p>{currency} {getCartAmount()}.00</p>
  </div>
  
  <div className='flex justify-between text-white text-[18px] p-[10px]'>
    <p>Shipping Fee</p>
    <p>{currency} {delivery_fee}</p>
  </div>
  
  <div className='flex justify-between text-white text-[18px] p-[10px]'>
    <p>Total</p>
    <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</p>
  </div>
</div>

    </div>
  )
}

export default CartTotal