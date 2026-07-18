import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from 'lenis/react';
import useMediaQuery from '../../../components/useMediaQuery';
import FadeText from "../../../components/FadeText";
import Span from "../../../components/span/span";
import './expection.css'
import values from '../../../data/whyus';
gsap.registerPlugin(useGSAP,ScrollTrigger);

const Expection = () => {
  const lenis = useLenis();
  const containerRef =useRef(null) 
  const stickyRef =useRef(null) 

  useGSAP(()=>{
    if (lenis){lenis.on("scroll", ScrollTrigger.update)}
      ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: stickyRef.current,
      scrub: true,
      markers:false,
    });

  },{scope:containerRef})


  const isMobile=useMediaQuery("(max-width:768px)");
  return (
        <div className="expection padding-space" ref={containerRef}>
          <div  className={`flex w-50 ex-intro space-between ${isMobile?"column":"column"}`} ref={stickyRef}>
             <Span title="Why choose us"/>  
              <h1 className="title-bold-extra">
              We Don't just build.<br/> we build what matters <br/>
            </h1>
            <p className="small-title" >
              We focus on features that actually make you money. If a feature doesn't solve a customer problem or save you time, we don't build it. Every line of code must earn its place.
            </p>
            <img src="/images/chess.png" alt="" />            
          </div>
          

          <div className="value-container">
            {values.map((value,id)=>{    
              const Img = value.img;
              return(
                  <FadeText key={id}>
                <div className="value">
                <div className="value-icon">
                  <Img className='icon-c' />
                  <h1 className="title-bold-extra">{value.numbers}</h1>
                </div>
                  <p className="title-bold">{value.title}</p>
                  <p className="small-title">{value.descr}</p>
                </div>
              </FadeText>
              )})}
          </div>

        </div>
  );
};

export default Expection;
