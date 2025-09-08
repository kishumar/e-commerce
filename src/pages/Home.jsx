
import { useState } from 'react'
import Background from '../components/Background'
import Hero from '../components/Hero'
import { useEffect } from 'react'
import OurPolicy from '../components/OurPolicy'
import Product from './Product'
import NewLetterBox from '../components/NewLetterBox'
import Footer from '../components/Footer'

const Home = () => {

  let heroData = [
    {text1:"30% Off limited offer", text2:"Style that"},
    {text1:"Discover the Best of Bold fashion" , text2:"Limited Time Only!"},
    {text1:"Explore Our Best Collection" , text2:"Shop Now!"},
    {text1:"Choose your Perfect Fasion Fit", text2:"Now on Sale"}
  ]

  let [heroCount, setHeroCount] = useState(0)

  useEffect(()=>{
    let interval = setInterval(()=>{
      setHeroCount(prevCount => (prevCount ===3  ? 0: prevCount +1))
    },3000)
    return ()=> clearInterval(interval)
  })
  return (
    <div className='overflow-x-hidden relative top-[70px]'>


    <div className="w-full h-screen sm:h-[30vh] md:h-[50vh] lg:h-screen bg-gradient-to-l from-[#141414] to-[#0c2025]">

      <Background heroCount={heroCount} />
      <Hero 
      heroCount={heroCount}
      setHereCount={setHeroCount}
      heroDate={heroData[heroCount]}
      />
      
    </div>
    <Product />
    <OurPolicy/>
    <NewLetterBox/>
   <Footer/>
    </div>
  )
}

export default Home