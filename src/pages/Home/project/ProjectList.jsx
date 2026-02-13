import React, { useRef } from "react";
import './projectlist.css';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useMediaQuery from "../../../components/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

const projectData=[
  {img:"/src/assets/project1.jpg",name:"Talanta trust",tags:"ux&ui,Branding"},
  {img:"/src/assets/project2.jpg",name:"Talanta trust",tags:"ux&ui,Branding"},
  {img:"/src/assets/project3.jpg",name:"Talanta trust",tags:"ux&ui,Branding"},
]


const ProjectList = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const projectList=useRef(null);
  const projectRow=useRef(null);
  const project=useRef(null);

  useGSAP(()=>{
        gsap.from(".item",{
        y:-10,
        opacity:0,
        ease: "power3.out",
        duration:0.8,
        stagger: 0.25,
        scrollTrigger:{
          trigger:projectList.current,
          start:"top 80%",
          end:"bottom 40%",
        }
        });

  },[]);


  //   const startShake = (e) => {
  //   const img = e.currentTarget;

  //   gsap.killTweensOf(img);

  //   img._shakeTween = gsap.to(img, {
  //     x: 4,
  //     rotation: 1.5,
  //     duration: 0.1,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "power1.inOut",
  //   });
  // };

  // const stopShake = (e) => {
  //   const img = e.currentTarget;

  //   if (img._shakeTween) {
  //     img._shakeTween.kill();
  //     img._shakeTween = null;
  //   }

  //   gsap.to(img, {
  //     x: 0,
  //     rotation: 0,
  //     duration: 0.2,
  //     ease: "power2.out",
  //   });
  // };



  return (
    <div className='projectList'>

      <div className={`container-holder ${isMobile ? "flex-column " : "flex  space-between" } `}>
          <p className="project-title">
            <span>project</span><br/>
            We build fast, secure and <br/> user-focused digital products.
          </p>

          <div className="cta-button">
            <ArrowUpRight  size={32} strokeWidth={0.5}  className="arrow-icon" />
            <a href="#">View All</a>
          </div>
       </div>

        <div className="grid" ref={projectList}>
          <div className="rows" ref={projectRow}>
            {
             projectData .map((data,index)=>(
                <div className="item" key={index}>
                  <div className="img-holder">
                    <img src={data.img} alt="" 
                    // onMouseEnter={startShake}
                    // onMouseLeave={stopShake}
                    />
                  </div>
                  <h3>{data.name}</h3>
                  <p>{data.tags}</p>
                </div>
             ))
            }
          </div>
        </div>
      
    </div>
  )
}

export default ProjectList
