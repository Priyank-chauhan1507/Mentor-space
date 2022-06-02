import React from 'react'
import Whatsapp from '../Images/Whatsapp.png'

const Header = () => {
  return (
    <div className="flex justify-between px-[8%] items-center  h-28 shadow-lg"> 
      
      <div className="font-bold text-2xl text-[#075E54]"> Mentor Space</div>
       <div className="bg-[#075E54] text-sm rounded-md  hover:bg-[#128C7E] transition"><button className="flex  space-x-2 justify-center py-2 px-3 "> <img src={Whatsapp} className="w-6" alt="" /><span className="text-white ">whatsapp</span> </button></div>
    </div>
  )
}

export default Header
