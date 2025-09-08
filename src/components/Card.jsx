import React, { useContext } from 'react';
import { ShopDataContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

function Card({ name = "Product", image, id, price = 0 }) {
  const { currency } = useContext(ShopDataContext);
  let navigate = useNavigate()

  return (
    <div className="w-[300px] max-w-[90%] h-[400px] bg-[#ffffff40] backdrop-blur-lg rounded-lg hover:scale-[102%] transition-transform duration-200 cursor-pointer border-[1px] border-[#80808049] flex flex-col p-[10px]" onClick={()=> navigate(`/productdetail/${id}`)}>
      
      <img
        src={image}
        alt={name}
        className="w-[100%] h-[80%] rounded-sm object-cover"
      />

      <div className="text-[#81a7f4] text-[18px] py-[10px] font-semibold">
        {name}
      </div>

      <div className="text-white text-[14px]">
       {currency} {price}
      </div>
    </div>
  );
}

export default Card;
