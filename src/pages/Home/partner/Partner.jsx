import React,{useRef} from 'react'
import './partner.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery from '../../../components/useMediaQuery';

const logos=[
            {logo:"/images/loblaws.svg"},
            {logo:"/images/nationalbank.svg"},
            {logo:"/images/kurlon.svg"},
            {logo:"/images/nagad.svg"},
            {logo:"/images/fortnite.svg"},
            {logo:"/images/roblox.svg"},
            {logo:"/images/jsw.svg"},
            {logo:"/images/rekkit.svg"},
           ];


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
