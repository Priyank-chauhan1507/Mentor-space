import React from 'react'
import Carousel from 'react-elastic-carousel';
import Img1 from '../Images/Img1.png'
import Img2 from '../Images/Img2.png'
import Img3 from '../Images/Img3.png'
import Img4 from '../Images/Img4.png'
import Img5 from '../Images/Img5.png'
import Img6 from '../Images/Img6.png'
import Mentor1 from '../Images/Ellipse 1.png'
import Mentor2 from '../Images/Ellipse 2.png'
import Mentor3 from '../Images/Ellipse 3.png'
import Mentor4 from '../Images/Ellipse 6.png'
import Whatsapp from '../Images/Whatsapp.png'
import img1 from '../Images/people review/img1.png'
import img2 from '../Images/people review/img2.png'
import img3 from '../Images/people review/img3.png'


const Mentee = () => {

    let Guide = [
        {heading:"All your doubts are cleared instantly", img :Img1},
        {heading:"You can ask unlimited doubts for free", img :Img2},
        {heading:"100% personal attention", img :Img3},
        {heading:"Study at your own pace", img :Img4},
        {heading:"One source for all  your doubts", img :Img5}, 
        {heading:"Step-by-step explanation.", img :Img6},
            ]

    let Mentor =[
        {name:"Priya Banerjee", subject:"Physics", College:"IIT Delhi", imgUrl:Mentor1 },
        {name:"Smita Patil", subject:"Physics", College:"IIT Bombay", imgUrl:Mentor2 },
        {name:"Gaurav Agarwal", subject:"Chemistry", College:"IIT Madras",imgUrl:Mentor3 },
        {name:"Ishita Sharma", subject:"Maths", College:"IIT Guhawati", imgUrl:Mentor4 },
        {name:"Gaurav Agarwal", subject:"Chemistry", College:"IIT Madras",imgUrl:Mentor3 },
        {name:"Priya Banerjee", subject:"Physics", College:"IIT Delhi", imgUrl:Mentor1 },
        {name:"Smita Patil", subject:"Physics", College:"IIT Bombay", imgUrl:Mentor2 },
        {name:"Ishita Sharma", subject:"Maths", College:"IIT Guhawati", imgUrl:Mentor4 },
    ]
     let people =[
         {image:img1, comment:"This was so quick and efficient,I am so glad I tried this out.",
           name:"Shaleen bansal", class:"12th standard student"},
          
           {image:img2, comment:"This was so quick and efficient,I am so glad I tried this out.",
           name:"Priya Banerjee", class:"12th standard student"},
     
           {image:img3, comment:"This was so quick and efficient,I am so glad I tried this out.",
           name:"Shaleen bansal", class:"12th standard student"},

           {image:img1, comment:"This was so quick and efficient,I am so glad I tried this out.",
           name:"Priya Banerjee", class:"12th standard student"}
         
     ]
    const breakPoints =[
        {width:500, itemsToShow:2},
        {width:768, itemsToShow:3},
        {width:1200, itemsToShow:4},
        
    ];
  return (
      <>
      {/* Why choose us  */}

    <div className="guide text-[#2E3249] font-bold text-3xl flex justify-center my-12">Why Choose Us?</div>
   
         <div className="grid grid-cols-1 md:grid md:grid-cols-3 w-[80vw] mx-auto gap-8"> 
        { Guide.map((e,i) =>{
            return <div key={i}  className="bg-slate-100  shadow-lg flex flex-col justify-center items-center" >
            
                <img src={e.img} alt=""/>
                <div className="font-semibold text-lg text-[#2E3249]">{e.heading}</div>
            </div>
        })}
        </div>


        {/* Mentors  */}
        
        <div className="mentor text-[#2E3249] font-bold text-3xl flex justify-center my-12">Meet Our Mentors</div>
        
             <Carousel   enableAutoPlay autoPlaySpeed ={3000} breakPoints={breakPoints}>
                { Mentor.map((e,i)=>{
                    return <div key={i} className="flex flex-col justify-center items-center">
                        <div><img src={e.imgUrl} alt=""/></div>
                        <div className="font-bold text-[#2E3249] text-lg mt-2">{e.name}</div>
                        <div className="font-semibold text-base text-[#68686B]">{e.subject}</div>
                        <div className="font-bold text-[#2E3249] text-base">{e.College}</div>
                    </div>
                })}
             </Carousel>
             
                {/* People Reviews  */}

             <div className=" text-[#2E3249] font-bold text-3xl flex justify-center mt-20">Get your answers instantly from them</div>

             <div className="flex justify-center"><button className="bg-[#075E54] flex space-x-2  mt-6  hover:bg-[#128C7E] rounded-md px-20 py-2"> <img src={Whatsapp} className="w-6" alt=""/><span className="text-white">TRY IT OUT</span></button></div>

             <div className=" text-[#2E3249] font-bold text-3xl flex justify-center mt-20 ">
                 What people are saying</div>   

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-8 ">
                  { people.map((e,i)=>{
                      return <div  key={i} className="flex flex-col px-6 shadow-2xl mt-24 mx-5 bg-slate-50">
                          <img  className="w-14 relative bottom-8" src={e.image} alt=""/>
                          <div className="font-medium text-base text-[#68686B] py-4">{e.comment}</div>
                          <div className="text-[#2E3249] font-bold py-4">{e.name}</div>
                          <div className="font-normal text-[#68686B] text-sm pb-4">{e.class}</div>
                      </div>
                  })}
              </div>
                 
                  </>
  )
     }
  


export default Mentee
