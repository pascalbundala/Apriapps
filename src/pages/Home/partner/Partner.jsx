import React,{useRef} from 'react'
import './partner.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery from '../../../components/useMediaQuery';

const logos=[
            {logo:"/images/fanta.png"},
            {logo:"/images/fanta.png"},
            {logo:"/images/fanta.png"},
            {logo:"/images/fanta.png"},
            {logo:"/images/fanta.png"},
            {logo:"/images/fanta.png"},
           ];


gsap.registerPlugin(useGSAP,ScrollTrigger);
const Partner = () => {
  const parterContainer=useRef(null);
  const partnerInto=useRef(null);
  const wrapperRef=useRef(null);
  const trackRef=useRef(null);
  const isMobile =useMediaQuery("(max-width:768px)");

  useGSAP(()=>{
      
        gsap.from(partnerInto.current,{
          y:30,
          opacity:0,
          ease:"power2.in",
          duration:1,
            scrollTrigger: {
            trigger: parterContainer.current,
            start: "top 70%", 
            toggleActions: "play none none none",
            markers:false
            },
        });

        const wrapper = wrapperRef.current;
        const track = trackRef.current;
        const clone = track.cloneNode(true);
        wrapper.appendChild(clone);
        const totalWidth = track.offsetWidth;

        gsap.to(wrapper, {
          x: -totalWidth,
          duration: 12,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((value) => value % totalWidth),
          },
        });


  },{scope:parterContainer});

  return (
      <div className="partner" ref={parterContainer}>

        <div className={`container-holder ${isMobile?"flex-column":"flex space-between"}`}>
            <p className="project-title" ref={partnerInto}>
            <span>Partner</span><br/>
              Trusted by teams at every stage startups, scale-ups, and seasoned giants.
            </p>
        </div>

        <div className="logos-container">
          <div className="logos-fader">
                  <div className="logos-wrapper" ref={wrapperRef}>
                  <div className="logos-track" ref={trackRef}>
                    {logos.map((logo,i)=>(
                      <div className="box" key={i}>
                          <img src={logo.logo} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
          </div>
        </div>
      </div>
  )
}

export default Partner
