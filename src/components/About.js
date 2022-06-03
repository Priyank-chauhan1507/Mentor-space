import React from 'react'
import Image1 from '../Images/reviews & ratings/doubts 1.png'
import Image2 from '../Images/reviews & ratings/homework help 1.png'
import Image3 from '../Images/reviews & ratings/exam preparation 1.png'
import Image4 from '../Images/reviews & ratings/concept 1.png'
import Image5 from '../Images/reviews & ratings/conselling 1.png'
import Image6 from '../Images/reviews & ratings/numri 1.png'
import student from '../Images/reviews & ratings/student.webp'
import star from '../Images/reviews & ratings/star.png'
import teacher from '../Images/reviews & ratings/teacher.png'
import Whatsapp from '../Images/Whatsapp.png'

const About = () => {

    let about = [
        {img: Image1, heading:"Doubt", sub:"title"},
        {img: Image2, heading:"Homework", sub:"help"},
        {img: Image3, heading:"Exam ",  sub:"preparation"},
        {img: Image4, heading:"Concept",sub:"explanation"},
        {img: Image5, heading:"Councelling"},
        {img: Image6, heading:"Numeric", sub:"solutions"},
    ]

     let rating= [
         {imgUrl: student , number: "1500+" , title:"Students"},
         {imgUrl: star , number: "4.73" , title:"Rating"},
         {imgUrl: teacher , number: "100+" , title:"Teachers"},
     ]
  return (
    <>
      <div className=" text-[#2E3249] font-bold text-3xl flex justify-center  my-12">What can you use us for?</div>
       
        
      <div className="grid grid-cols-1 md:grid md:grid-cols-3 w-[80vw] mx-auto gap-8"> 
        { about.map((e,i) =>{
            return <div key={i} className="flex flex-col justify-center items-center text-[#2E3249]">
                <img src={e.img} alt=""/>
             <div className="font-bold text-2xl">{e.heading}</div>
             <div className="font-bold text-2xl">{e.sub}</div>
             </div>
            })}
   </div>

       {/* Stats  */}

       <div className=" text-[#2E3249] font-bold  text-xl md:text-3xl flex justify-center  mt-36">The stats speaks for themselves </div>
      
       <div className="flex justify-center items-center space-x-4  md:space-x-20 my-16 py-5 shadow-2xl">

      { rating.map((e, i)=>{
         return  <div  key={i} className="flex flex-col text-[#2E3249]">
      <div className="flex "> <span className="font-bold text-3xl">{e.number}</span> <img  className="w-12" src={e.imgUrl} alt=""/></div>
      <div className="font-medium text-lg">{e.title}</div>
           </div>
    
      })}
     </div> 

     
     <div className=" text-[#2E3249] font-bold text-3xl flex justify-center mt-20">
                 Get access now</div>  


    <div className="flex justify-center"><button className="bg-[#075E54] flex space-x-2  mt-6  hover:bg-[#128C7E] rounded-md px-20 py-2"> <img src={Whatsapp} className="w-6" alt=""/><span className="text-white">TRY IT OUT</span></button></div>       
   
      </>
  )
}

export default About
