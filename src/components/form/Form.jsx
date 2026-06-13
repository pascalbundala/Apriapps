import React, {useState,useRef} from 'react';
import { Link } from "react-router-dom";
import './form.css';
import useMediaQuery from '../useMediaQuery';
import Button from '../../components/button/Button';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText,ScrollTrigger);


const Form = () => {

  const isMobile =useMediaQuery("(max-width:768px)");
  const formWrapper=useRef();
  const textRef=useRef();

  useGSAP(()=>{

    const split = SplitText.create(textRef.current, {
      type: "lines",mask: "lines"
    });

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:formWrapper.current,
        start:"top 60%",
        end:"top top",
        scrub:true,
        markers:false,
        },
      });

      tl.to(".image-c",{
        xPercent:-50,
        duration:6,
        ease:"none"
      })

        tl.from(split.lines, {
        yPercent: 100,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
      })
      .from(
        ".navigation-link",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "+=0.2" 
      );


    return () => split.revert();

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

            <Link to="/contact" className='navigation-link'>
              <Button text="start project" />
            </Link>

        </div>


      
    </div>
  )
}

export default Form
