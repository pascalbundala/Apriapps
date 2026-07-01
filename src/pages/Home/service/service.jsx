import React, {useState,useRef} from 'react';
import './service.css';
import { ArrowUpRight,Rocket,CodeXml ,Brush,Atom   } from 'lucide-react';
import useMediaQuery from '../../../components/useMediaQuery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Span from '../../../components/span/span';
import FadeText from '../../../components/FadeText';
import { useLenis } from "lenis/react"
import serviceList from '../../../data/serviceList';
gsap.registerPlugin(ScrollTrigger,SplitText,useGSAP);


const Service = () => {
  const isMobile=useMediaQuery("(max-width:768px)");
  const serviceListRef=useRef(null);
  const serviceContainer=useRef(null);
  const lenis = useLenis() 
  const cardWidth = 70;
  const gap = 5

    useGSAP(()=>{
      if (lenis){lenis.on("scroll", ScrollTrigger.update)}
      const serviceCard=gsap.utils.toArray(".service-item");
      serviceCard.forEach((card,i)=>{
        gsap.to(card,{
          x: -(window.innerWidth / 10) + (i * (cardWidth + gap)),
          ease:"none",
          duration:0.1,
          y: i * 5,          
          scrollTrigger:{
            trigger:card,
            start: () => {
              return "top " + (3 + i * 3) + "%";
            },
            endTrigger: ".service-list",
            end:"bottom 0%",
            scrub:true,
            pin:true,
            pinSpacing:false,
            invalidateOnRefresh:true,
            markers:false,
          }
        }
        )
      })},{scope:serviceContainer}
  )

  return (
    <div className="service-section" ref={serviceContainer}>
          <div className={`flex padding-space space-between ${isMobile?"column":"row"}`}>
                <div className="row">
                   <FadeText>< Span title="services"/></FadeText>
                   <FadeText> 
                        <h1 className="title-bold-extra">
                        Each card is built<br/>to drive your digital <br/> <span className="span-highlight">growth.</span>
                      </h1>
                    </FadeText>
                </div>
          </div>

          <div className="service-list" ref={serviceListRef}>
            {
              serviceList.map((service,index)=>( 
                <div className="service-item" key={index}>
                      <div className="x-item padding-space">
                          <h2 key={index}>
                            {service.name[0]} &nbsp;
                            {service.name[1]}
                          </h2>
                          <p>{service.text}</p>
                        <ul>
                          {service.listitem.map((its, i) => (
                              <li key={i}>{its}</li>
                          ))}
                        </ul>
                      </div>
                      <img src={service.image} alt="" />
                </div> 
              ))
            }
          </div>

          <div className="spacer-trigger">
          </div>
    </div>
  )
}

export default Service
