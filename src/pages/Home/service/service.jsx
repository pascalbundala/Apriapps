import React, {useState,useRef} from 'react';
import { Link } from "react-router-dom";
import './service.css';
import { ArrowUpRight} from 'lucide-react';
import useMediaQuery from '../../../components/useMediaQuery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useLenis } from "lenis/react"
import serviceList from '../../../data/serviceList';
gsap.registerPlugin(ScrollTrigger,SplitText,useGSAP);


const Service = () => {
  const isMobile=useMediaQuery("(max-width:768px)");
  const serviceListRef=useRef(null);
  const serviceContainer=useRef(null);
  const titleRef=useRef(null)
  const lenis = useLenis() 


    useGSAP(()=>{
      if (lenis){lenis.on("scroll", ScrollTrigger.update)}
      
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top -100px",
        endTrigger: serviceContainer.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        markers: false,
      });

      const serviceCard=gsap.utils.toArray(".service-item");
      serviceCard.forEach((card,i)=>{
        gsap.to(card,{
          ease:"none",
          duration:0.1,
           scale: 0.85 + i * 0.05,
          scrollTrigger:{
            trigger:card,
            start: () => {
              return "top " + (3 + i * 5) + "%";
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

          <div className="service-title" ref={titleRef}>
                  <h1 className="larger-h1">
                  our <br/>services.
                </h1>

                <p className="small-title">
                  Our services combine technology, creativity, and strategy to deliver digital solutions that elevate brands, improve efficiency, and create meaningful user experiences.
                </p>
          </div>
        

          <div className="service-list" ref={serviceListRef}>
            {
              serviceList.map((service,index)=>( 
                <div className="service-item "  key={index}>
                      <div className="x-item">
                          <h3>{index+1}</h3>
                          <h2 key={index}>
                            {service.name}
                          </h2>
                          <p>{service.text}</p>
                        <ul>
                          {service.listitem.map((its, i) => (
                              <li key={i}>{its}</li>
                          ))}
                        </ul>
                        <Link className='linkTo' to={`/service/#${service.slug}`}>
                         <h4>Discover more</h4>
                         <ArrowUpRight strokeWidth={0.9} />
                       </Link>
                      </div>
                      <img src={service.image} alt={service.name} />
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
