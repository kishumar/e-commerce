import React from 'react'
import back2 from "../assets/back2.jpg"
import back4 from "../assets/back4.jpg"
import back1 from "../assets/back1.jpg"
import back3 from "../assets/back3.jpg"

function Background({heroCount}) {
  
   if(heroCount === 0){
    return <img className='w-[60%] h-[90%] float-right overflow-auto object-cover' src={back1} alt="" />
   }else if(heroCount === 1){
return  <img className='w-[60%] h-[90%] float-right overflow-auto object-cover' src={back2} alt="" />
   }else if(heroCount === 2){
return  <img className='w-[60%] h-[90%] float-right  overflow-auto object-bottom' src={back3} alt="" />
   }else if(heroCount === 3){
return  <img className='w-[60%] h-[90%] float-right overflow-auto object-cover' src={back4} alt="" />
}
}

export default Background