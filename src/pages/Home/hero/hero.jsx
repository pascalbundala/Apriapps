import React, { useState, useEffect,useRef } from 'react';
import './hero.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);
import useMediaQuery from '../../../components/useMediaQuery';
import FadeText from '../../../components/FadeText'


const Hero = () => {
  const containerHero=useRef(null);
  const isMobile=useMediaQuery("(max-width:768px)");

  // useGSAP(()=>{
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".video-c",
  //         start:isMobile? "top 30%" :"top 30%",
  //         end:isMobile? "bottom 20%" :"bottom top",
  //         scrub: true,
  //         pin: true,
  //         invalidateOnRefresh: true,
  //         markers: false
  //       },
  //     })

  //   .to(".background-video", { autoAlpha:1,width: "100vw", height: isMobile ? "50vh" : "90vh", ease: "none" })
  //   .to(".video-c",{width:"50%",autoAlpha:1});
    
  //   },
  // {scope: containerHero});

  return (

    <div className="hero flex column padding-space " ref={containerHero}>

      <FadeText>
        <h1 className="larger-h1">
          We  Built <br/>Digital Solutions.
      </h1></FadeText>


      <FadeText>
        <p className="small-title">
         Build your premium experience online, where innovation meets excellence and results speak louder.
      </p></FadeText>

{/* 
      <div className="center-horizontal details">
            <p className='title-bold-extra'>
                Apriapps is a results-driven digital agency delivering precise, tailored solutions that help businesses achieve measurable growth. We create bespoke websites that not only look exceptional but also generate enquiries and drive real business impact.
            </p>

            <div className="video-c">
               <video autoPlay muted loop playsInline className="background-video">
                  <source src="/billboard.mp4" type="video/mp4"/>
               </video>
            </div>
      </div> */}
      {/* <div className="spacer-hero"></div> */}
    </div>

  )
}

export default Hero
