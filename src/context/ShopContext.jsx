import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { AuthDataContext } from './AuthContext';
import axios from "axios"
import { UserDataContext } from './UserContext';
import { toast } from 'react-toastify';


export const ShopDataContext = createContext()

function ShopContext({children}) {

let[search , setSearch] = useState("")
let [showSearch , setShowSearch]= useState(false)
  let[products, setProducts] = useState([])
  let {userData} = useContext(UserDataContext)
  let {serverUrl} = useContext(AuthDataContext)
  let [cartItem , setCartItem] = useState({})
let currency = "₹";
let delivery_fee = 40;


const getProducts = async()=>{
  try {
    let result = await axios.get(serverUrl + "/api/product/list")
      console.log(result.log)
      setProducts(result.data)
    
  } catch (error) {
    console.log(error)
  }
}

const addtoCart = async(itemId, size)=>{
if(!size){
  console.log("Select Product Size");
  return;
}
    let cartData = structuredClone(cartItem); 

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData)
 

    if(userData){
      try {
     let result =  await axios.post(serverUrl + "/api/cart/add" , {itemId, size} , {withCredentials:true})
 console.log(result.data)
      } catch (error) {
        console.log(error)
      }
    }

  }

    const getUserCart =async ()=>{
      try{
         let result =  await axios.post(serverUrl + "/api/cart/get" , {} , {withCredentials:true})
 console.log(result.data)
      }catch(error){
        console.log(error)
        toast.error(error.message)
        
      }
    }

const updateQuantity = async (itemId, size, quantity) => {
  let cartData = structuredClone(cartItem);
  cartData[itemId][size] = quantity;
  setCartItem(cartData);
  if (userData) {
  try {
    await axios.post(serverUrl + "/api/cart/update", { itemId, size, quantity }, { withCredentials: true });
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
}
}


const getCartCount = ()=>{
  let totalCount = 0;
  for(const items in cartItem){
    for(const item in cartItem[items]){
      try{
        if(cartItem[items][item] > 0){
          totalCount += cartItem[items][item]
        }
      }catch(error){
console.log(error);
    toast.error(error.message);
      }
    }
  }
  return totalCount
}

const getCartAmount =  () => {
  let totalAmount = 0;

  for (const items in cartItem) {
    let itemInfo = products.find((product) => product._id === items);

    for (const item in cartItem[items]) {
      try {
        if (cartItem[items][item] > 0) {
          totalAmount += itemInfo.price * cartItem[items][item];
        }
      } catch (error) {
        console.log(error);
    toast.error(error.message);
      }  }}
      return totalAmount
}


useEffect(()=>{
  getProducts()
},[])

useEffect(()=>{
  getUserCart()
},[])



    let value ={
  products, currency, delivery_fee,getProducts,search, cartItem, addtoCart,getCartCount,setCartItem, setSearch , showSearch, setShowSearch ,updateQuantity,getCartAmount
    }
  return (
    <div>
<ShopDataContext.Provider value={value}>
    {children}
</ShopDataContext.Provider>

    </div>
  )
}

export default ShopContext