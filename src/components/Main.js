import React from 'react'
import Education  from '../Images/Education.png'
import Smiling from'../Images/Smiling.png'
import Whatsapp from '../Images/Whatsapp.png'

const Main = () => {
  return (
    <>
    <div className=" flex justify-between px-[8%]" >
      <div className="flex flex-col my-14">
          <div className="text-[#075E54] font-bold text-2xl">Solve all your problems</div>
          <div className="text-[#2E3249] font-bold text-2xl">all on Whatsapp</div>
          <div className="text-[#2E3249] mt-2 font-medium text-lg">Connect with mentors from IIT ,BITS, AIIMS on a 1 on 1 live video call
         <div className="flex"><span>absolutely for free</span><img src ={Smiling} className= "w-6" alt=""/> </div>
         </div>
          <div className="text-[#2E3249] mt-10 font-bold "> Classes 8-12 | JEE & NEET aspirants
          </div>
          <div><button className="bg-[#075E54] flex space-x-2 justify-center mt-6  hover:bg-[#128C7E] rounded-md px-16 py-2"> <img src={Whatsapp} className="w-6" alt=""/><span className="text-white">TRY IT OUT</span></button></div>
      </div>
      <div><img  src={Education} alt="" className="w-80 my-6" /></div>
    </div>
    
    </>
  )
}

export default Main
