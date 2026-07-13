import React, { useState,useRef } from 'react';
import './faq.css';
import faqData from '../../../data/faq';
import { Link } from "react-router-dom";
import { useContact } from '../../../context/contactContext';
import FadeText from '../../../components/FadeText';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);


const Faq = () => {
  const { openContact } = useContact();
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const lenis = useLenis() 
  const containerRef=useRef(null);
  const faqContainerRef=useRef(null);

  useGSAP(()=>{
    if (lenis){lenis.on("scroll", ScrollTrigger.update)}
    const faqblock=gsap.utils.toArray(".faqblock");
    gsap.from(faqblock, {
        opacity: 0,
        y: 40,
        scale:0.6,
        duration: 0.1,
        stagger: 0.01, 
        ease: "power3.out",
        scrollTrigger:{
            trigger:faqContainerRef.current,
            start:"top 90%",
            scrub:true,
            markers:false
        }
      });
      },{scope:containerRef})


  return (
    <div className='faq padding-space' ref={containerRef}>
        <div className="service-title">
            <FadeText>
               <h1 className="larger-h1">faq.</h1>
            </FadeText>
            <FadeText>
                <p className="small-title">
                    Find quick answers to the questions we hear most often. Whether you're curious about our services, timelines, or how we work, this section is here to provide the information you need before getting started.
                </p>
            </FadeText>

            <FadeText>
                <div className="img-x">
                    <img src="/profile/pascalbundala.jpg" alt="pascal profile" />
                    <Link className='linkTo' onClick={openContact}>
                    <h4>More questions</h4>
                    <ArrowUpRight className='lc-icon'/>
                    </Link>
                </div>
            </FadeText>
        </div>

        <div className="flex row faqsection" ref={faqContainerRef}>
           {
            faqData.map((faq,index)=>(
                <div className="faqblock" key={index}>
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                        <p className='small-title'>{faq.qn}</p>
                        <span  onClick={() => toggleFAQ(index)} >{activeIndex === index ? "-" : "+"}</span>
                    </div>

                    <div
                        className={`faq-answer ${
                            activeIndex === index ? "show" : ""
                        }`}
                        >
                        <p className='small-title'>{faq.answer}</p>
                    </div>                   
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Faq
