import React, { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FadeText = ({ children, className = "" }) => {
  const container = useRef();

  useGSAP(
    () => {
      const el = container.current;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 40,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        }
      );
    },
    { scope: container } 
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export default FadeText;