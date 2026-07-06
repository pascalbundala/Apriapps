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
import Partner from '../partner/Partner';



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
            opacity: 0.15,
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
    
  return (
    <>
      <div className='welcomeintro padding-space' ref={containerWelcome} > 
        <div className="container-holder flex row space-between">
            <FadeText>< Span title="Our Studio"/></FadeText>
            <FadeText>< Span title="Est 2019"/></FadeText>
        </div>


        <div className="intro-container">
          <div className="w-intro">
              <FadeText>
                <p className='title-bold-extra' ref={welcomeText}>
                  We transform technology into growth by delivering smart digital solutions.From custom software,web and mobile apps to cloud systems that help businesses succeed in the modern digital world.
              </p>
            </FadeText>

             <FadeText>
              <div className="myself">
                <img src="/profile/pascalbundala.jpg" alt="" />
                <div className="flex column">
                   <h3>pascal bundala</h3>
                   <h3>Founder & CEO</h3>
                </div>
              </div>
            </FadeText>

            <div className="logopartners">
              <Partner/>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Welcome
