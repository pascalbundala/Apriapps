import React, {useRef} from 'react'
import './officer.css'
import users from '../../../assets/officer.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";



const Officer = () => {

  const officerContainer=useRef(null);
  const officerDetail =useRef(null);
  const officerWord =useRef(null);

  useGSAP(()=>{
        
    const offData=[officerDetail.current,officerWord.current].filter(Boolean);

    gsap.from(offData,{
      y:60,
      opacity:0,
      duration:0.50,
      ease:"none",
      scrollTrigger:{
        trigger:officerContainer.current,
        start:"top 70%",
        end:"bottom 60%",
        markers:false,
      }
    });

      },
  {scope:officerContainer.current});


  return (
    <div className='officer' ref={officerContainer}>
        <div className="officer-details" ref={officerDetail}>
            <img src={users} alt="" />
            <div className="officer-data">
                <h3>Aman Gologwa</h3>
                <h4>Cto</h4>
            </div>
        </div>

        <div className="speech">
            <p ref={officerWord}>“Welcome to the world best 
    agency to help you growth your business”</p>
        </div>
    </div>
  )
}

export default Officer
