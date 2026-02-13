import React, { useEffect, useRef} from 'react'
import './hero.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery from "../../../components/useMediaQuery";
import { BrightnessContrastShader } from 'three/examples/jsm/Addons.js';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const simpleService=["Branding","websites","mobile apps","web apps","digital solutions"]

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isLarge = useMediaQuery("(max-width: 1920px)");

  const heroSection = useRef(null);
  const splitContainer = useRef(null);
  const splitImage = useRef([]);


  useGSAP(
    isMobile?

        () => {
          const images = splitImage.current;
          const centerIndex = Math.floor(images.length / 2);
          const centerImage = images[centerIndex];
          // Get center position
          const centerRect = centerImage.getBoundingClientRect();

          gsap.to(images, {
            x: (i, el) => {
              if (i === centerIndex) return 0;

              const rect = el.getBoundingClientRect();
              return centerRect.left - rect.left;
            },
            y: (i, el) => {
              if (i === centerIndex) return 0;

              const rect = el.getBoundingClientRect();
              return centerRect.top - rect.top;
            },
            scale: (i) => (i === centerIndex ? 1.15 : 0),
            opacity: (i) => (i === centerIndex ? 1 : 0),
              scrollTrigger: {
              trigger: splitContainer.current,
              start: "top 40%",
              end:"top 20%",
              scrub:1,
              markers:false,
            }
          });
        }
    :
    () => {
      const items = splitImage.current;
      const centerIndex = Math.floor(items.length / 2);
      items.forEach((item, i) => {
        item.style.zIndex = items.length - i;
      });

      gsap.to(items, {
        x: (i) =>
          i < centerIndex
            ?-200 * (centerIndex - i)
            : 200 * (i - centerIndex),
        scale: (i) => {
              const distance = Math.abs(i - centerIndex);
              return Math.max(0.7, 1.30 - distance * 0.2);
            },
        rotation: (i) => (i < centerIndex ? -360 : 360),
        opacity: 1,
        stagger: 0.1,
        duration:1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: splitContainer.current,
          start: "top 50%",
          end: "bottom 40%",
          scrub: true,
          markers:false,
        },
      });
  },[]);


  return (

    <div className='hero-section'  ref={heroSection}>
          <div className="background-container">
             <div className="background-blur"></div>
             <div className="background-blur"></div>
          </div>
          <div className="background-container-2">
             <div className="background-blur2"></div>
          </div>

        <div className='hero'>
            <div className="xh2"><h2>We create <span>digital experience</span><br /> for your brands.</h2></div>
            <div className="hero-title">
                   {
                    simpleService.map((simple,index)=>(
                      <p className='herotitle' key={index}>{simple}</p>
                    ))
                   }
            </div> 
        </div>

        <div className="scatter-container" ref={splitContainer}>
          {[1, 2, 3,4,5].map((_, index) => (
            <img
              className="scatter-item"
              key={index}
              ref={(el) => (splitImage.current[index] = el)}
              src="/src/assets/split-image.jpg"
              alt=""
            />
          ))}
        </div>
    </div>
  )
}

export default Hero
