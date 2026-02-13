import React,{useRef,useState} from 'react'
import './testmonial.css'
import star from '../../../assets/Star.png'
import client from '../../../assets/client.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery from '../../../components/useMediaQuery';
import { ArrowLeft,ArrowRight } from 'lucide-react';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const testdata=[
    {
    name:"zulu funcu",
    position:"ceo zulufanco",
    image:client,
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    rating:4,
   },

   {
    name:"zulu funcu",
    position:"ceo zulufanco",
    image:client,
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    rating:4,
   },

      {
    name:"zulu funcu",
    position:"ceo zulufanco",
    image:client,
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    rating:4,
   },

   
      {
    name:"zulu funcu",
    position:"ceo zulufanco",
    image:client,
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    rating:4,
   },

];

const colors=[
  "#f4ebdeff",
  "#edededff",
]



const Testmonial = () => {
    
    const testmRef=useRef(null);
    const mainRef=useRef(null);
    const titleContent=useRef(null);
    const hundreadRef=useRef(null);
    const imageRef=useRef(null);
    const isMobile=useMediaQuery("(max-width:768px)");

    const [current, setCurrent] = useState(0);
    const total = testdata.length;

    const next = () => {
    setCurrent((prev) => (prev + 1) % total);
    };

    const prev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    };


    useGSAP(() => {
    const introElements = [
        titleContent.current,
        hundreadRef.current,
        imageRef.current,
    ].filter(Boolean);

    const cardElems = gsap.utils.toArray(".card-test");

    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: testmRef.current,
        start: "top 70%", 
        toggleActions: "play none none none",
        },
    });

    // Intro animations
    tl.from(introElements, {
        y:30,
        opacity:0,
        ease:"power2.in",
        duration: 0.8,
        stagger: 0.3,
    });

    // Cards reveal
    tl.from(cardElems, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.25,
        ease: "power3.out",
    });

    }, { scope: testmRef });

  return (
    <div className='testmonial' ref={testmRef}>
        <div className={`container-holder ${isMobile?"flex-column":"flex space-between"}`}>
          <p className="project-title"  ref={titleContent}>
            <span>Testmonial</span><br/>
                Trusted Worldwide by Growing Brands From startups to established enterprises,our clients share how our services elevate their success.
          </p>

            <div className="intro-div">
                <h4 ref={hundreadRef}>100+ reviews</h4>
                <img ref={imageRef} src="/images/google-mark.png" alt="" />
            </div>
        </div>

                <div className="slide-holder flex">
                    <div className="slide-button prev" onClick={prev}>
                            <ArrowLeft  className='slide-arrow'/>
                    </div>

                    <div className="slide-button next"  onClick={next}>
                            <ArrowRight className='slide-arrow'/>
                    </div>
                </div>

        <div className="main-card" ref={mainRef}>
            <div
            className="slider-track"
            style={{
                transform: `translateX(-${ isMobile?current * 100 :current*30}%)`,
            }}
            >
            {
                testdata.map((data,index)=>(
                  <div className="card-test" key={index}  style={{ background: colors[index % colors.length] }}>
                        <div className="title-c">
                            <img src={data.image} alt="" />
                            <div className="names">
                                <h4>{data.name}</h4>
                                <h3>{data.position}</h3>
                            </div>
                        </div>
                        <p>{data.content}</p>
                        <div className="stars">        
                            {
                            Array.from({length:data.rating}).map((_,i)=>(
                                <span key={i}><img src={star} alt=""/></span>
                            ))
                            }
                        </div>
                    </div>
                ))
            }

            </div>


        </div>       
    </div>
  )
}

export default Testmonial
