import React, { useEffect, useRef } from 'react'
import './welcome.css'
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { ArrowUpRight } from 'lucide-react';
import useMediaQuery from '../../../components/useMediaQuery';

gsap.registerPlugin(ScrollTrigger, SplitText)

const Welcome = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const large = useRef(null)
  const small = useRef(null)
  const buttonReveal = useRef(null)
  const lenis = useLenis()

  useEffect(() => {
    document.fonts.ready.then(() => {

      if (lenis) {
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000)
        })
        gsap.ticker.lagSmoothing(0)
      }

      const splitWord = new SplitText(large.current, { type: "words" })
      const splitChar = new SplitText(small.current, { type: "chars" })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".welcomeintro",
          start: "100px 100%",
          end: "70% 60%",
          scrub: 0.5,
        },
      })

      tl.from(
        splitChar.chars,
        {
          opacity:0,
          stagger: 0.03,
          duration: 0.6,
          ease: "power3.out",
        },
        "+=0.4"
      )

      tl.fromTo(buttonReveal.current,
        {
          opacity:0,
        },{
          opacity:1,
        }
      )


      return () => tl.kill()

    })
  }, [lenis])

  return (
    <ReactLenis root options={{ smooth: true, lerp: 0.1 }}>
      <div className='welcomeintro'>

            <div
      className={`container-holder flex ${
        isMobile ? "mobile-layout" : "space-between"
      }`}
    ></div>


        <div className={`container-holder ${isMobile ? "flex-column " : "flex space-between" } `}>
          <p className="project-title">
            <span>About Us</span><br/><br/>
          </p>
        </div>

        <p ref={large} className='large-intro'>
          We create smart, scalable, and seamless tools to help you succeed in the modern digital world.
        </p>

        <p ref={small} className='text-intro'>
          We turn technology into opportunity. We are a forward-thinking IT and digital solutions company passionate about helping businesses grow, scale, and succeed in the modern digital world. From custom software development, web and mobile app design, to cloud systems and digital transformation, we deliver smart, seamless, and scalable solutions that drive real impact.
        </p>

        <div className="center flex">
          <div className='cta-button' ref={buttonReveal}>
            <ArrowUpRight  size={32} strokeWidth={0.5} className="arrow-icon" />
            <a href="#">About Us</a>
          </div>
        </div>

      </div>
    </ReactLenis>
  )
}

export default Welcome
