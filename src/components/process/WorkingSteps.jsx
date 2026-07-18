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
      if (i === cards.length - 1) return;

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
      <ul>
        {steps.map((step, index) => (
          <div key={index} className="listing-process">
            <h3>{step.stepname}</h3>
            <h1>{index + 1}</h1>

            <div className="list-pr">
              {step.steplist.map((stp, i) => (
                <p key={i}>{stp}</p>
              ))}
            </div>

            <p className="small-title">{step.text}</p>
          </div>
        ))}
      </ul>

      <div className="spacer-list"></div>
    </div>
  );
};

export default WorkingSteps;