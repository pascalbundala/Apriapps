import React,{useRef} from 'react'
import './partner.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery from '../../../components/useMediaQuery';
import logos from '../../../data/logos';

gsap.registerPlugin(useGSAP,ScrollTrigger);
const Partner = () => {
  return (
      <div className="partner">
        <div className="logos-container ">
          <div className="logos-fader">
                  <div className="logos-wrapper" >
                  <div className="logos-track">
                    {[...logos, ...logos].map((logo,i)=>(
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
