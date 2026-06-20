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
gsap.registerPlugin(ScrollTrigger,SplitText,useGSAP);

const serviceList=[
    {
    image:"/services/branding.jpg",  
    name: ["Brand","& Creative."],
    listitem:["brand Strategy","Visual Identity","Creative Direction"],
    text:"We create strategic and visually compelling brand experiences that help businesses stand out. By combining design, strategy, and modern trends, we build brands that are clear, consistent, and impactful ensuring a strong identity and a professional presence across all platforms.",
    },

    {
    image:"/services/design.jpg",  
    name: ["Design."],
    listitem:["User Interfaces design","User Experiences Design","Wireframes and prototypes"],
    text:"We design clean, modern, and visually engaging interfaces that enhance usability and user satisfaction.Our approach focuses on intuitive navigation, seamless user experience (UX), and conversion-driven design,leading to higher engagement and business growth.",
    },

    {
    image:"/services/websites.jpg",     
    name: ["Websites."],
    listitem:["Business and corporate websites","Landing pages and portfolios","responsiveness"],
    text:"We build reliable, secure, and scalable digital products tailored to your business needs.Our solutions are designed for high performance, seamless user experience, and long-term growth. we ensure flexibility, efficiency, and easy integration with your existing systems.",
    },

    {
    image:"/services/development.jpg",     
    name: ["Custom software."],
    listitem:["Custom softwares","Android apps","iOS apps","Web apps","dashboard"],
    text:"We build reliable, secure, and scalable digital products tailored to your business needs,Using modern technologies and best practices, we deliver high-performance solutions that grow with your business.Our focus is on efficiency, flexibility, and long-term value to support your success in a competitive digital landscape.",
    },
    {
    image:"/services/marketing.jpg",     
    name: ["Digital","Marketing."],
    listitem:["SEO","Social Media","Advertising","Marketing Strategy"],
    text:"We help businesses grow and reach the right audience by turning online attention into real customers. Using data-driven strategies, creative campaigns, and modern digital marketing tools, we increase visibility, generate leads, and drive measurable growth.ensuring maximum impact in a competitive digital landscape.",
    },
]

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
