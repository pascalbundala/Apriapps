import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import './welcome.css'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import Span from '../../../components/span/span';
import Button from '../../../components/button/Button';
import FadeText from '../../../components/FadeText';


gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother,SplitText);

const Welcome = () => {
  const containerWelcome = useRef();
  const welcomeText  = useRef();

    useGSAP(
    () => {
      if (!containerWelcome.current || !welcomeText.current) return;

      const init = async () => {
        await document.fonts.ready;
        const split = new SplitText(welcomeText.current, {
          type: "words",
          wordsClass: "word"
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: welcomeText.current,
            start: "top 80%",
            end: "bottom center",
            pin: false,
            scrub: true,
            markers: false
          }
        });

        tl.from(
          split.words,
          {
            opacity: 0.1,
            stagger: 0.1
          },
          0.1
        );
        ScrollTrigger.refresh();
      };

      init();
    },
    { scope: containerWelcome }
  );
    
{/* <span className='span-highlight'>growth</span> 
<span className='span-highlight'>digital solutions.</span> */}

  return (
    <>
      <div className='welcomeintro padding-space' ref={containerWelcome} > 
        <FadeText>< Span title="Our Studio"/></FadeText>
          <p className='title-bold-extra' ref={welcomeText}>
            We transform technology into growth by delivering smart digital solutions. from custom software,web and mobile apps to cloud systems that help businesses succeed in the modern digital world.
          </p>
            
          <Link to="/about" className='navigation-link'>
           <Button text="Agency" />
          </Link>

      </div>
    </>
  )
}

export default Welcome
