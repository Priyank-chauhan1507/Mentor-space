import React from 'react'
import faqs from './faq.json'
import Whatsapp from '../Images/Whatsapp.png'
const Faq = () => {
  return (
    <>
      <div className=" text-[#2E3249] font-bold text-3xl flex justify-center mt-20">
                 FAQs</div>

         <div className="faq w-[80vw] mx-[10vw] mt-[5vw] shadow-2xl px-10 py-8 ">
 
             {faqs.map((e,i)=>{
                 return <div key={i} > 
                 <div className="font-semibold text-[#2E3249] my-2 text-lg">{e.question}</div>
                 <div className="text-[#2E3249] text-base font-normal mb-4">{e.answer}</div>
                 <hr className="text-[#68686B] "/>



      </div>
             })}</div>        

    <div className="flex justify-center"><button className="bg-[#075E54] flex space-x-2  mt-16  hover:bg-[#128C7E] rounded-md px-20 py-2"> <img src={Whatsapp} className="w-6" alt=""/><span className="text-white">TRY IT OUT</span></button></div>
    </>
  )
}

export default Faq
