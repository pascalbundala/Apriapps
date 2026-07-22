import React, { useRef } from "react";
import "./workingsteps.css";
import steps from "../../data/workingsteps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
gsap.registerPlugin(ScrollTrigger);

const WorkingSteps = () => {
  const container = useRef();
  const lenis=useLenis();

  useGSAP(() => {
    if (lenis){lenis.on("scroll", ScrollTrigger.update)}
    const cards = gsap.utils.toArray(".listing-process");
    cards.forEach((card, i) => {
        gsap.to(card,{
            ease:"none",
            duration:0.1,
            scrollTrigger:{
                trigger:card,
                start:"top 20%",
                endTrigger:".spacer-list",
                end:"top 81%",
                scrub:true,
                pin:true,
                pinSpacing:false,
                invalidateOnRefresh:true,
                markers:false,
            }})});},
    { scope: container });

  return (
    <div className="how-we-work padding-space" ref={container}>
        {steps.map((step, index) => (
          <div key={index} className="listing-process">
            <h1> step-{index + 1}</h1>
            <div className="step-cont">
                <h3>{step.stepname}</h3>
                <div className="list-pr">
                  {step.steplist.map((stp, i) => (
                    <p key={i}>{stp}</p>
                  ))}
                </div>
                <p className="small-title">{step.text}</p>
            </div>
            <div className="step-img">
              {<img src={step.img} alt={step.stepname} />}
            </div>
          </div>
        ))}

        <div className="spacer-list"></div>
    </div>
  );
};

export default WorkingSteps;