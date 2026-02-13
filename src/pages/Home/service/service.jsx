import React, {useState} from 'react';
import './service.css';
import { ArrowUpRight,Rocket,CodeXml ,Brush,Atom   } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useMediaQuery from '../../../components/useMediaQuery';

gsap.registerPlugin(ScrollTrigger);

const serviceList=[
    {
    icon:<Brush color='#28c1f4' size={42} strokeWidth={0.8} />,
    name: ["Brand","&Creative."],
    listitem:["brand Strategy","Visual Identity","UI&UX Design","Creative Direction"],
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae qui, temporibus, adipisci recusandae magni consequatur ab sunt tenetur aut deserunt",
    },

    {
    icon:<Atom color='#28c1f4' size={42} strokeWidth={0.8} />,
    name: ["Digital","Products."],
    listitem:["Website","SaaS & Platforms","E-commerce websites","Digital & dashboards"],
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae qui, temporibus, adipisci recusandae magni consequatur ab sunt tenetur aut deserunt",
    },

    {
    icon: <CodeXml color='#28c1f4' size={42} strokeWidth={0.8} />,  
    name: ["Software","Development."],
    listitem:["Web Application","Mobile Applications","APIs & Integration","Customs Systems"],
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae qui, temporibus, adipisci recusandae magni consequatur ab sunt tenetur aut deserunt",
    },

    {
    icon: <Rocket color='#28c1f4' size={42} strokeWidth={0.8} />,    
    name: ["SEO","Digital Marketing."],
    listitem:["Search Engine Optimization","Digital Marketing","Analytics & Performance"],
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae qui, temporibus, adipisci recusandae magni consequatur ab sunt tenetur aut deserunt",
    },
]

const Service = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const isMobile=useMediaQuery("(max-width: 768px)");

    useGSAP(()=>{
          gsap.from(".serviceItem",{
          y:-10,
          opacity:0,
          ease: "power3.out",
          duration:0.8,
          stagger: 0.25,
          scrollTrigger:{
            trigger:".service-list",
            start:"top 80%",
            end:"bottom 40%",
          }
          });
    },[]);


  return (
    <div className="service-section">

      <div className={`container-holder ${isMobile ? "flex-column " : "flex  space-between" } `}>
            <p className="project-title">
            <span>Services</span><br/>
            We help brands scale faster perform better  and stand out online.
            </p>
            <p className="small-title">Our expertise is deliberately focused. We stick to what we know because we know it better than most. These are the disciplines where we lead, innovate, and set the standard.
            </p>
        </div>

        <div className="service-list">
           {
             serviceList.map((service,index)=>(
                <div className="serviceItem"
                    key={index}   
                    onMouseEnter={() => setHoveredId(index)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <div className="noicon">
                        <h3>0{index+1}</h3>
                        <ArrowUpRight  size={32} strokeWidth={0.5}
                        color={hoveredId === index ? "#28c1f4" : "#ffffff"}
                        />
                    </div>

                    <div className="icons">
                        {/* {service.icon} */}
                    </div>

                    <h2>{service.name[0]} <br />{service.name[1]}</h2>
                    <p>{service.text}</p>
                    <ul>
                        {service.listitem.map((its, i) => (
                            <li key={i}>{its}</li>
                        ))}
                    </ul>
                </div>
             ))
           }
        </div>
    </div>
  )
}

export default Service
