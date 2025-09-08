// import React, { useContext, useEffect, useState } from 'react'
// import { FaChevronRight } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";
// import Title from '../components/Title';
// import { ShopDataContext } from '../context/ShopContext';
// import Card from '../components/Card';


// const Collection = () => {

//   let [showFilter , setShowFilter] = useState(false)
// let {products , search , showSearch}= useContext(ShopDataContext)
// let [filterProduct , setFilterProduct] = useState([])
// let[category , setCategory]= useState([])
// let[subCategory , setSubCategory]= useState([])
// let[sortType , setSortType]= useState("relavent")

// const toggleCategory  =(e)=>{
//   if(category.includes(e.target.value)){
//     setCategory(prev => prev.filter(item => item !==  e.target.value))
//   }else{
// setCategory(prev => [...prev,e.target.value])
//   }

// }
// const toggleSubCategory  =(e)=>{
//   if(subCategory.includes(e.target.value)){
//     setSubCategory(prev => prev.filter(item => item !==  e.target.value))
//   }else{
// setSubCategory(prev => [...prev,e.target.value])
//   }

// }


// const sortProducts = (e)=>{
//   let fbCopy = filterProduct.slice()

//   switch(sortType){
//     case 'low-high':
//       setFilterProduct(fbCopy.sort((a,b) => (a.price - b.price)))
//       break;
//     case 'high-low':
//       setFilterProduct(fbCopy.sort((a,b) => (b.price - a.price)))
//       break;
//       default:
//         applyFilter()
//         break;
//   }
// }

// useEffect(()=>{
//   sortProducts()
// },[sortType])

// const applyFilter = ()=>{
//   let productCopy = products.slice()


//   if(showSearch && search){
//     productCopy = productCopy.filter(item =>item.name.toLowerCase().includes(search.toLowerCase))
//   }
// if(category.length > 0){
//   productCopy = productCopy.filter(item => category.includes(item.category))
// }
// if(subCategory.length > 0){
//   productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
// }
// setFilterProduct(productCopy)
// }

// useEffect(()=>{
// setFilterProduct(products)
// },[products])

// useEffect(()=>{
// applyFilter()
// },[category, subCategory ,search,showSearch])



//   return (
//     <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center flex-col md:flex-row justify-start pt-[70px] overflow-y-hidden z-[2]'>
//         <div className={`md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h[100vh] p-[20px] ${showFilter ? "h-[45vh]"  : "h-[8vh]"} boder-r-[1px] border-gray-400 text-[#aaf5fa] lg:fixed 
//       `}>
//             <p onClick={()=>setShowFilter(prev => !prev)} className='text-[25px] font-semibold flex gap-[5px] items-center justify-start '>FILTERS
//              {!showFilter && <FaChevronRight className='text-[18px] md:hidden' />}
//              {showFilter &&<FaChevronDown className='text-[18px] md:hidden' /> }
//             </p>
//   <div className={`boder-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"}md:block`}>
// <p className='text-[18px] text-[#f8fafa] '>CATEGORIES</p>
// <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
//     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'><input type="checkbox" value={"Men"} className='w-3' onChange={toggleCategory}/>Men</p>
//     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'><input type="checkbox" value={"Women"} className='w-3' onChange={toggleCategory}/>Women</p>
//     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'><input type="checkbox" value={"Kids"} className='w-3' onChange={toggleCategory}/>Kids</p>
// </div>
//  </div>
//             <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "block" : "hidden"} md:block`}>
// <p className='text-[18px] text-[#f8fafa] '>SUB-CATEGORIES</p>
// <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
//     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
//       <input type="checkbox" value={"TopWear"} className='w-3' onChange={toggleSubCategory}/>TopWear</p>
//     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'><input type="checkbox" value={"BottomWear"} className='w-3' onChange={toggleSubCategory} />BottomWear</p>
//     <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'><input type="checkbox" value={"WinterWear"} className='w-3' onChange={toggleSubCategory}/>WinterWear</p>
// </div>
//             </div>
//         </div>

