import Navbar from "../../components/navbar/Navbar";
import './home.css';
import Hero from './hero/hero'
import Welcome from './welcome/welcome'
import Testmonial from './testmonial/Testmonial'
import Partner from './partner/Partner'
import Footer from '../../components/footer/Footer'
import ProjectList from './project/ProjectList'
import Service from './service/service'
import Form from "../../components/form/Form";
import { Lightbulb,CircleDollarSign,ServerCog,ShieldPlus   } from 'lucide-react';
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother,SplitText);
import useMediaQuery from '../../components/useMediaQuery';
import FadeText from "../../components/FadeText";
import Span from "../../components/span/span";


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

const Home = () => {
  const isMobile=useMediaQuery("(max-width:768px)");
  return (
    <div>
        <Navbar/>
        <Hero/>  
        <Welcome/>
        <ProjectList/>
        <Service/>
        <div className="expection padding-space">
          <div  className={`flex w-100 space-between ${isMobile?"column":"column"}`}>

            <FadeText> <Span title="benefit" /> </FadeText>
            <FadeText> 
               <h1 className="title-bold-extra">
              We Don't just build. <br/> we build what <br/> <span className="span-highlight">matters.</span>
            </h1></FadeText>

            <FadeText>
                <p className="small-title" >
                  We focus on features that actually make you money. If a feature doesn't solve a customer problem or save you time, we don't build it. Every line of code must earn its place.
                </p>
            </FadeText>
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
        <Testmonial/>
        <Partner/>
        <Form/>
        <Footer/>
    </div>
  );
};

export default Home;
