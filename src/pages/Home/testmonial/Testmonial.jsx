import React,{useRef,useState} from 'react'
import './testmonial.css'
import star from '../../../assets/Star.png'
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
    image:"/profile/sophia.jpg",
    content:"Apriapps completely transformed our app design into a modern, intuitive, and visually appealing experience that our clients immediately loved. Their attention to detail, user-focused approach, and creative solutions have significantly increased engagement and retention, making our platform more effective and enjoyable to use.",
    rating:4,
   },

   {
    name:"David K.",
    position:"Startup Founder",
    image:"/profile/david.jpg",
    content:"Working with Apriapps was seamless from start to finish. They enhanced both the look and functionality of our website, creating a professional, user-friendly platform that reflects our brand identity perfectly. The thoughtful design and smooth navigation have made a noticeable difference in client satisfaction and interaction.",
    rating:4,
   },

      {
    name:"Lina T.",
    position:"Marketing Director",
    image:"/profile/lisa.jpg",
    content:"Apriapps delivered innovative, visually stunning designs that are highly functional and user-centered. They listened to our feedback and suggested creative improvements, resulting in a platform that elevates our branding and usability. Their professionalism and expertise have helped our business stand out in a competitive market.",
    rating:4,
   },

   
      {
    name:"Julius R.",
    position:"Tech Entrepreneur",
    image:"/profile/officer.png",
    content:"Apriapps doesn't just create designs; they craft engaging digital experiences. By understanding our audience and brand story, they produced an intuitive, visually appealing app that keeps users engaged and encourages interaction. The positive feedback from our users highlights the effectiveness and quality of their work.",
    rating:4,
   },

];

const Testmonial = () => {
    const isMobile=useMediaQuery("(max-width:768px)");
    const [current, setCurrent] = useState(0);
    const total = testdata.length;

    const next = () => {
    setCurrent((prev) => (prev + 1) % total);
    };

    const prev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    };


  return (
    <div className='testmonial padding-space'>
        <div className="flex row w-100 t-header">
            <div className="column">
                <FadeText><Span title="Testmonials"/></FadeText>
                <FadeText><p className="title-bold-extra" >
                    Our Clients <br/>Speak for Us.
                </p></FadeText>
            </div>
            
            <FadeText>
                <div className="slide-holder flex">
                    <div className="slide-button prev" onClick={prev}>
                        <ArrowLeft  className='slide-arrow'/>
                    </div>
                    <div className="slide-button next"  onClick={next}>
                        <ArrowRight className='slide-arrow'/>
                    </div>
                </div>
            </FadeText>

        </div>

        <div className="main-card" >

            <div className="slider-track" style={{
                transform: `translateX(-${ isMobile?current * 100 :current*30}%)`, }}>
                {testdata.map((data,index)=>(
                    <div className="card-test" key={index}>
                            <div className="title-c">
                                <div className="img-pass">
                                    <img src={data.image} alt="" />
                                </div>
                                
                                <div className="names">
                                    <h4>{data.name}</h4>
                                    <h3>{data.position}</h3>
                                </div>
                            </div>
                            <p className='small-title'>{data.content}</p>
                            <div className="stars">        
                                {
                                Array.from({length:data.rating}).map((_,i)=>(
                                    <span key={i}><img src={star} alt=""/></span>
                                ))
                                }
                            </div>
                            <Quote className='test-icon' />
                            <div className="background-shadow"></div>
                        </div>
                    ))
                }
            </div>

        </div>       
    </div>
  )
}

export default Testmonial
