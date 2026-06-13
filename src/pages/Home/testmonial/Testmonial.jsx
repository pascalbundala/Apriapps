import React,{useRef,useState,useEffect} from 'react'
import './testmonial.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery from '../../../components/useMediaQuery';
import { ArrowLeft,ArrowRight,Quote} from 'lucide-react';
import FadeText from '../../../components/FadeText';
import Span from '../../../components/span/span';


gsap.registerPlugin(useGSAP,ScrollTrigger);

const testdata=[
    {
    name:"Sophia M.",
    position:"Product Manager",
    content:"Apriapps completely transformed our app design into a modern, intuitive, and visually appealing experience that our clients immediately loved. Their attention to detail, user-focused approach, and creative solutions have significantly increased engagement and retention, making our platform more effective and enjoyable to use.",
   },

   {
    name:"David K.",
    position:"Startup Founder",
    content:"Working with Apriapps was seamless from start to finish. They enhanced both the look and functionality of our website, creating a professional, user-friendly platform that reflects our brand identity perfectly. The thoughtful design and smooth navigation have made a noticeable difference in client satisfaction and interaction.",
   },

      {
    name:"Lina T.",
    position:"Marketing Director",
    content:"Apriapps delivered innovative, visually stunning designs that are highly functional and user-centered. They listened to our feedback and suggested creative improvements, resulting in a platform that elevates our branding and usability. Their professionalism and expertise have helped our business stand out in a competitive market.",
   },

   
      {
    name:"Julius R.",
    position:"Tech Entrepreneur",
    content:"Apriapps doesn't just create designs; they craft engaging digital experiences. By understanding our audience and brand story, they produced an intuitive, visually appealing app that keeps users engaged and encourages interaction. The positive feedback from our users highlights the effectiveness and quality of their work.",
   },

];

const Testmonial = () => {
    const isMobile=useMediaQuery("(max-width:768px)");
    const [current, setCurrent] = useState(0);
    const total = testdata.length;

    const wrapperRef = useRef();
    const slidesRef = useRef();
    const progressRef=useRef(); 

    const next = () => {
    setCurrent((prev) => (prev + 1) % total);
    };

    const prev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    useGSAP(() => {
    const slideHeight = wrapperRef.current.offsetHeight;

    const tl = gsap.timeline({repeat: -1 });

    gsap.to(slidesRef.current, {
        y: -(current * slideHeight),
        duration: 0.8,
        ease: "power3.inOut",
    });

    tl.fromTo(progressRef.current,
        { width: "0%" },
        {
            width: "100%",
            duration: 5,
            ease: "none",
            onComplete: () => {
                setCurrent(prev =>
                    (prev + 1) % testdata.length
                );
            }
        }
    );

    return () => tl.kill();


    }, [current]);


  return (
    <div className='testmonial padding-space'>
        <div className="flex row w-100 t-header">
            <div className="column">
                <FadeText><Span title="Testmonials"/></FadeText>
                <FadeText><p className="title-bold-extra" >
                    Our Clients <br/>Speak for Us.
                </p></FadeText>
            </div>
        </div>

        <div className="main-card" >
               
                    <div className="card-test"  >
                            <div className="slider" >
                                <div className="progress-container">
                                    <div className="progress-line" ref={progressRef}></div>
                                </div>

                                <div className="controller flex row space-between">
                                    <div className="slide-holder">
                                        <div className="slide-button" onClick={prev}>
                                            <ArrowLeft  className='slide-arrow'/>
                                        </div>
                                        <div className="slide-button"  onClick={next}>
                                            <ArrowRight className='slide-arrow'/>
                                        </div>
                                    </div>
                                    <div className="numbers">{current+1}/{testdata.length}</div>
                                </div>
                            </div>

                            <Quote className='quote'></Quote>

                            <div className="slide-wrapper" ref={wrapperRef}>
                                <div className="slide-track" ref={slidesRef}>
                                    {testdata.map((data,index)=>(
                                        <div className="slides" key={index} >
                                            <div className="names">
                                                <div className="flex column">
                                                    <h4>{data.name}</h4>
                                                    <h3>{data.position}</h3>
                                                </div>
                                            </div>
                                            <p className='testmonial-text'>
                                                {data.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                     </div>
            </div>
        </div>   
  )
}

export default Testmonial
