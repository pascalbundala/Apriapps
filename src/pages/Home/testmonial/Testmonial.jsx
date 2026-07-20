import React,{useRef} from 'react'
import './testmonial.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft,ArrowRight,Quote} from 'lucide-react';
import FadeText from '../../../components/FadeText';
import Span from '../../../components/span/span';
import testdata from '../../../data/testmonial';

gsap.registerPlugin(useGSAP,ScrollTrigger);
const Testmonial = () => {
const containerRef = useRef();
const cardsRef = useRef([]);
const index = useRef(0);
const animating = useRef(false);

useGSAP(() => {
    const cards = cardsRef.current;
    gsap.set(cards,{
        opacity:0,
        y:0,
        scale:0.95,
        zIndex:0
    });

    gsap.set(cards[0],{
        opacity:1,
        y:0,
        scale:1,
        zIndex:10
    });

}, {scope:containerRef});

  const changeCard = (direction)=>{

    if(animating.current) return;

    animating.current=true;

    const cards = cardsRef.current;

    const current = index.current;

    const nextIndex = gsap.utils.wrap(
        0,
        cards.length,
        current + direction
    );


    const currentCard = cards[current];
    const nextCard = cards[nextIndex];


    // Put next card above current card
    gsap.set(nextCard,{
        opacity:1,
        zIndex:20,
        y:direction === 1 ? 80 : -80,
        scale:0.95
    });


    const tl = gsap.timeline({

        onComplete:()=>{
            gsap.set(currentCard,{
                opacity:0,
                zIndex:0,
                y:0
            });


            index.current = nextIndex;
            animating.current=false;
        }

    });


    tl.to(currentCard,{
        opacity:0,
        y:direction === 1 ? -40 : 40,
        scale:0.95,
        duration:0.4,
        ease:"power2.in"
    });


    tl.to(nextCard,{
        y:0,
        scale:1,
        duration:0.4,
        ease:"power3.out"
    },"<");

};
  return (
    <div className='testmonial' ref={containerRef}>
        <div className="title-test padding-space">
            <FadeText><Span title="success stories"/></FadeText>
            <FadeText>
              <p className="larger-h1">Turning ideas into<br /> Success Stories.</p>
            </FadeText>

            <FadeText>
                <p className="small-title">
                    We partner with ambitious businesses to transform innovative ideas into high-performing digital solutions. See how our expertise has helped clients achieve meaningful growth and lasting success.
                </p>
            </FadeText>
        </div>
        <div className="main-card ">
            <div className="testmonials">
                    {testdata.map((data,index)=>(
                      <div className="testmonial-slide" 
                        key={index} ref={(el)=>cardsRef.current[index]=el}>
                          <Quote className='qoute'/>
                            <div className="test-intro">
                                <h3>{data.officename}</h3>
                            </div>
                            <p className='testmonial-text'>
                                {data.content}
                            </p>
                            <div className="names">
                                <img src={data.img} alt={data.name} />
                                <div className="flex column">
                                    <h4>{data.name}</h4>
                                    <h3>{data.position}</h3>
                                </div>
                            </div> 
                        </div>
                    ))}
            </div>

            <div className="controller">
                <div className="slide-button" onClick={()=>{
                      changeCard(-1);
                  }}>
                    <ArrowLeft  className='slide-arrow'/>
                </div>
                <div className="slide-button" onClick={()=>{
                      changeCard(1);
                  }}>
                    <ArrowRight className='slide-arrow'/>
                </div>
            </div>

            <p className="small-title">
                Click the controls to explore more reviews.
            </p>

            <div className="slider-image" >
                {testdata.map((data,index)=>(
                    <img key={index} src={data.img} alt={data.name} />
                    ))
                }
            </div>
        </div>
    </div>   
  )
}

export default Testmonial
