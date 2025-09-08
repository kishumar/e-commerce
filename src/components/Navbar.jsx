
// 🧠 IMPORTS
import logo from "../assets/vcartlogo.png"
import { IoSearchCircleOutline, IoSearchCircleSharp } from "react-icons/io5"; // 🔧 LINE FIX: Combined imports
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineCollection } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";
import { MdPermContactCalendar } from "react-icons/md";
import { useState, useContext } from 'react'; // 🔧 LINE FIX: Combined useContext/useState
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
import { AuthDataContext } from "../context/AuthContext";
import { ShopDataContext } from "../context/ShopContext";

const Navbar = () => {

  const { userData, getCurrentUser } = useContext(UserDataContext)
  const { serverUrl } = useContext(AuthDataContext)
  const { showSearch, setShowSearch, search, setSearch, getCartCount } = useContext(ShopDataContext)
  const [showProfile, setShowProfile] = useState(false)
  const navigate = useNavigate();
  const [loading , setloading] = useState(false)

  const handlelogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
      console.log(result.data)
      getCurrentUser()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='w-full h-[70px] bg-gray-200 z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>
      {/* LEFT: LOGO */}
      <div className='w-[30%] flex items-center justify-start gap-[10px]'>
        <img className='w-[30px]' src={logo} alt="OneCart Logo" /> {/* 🔧 LINE FIX: Added alt text */}
        <h1 className='text-[25px] text-black font-semibold'>OneCart</h1>
      </div>

      {/* CENTER: NAVIGATION */}
      <div className='w-[40%] hidden md:block'> {/* 🔧 LINE FIX: Hide on mobile */}
        <ul className='flex items-center justify-center gap-[12px] text-white text-sm'>
          <li className='hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[8px] px-[16px] rounded-2xl' onClick={() => navigate("/")}>HOME</li>
          <li className='hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[8px] px-[16px] rounded-2xl' onClick={() => navigate("/collection")}>COLLECTIONS</li>
          <li className='hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[8px] px-[16px] rounded-2xl' onClick={() => navigate("/about")}>ABOUT</li>
          <li className='hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[8px] px-[16px] rounded-2xl' onClick={() => navigate("/contact")}>CONTACT</li>
        </ul>
      </div>

      {/* RIGHT: ICONS */}
      <div className='w-[30%] flex items-center justify-end gap-[20px] relative'>
        {!showSearch && (
          <IoSearchCircleOutline
            className='w-[30px] h-[30px] text-black cursor-pointer'
            onClick={() => { setShowSearch(prev => !prev); navigate("/collection") }}
          />
        )}
        {showSearch && (
          <IoSearchCircleSharp
            className='w-[30px] h-[30px] text-black cursor-pointer'
            onClick={() => setShowSearch(prev => !prev)}
          />
        )}
        {!userData ? (
          <FaUserCircle
            className='w-[28px] h-[28px] text-black cursor-pointer'
            onClick={() => setShowProfile(prev => !prev)}
          />
        ) : (
          <div
            className='w-[30px] h-[30px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer'
            onClick={() => setShowProfile(prev => !prev)}
          >
            {userData?.name.slice(0, 1)}
          </div>
        )}

        {/* CART ICON WITH RELATIVE CONTAINER */}
        <div className='relative'>
          <MdOutlineShoppingCart
            className='w-[30px] h-[30px] text-black cursor-pointer'
            onClick={() => navigate("/cart")}
          />
          {getCartCount() > 0 && (
            <p className='absolute top-[-5px] right-[-5px] w-[18px] h-[18px] flex items-center justify-center bg-black font-bold text-white rounded-full text-[10px]'>
              {getCartCount()}
            </p>
          )}
        </div>
      </div>

      {/* SEARCH BAR - RESPONSIVE WIDTH */}
      {showSearch && (
        <div className='w-full h-[80px] bg-white absolute top-[100%] left-0 flex items-center justify-center z-20'>
          <input
            type="text"
            className='w-[90%] md:w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[30px] placeholder:text-white text-white text-[18px]'
            placeholder='Search Here'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      )}

      {/* PROFILE DROPDOWN */}
      {showProfile && (
        <div className='absolute w-[90vw] max-w-[220px] h-[160px] bg-[#000000d7] top-[110%] right-[4%] border border-gray-400 rounded-[10px] z-20'>
          <ul className='w-full h-full flex flex-col justify-around text-white text-[16px] py-[10px]'>
            {!userData && (
              <li className='hover:bg-[#2f2f2f] px-[15px] py-[8px] cursor-pointer' onClick={() => { navigate("/login"); setShowProfile(false) }}>Login</li>
            )}
            {userData && (
              <li className='hover:bg-[#2f2f2f] px-[15px] py-[8px] cursor-pointer' onClick={() => { handlelogout(); setShowProfile(false) }}>Logout</li>
            )}
            <li className='hover:bg-[#2f2f2f] px-[15px] py-[8px] cursor-pointer'  onClick={() => {navigate("/order"); setShowProfile(false) }}>Orders</li>
            <li className='hover:bg-[#2f2f2f] px-[15px] py-[8px] cursor-pointer' onClick={() => { navigate("/about"); setShowProfile(false) }}>About</li> 
          </ul>
        </div>
      )}

      {/* 📱 MOBILE BOTTOM NAVBAR */}
      <div className="w-full h-[70px] flex items-center justify-around px-[12px] fixed bottom-0 left-0 bg-[#191919] md:hidden z-10"> {/* 🔧 LINE FIX: Made it full width, flex layout */}
        <button className="text-white flex flex-col items-center gap-[2px]" onClick={() => navigate("/")}><IoMdHome className="w-[24px] h-[24px]" />Home</button>
        <button className="text-white flex flex-col items-center gap-[2px]" onClick={() => navigate("/collection")}><HiOutlineCollection className="w-[24px] h-[24px]" />Collections</button>
        <button className="text-white flex flex-col items-center gap-[2px]" onClick={() => navigate("/contact")}><MdPermContactCalendar className="w-[24px] h-[24px]" />Contact</button>
        <div className="relative flex flex-col items-center">
          <MdOutlineShoppingCart className="text-white w-[24px] h-[24px]" onClick={() => navigate("/cart")} />
          <span className="absolute top-[-4px] right-[-6px] w-[16px] h-[16px] text-white bg-red-500 text-[10px] rounded-full flex items-center justify-center">
            {getCartCount()}
          </span>
          <span className="text-white text-[10px] mt-1">Cart</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