//         <div className='lg:pl-[20%] md:py-[10px]'>
//           <div className='md:w-[80vw] w-[100vw] p-[20px] flex justify-between flex-col lg:flex-row lg:px-[50px]'>
//            <Title text1={"ALL"} text2={" COLLECTIONS"} />
//            <select className='bg-slate-600 w-[60%] md:w-[200px] h-[50px] px-[10px] text-[white] rounded-lg hover:border-[#46d1f7] border-[2px]' name="" id="" onChange={(e)=>setSortType(e.target.value)}>

//           <option value="relevant" className="w-[100%]">Sort By: Relevance</option>
//           <option value="low-high" className="w-[100%]">Price: Low to High</option>
//           <option value="high-low" className="w-[100%]">Price: High to Low</option>
//            </select>
//           </div>
//           <div className='lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]'>
//             {
// filterProduct.map((item , index)=>(
//   <Card key={index} id={item._id} price={item.price} image={item.image1} name={item.name} />
// ))
//             }
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Collection



import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Title from '../components/Title';
import { ShopDataContext } from '../context/ShopContext';
import Card from '../components/Card';

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false)
  const { products, search, showSearch } = useContext(ShopDataContext)
  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relevant") // 🔧 LINE FIX: typo ("relavent" ➝ "relevant")

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const sortProducts = () => {
    const fbCopy = [...filterProduct]

    switch (sortType) {
      case 'low-high':
        setFilterProduct(fbCopy.sort((a, b) => a.price - b.price))
        break
      case 'high-low':
        setFilterProduct(fbCopy.sort((a, b) => b.price - a.price))
        break
      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    sortProducts()
  }, [sortType]) // 🔧 LINE FIX: watches correct value for sorting

  const applyFilter = () => {
    let productCopy = [...products]

    if (showSearch && search) {
      productCopy = productCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) // 🔧 LINE FIX: added () to toLowerCase()
      )
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProduct(productCopy)
  }

  useEffect(() => {
    setFilterProduct(products)
  }, [products])

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col md:flex-row pt-[70px] overflow-x-hidden z-[2]'>
      
      {/* SIDEBAR FILTERS */}
      <div className={`md:w-[30vw] lg:w-[20vw] w-full px-[20px] ${showFilter ? "h-auto" : "h-[8vh]"} border-r border-gray-400 text-[#aaf5fa] lg:fixed`}>
        <p
          onClick={() => setShowFilter(prev => !prev)}
          className='text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer'
        >
          FILTERS
          {!showFilter && <FaChevronRight className='text-[18px] md:hidden' />}
          {showFilter && <FaChevronDown className='text-[18px] md:hidden' />}
        </p>

        {/* CATEGORIES */}
        <div className={`border-2 border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "block" : "hidden"} md:block`}>
          <p className='text-[18px] text-[#f8fafa]'>CATEGORIES</p>
          <div className='flex flex-col gap-[10px]'>
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className='flex items-center gap-[10px] text-[16px] font-light'>
                <input type="checkbox" value={cat} className='w-3' onChange={toggleCategory} />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* SUB-CATEGORIES */}
        <div className={`border-2 border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "block" : "hidden"} md:block`}>
          <p className='text-[18px] text-[#f8fafa]'>SUB-CATEGORIES</p>
          <div className='flex flex-col gap-[10px]'>
            {["TopWear", "BottomWear", "WinterWear"].map((sub) => (
              <label key={sub} className='flex items-center gap-[10px] text-[16px] font-light'>
                <input type="checkbox" value={sub} className='w-3' onChange={toggleSubCategory} />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCT DISPLAY */}
      <div className='flex-1 md:ml-[30vw] lg:ml-[20vw] w-full p-[20px]'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-4'>
          <Title text1={"ALL"} text2={" COLLECTIONS"} />
          <select
            className='bg-slate-600 w-full md:w-[200px] h-[50px] px-[10px] text-white rounded-lg border-2 border-transparent hover:border-[#46d1f7]'
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort By: Relevance</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        <div className='w-full min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]'>
          {filterProduct.length > 0 ? (
            filterProduct.map((item, index) => (
              <Card
                key={index}
                id={item._id}
                price={item.price}
                image={item.image1}
                name={item.name}
              />
            ))
          ) : (
            <p className="text-white text-lg">No products match your filters.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collection;
