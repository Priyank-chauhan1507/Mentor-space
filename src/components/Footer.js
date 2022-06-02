import React from 'react'
import location from '../Images/footer/location.png'
import msg from '../Images/footer/msg.png'
import phone from '../Images/footer/phone.png'
const Footer = () => {
  return (
    <div className="flex justify-evenly  gap-2 bg-[#EBF6F9] mt-10 py-14 ">
      <div className="about flex flex-col">
       <div className="font-bold text-xl text-[#2E3249]">About Us</div>
       <div className="font-medium text-sm my-8 text-[#68686B] ">Mentor Space is a self-study<br/> platform that helps students of classes<br/> 8-12 connect instantly with expert mentors <br/>through a 1 on 1 video call.</div> 
              <div className="font-light text-xs mt-14">Copyright © 2022 Grow90.org</div>
       </div>
      <div className="contact flex flex-col gap-y-5">
      <div className="font-bold text-xl text-[#2E3249]">Contact Us</div>
      <div className="flex gap-x-3"> <img src={location} alt=""/><span className="font-medium text-base text-[#68686B]">Bangalore - 560066</span></div>
      <div className="flex gap-x-3"> <img src={phone} alt=""/><span className="font-medium text-base text-[#68686B]">+91 91488 12500</span></div>
      <div className="flex gap-x-3"> <img src={msg} alt=""/><span className="font-medium text-base text-[#68686B]">mailus@learnspace.app</span></div>
      </div>

      <div className="links  flex flex-col gap-y-4">
      <div className="font-bold text-xl text-[#2E3249]"> Quick Links</div>
      <div className="font-medium text-base text-[#68686B]">Team</div>
      <div className="font-medium text-base text-[#68686B]">Become a mentor</div>
      <div className="font-medium text-base text-[#68686B]">Linkedin</div>
      <div className="font-medium text-base text-[#68686B]">Whatsapp Group</div>
      </div>

      <div className="legal flex flex-col gap-y-4">
      <div className="font-bold text-xl text-[#2E3249]">Legal</div>
      <div className="font-medium text-base text-[#68686B]">Terms of use</div>

      <div className="font-medium text-base text-[#68686B]">Privacy Policy </div>
      </div> 
      
    </div>
  )
}

export default Footer
