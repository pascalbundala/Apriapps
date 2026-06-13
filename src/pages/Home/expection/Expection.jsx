
import { Lightbulb,CircleDollarSign,ServerCog,ShieldPlus   } from 'lucide-react';
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import useMediaQuery from '../../../components/useMediaQuery';
import FadeText from "../../../components/FadeText";
import Span from "../../../components/span/span";
import './expection.css'

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother,SplitText);


const values=
[
  {
  img:<CircleDollarSign/>,
  title:"Revenue Acceleration",
  descr:"We build high-conversion user experiences (UX) and e-commerce platforms designed to turn visitors into paying customers. We focus on the customer journey to shorten the sales cycle"
  },

  {
  img:<ServerCog/>,
  title:"Operational Efficiency",
  descr:"Automate manual tasks and eliminate bottlenecks with custom internal tools and workflow software. Reducing overhead increases your bottom line."
  },

  {
  img:<Lightbulb/>, 
  title:"Smart Data Decisions",
  descr:"We build analytics directly into your software. Gain real-time insights into customer behavior and business performance, allowing you to make proactive decisions that capture market shares."
  },

  {
  img:<ShieldPlus/>,  
  title:"Future-Proof Scalability",
  descr:"Our architecture is built to grow with you. Whether you need to handle 10 or 10 million users, your software remains stable, secure, and adaptable to future market trends."
  },


]

const Expection = () => {
  const isMobile=useMediaQuery("(max-width:768px)");
  return (
        <div className="expection padding-space">
          <div  className={`flex w-50 ex-intro space-between ${isMobile?"column":"column"}`}>
            <FadeText> <Span title="benefit"/> </FadeText>
            <FadeText> 
              <h1 className="title-bold-extra">
              We Don't just build. <br/> we build what <br/> <span className="span-highlight">matters.</span>
            </h1></FadeText>

            <FadeText>
                <p className="small-title" >
                  We focus on features that actually make you money. If a feature doesn't solve a customer problem or save you time, we don't build it. Every line of code must earn its place.
                </p>
            </FadeText>

            <img src="/images/chess.png" alt="" />            
          </div>

          <div className="value-container">
            {values.map((value,id)=>(              
              <div className="value" key={id}>
                <div className="value-icon">{value.img}</div>
                <p className="title-bold">{value.title}</p>
                <p className="small-title">{value.descr}</p>
              </div>
              ))}
          </div>

        </div>
  );
};

export default Expection;
