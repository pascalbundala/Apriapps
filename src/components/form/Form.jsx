import React, {useState,useRef} from 'react';
import { Link } from "react-router-dom";
import './form.css';
import useMediaQuery from '../useMediaQuery';
import {useContact} from "../../context/contactContext"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText,ScrollTrigger);


const Form = () => {
  const { openContact } = useContact();
  const isMobile =useMediaQuery("(max-width:768px)");
  const formWrapper=useRef();
  const contactRef=useRef();
  const textRef=useRef();

  useGSAP(()=>{
    const init = async () => {
      await document.fonts.ready;
      const split = SplitText.create(textRef.current, {
      type: "lines",mask: "lines"
    });

    const tl = gsap.timeline({
    scrollTrigger:{
      trigger:formWrapper.current,
      start:"top 70%",
      end:"top top",
      scrub:true,
      markers:false,
      },
    });

      tl.from(split.lines, {
      yPercent: 100,
      duration: 1,
      stagger: 0.08,
      ease: "power4.out",
    })
    .from(
      contactRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "+=0.2" 
    );
  return () => split.revert();
    } 
    init();

  },{scope:formWrapper});


  return (
    <div className='form' ref={formWrapper} >
        <div className="image-c">
          <img src="/office/office-code.jpg" alt="" />
        </div>
        <div className="form-link">
          <p className="larger-h1" ref={textRef}>
            Ready to create your next project.
          </p>
          <button onClick={openContact} className="button-cta" ref={contactRef}>
            Start project
          </button>
        </div>
    </div>
  )
}

export default Form
