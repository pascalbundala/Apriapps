import React, { useRef } from 'react';
import './largeimg.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP,SplitText,ScrollTrigger);

const Largeimg = () => {
  const containerImage = useRef(null);
  const textRef = useRef(null);
  const largeText = useRef(null);

  useGSAP( async () => {
    await document.fonts.ready;
    const split = new SplitText(textRef.current, { type: "words" });
     const directions = split.words.map(() => ({
      x: gsap.utils.random(-80, 80),
      y: gsap.utils.random(-80, 80),
      rotate: gsap.utils.random(-25, 25),
    }));

  const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 50%",
        end: "bottom 40%",
        scrub: 1,
        markers: false,
      },
    });
  
   textTimeline.from(split.words, {
      opacity: 0,
      x: (i) => directions[i].x,
      y: (i) => directions[i].y,
      rotate: (i) => directions[i].rotate,
      stagger: 0.2,
      ease: "none",      
    });

  }, { scope: containerImage });

  return (
    <div className="large" ref={containerImage}>
        <div className='text-large' ref={largeText}>
            <p ref={textRef}> WE ARE AUTHENTIC. <br/>WE  PROVIDE  RELIABLE  PRODUCTS.<br/>WE CREATE GROWTH.
            </p>
        </div>
    </div>
  );
};

export default Largeimg;
