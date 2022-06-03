import React from 'react'
import Step1 from "../Images/step1.png"
import Step2 from "../Images/step2.png"
import Step3 from "../Images/step3.png"
import Step4 from "../Images/step4.png"

const Working = () => {

    let Steps =[
        {step : 1, working:{heading:"Take photo of your questions",subHeading:"Simply type or take photo of the question you want to learn."}, imgUrl:Step1},
        {step : 2, working:{heading:"Connect to a mentor",subHeading:"After submitting the question, connect to a Mentor instantly."}, imgUrl:Step2},
    
        {step : 3, working:{heading:"Learn over a call",subHeading:"Clear all your concepts and doubts on a 1 on 1 call with our top mentors."}, imgUrl:Step3},
        
        {step : 4, working:{heading:"Get a photo of your solution",subHeading:"You will recieve a written solution after the call."}, imgUrl:Step4},
        
    ];
  return (

    <div className="workingSteps">
     
        <div className="text-[#2E3249] font-bold text-3xl flex justify-center mb-16">How it Works</div>
          {Steps.map((e, i)=>(
             
         <div  key ={i} className={`flex  justify-evenly flex-${e.step%2===0?"row-reverse":"row"} pl-32`}>
           
             <div className="text-[#2E3249] flex">
                 <div className="font-semibold text-[5rem] px-4">{e.step}</div>
                  <div className="pt-10">
                      <div className="font-bold text-lg">{e.working.heading}</div>
                      <div className="">{e.working.subHeading}</div>
                  </div>
 
             </div>
             
              <img src= {e.imgUrl} className="md:w-40 w-28 " alt=""/>

             </div>

             
             ))}
         
    </div>
   
  )
}

export default Working
