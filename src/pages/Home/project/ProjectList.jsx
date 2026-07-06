import React, { useRef } from "react";
import { Link } from "react-router-dom";
import './projectlist.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; 
import { SplitText } from "gsap/SplitText";
import useMediaQuery from "../../../components/useMediaQuery";
import { useLenis } from "lenis/react"
gsap.registerPlugin(ScrollTrigger,SplitText);
import projectData from "../../../data/project";


const ProjectList = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const container = useRef(null);
  const pinContainer = useRef(null);
  const lenis = useLenis() 

    useGSAP(() => {
      if (lenis) {
        lenis.on("scroll", ScrollTrigger.update)
      }

      ScrollTrigger.create({
        trigger: pinContainer.current,
        start: "top 20%",
        endTrigger: container.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        markers: false,
      });
    },{ scope: container });

  return (
          <div className='projectList padding-space' ref={container}>
            <div className="pin-intro" ref={pinContainer}>
              <span>2018-{currentYear}</span>
              <h1 className="larger-h1">
               selected <br /> works.
              </h1>  
              <p className="small-title">
                Discover a selection of our best work, crafted to solve real business challenges through innovative design and technology.
              </p>  
            </div>

            <div className="project-slide">
                {
                projectData .map((data,index)=>(
                  <div className="item-s" key={index}>
                      <Link className="item" to={`/project/${data.name}`}
                      key={data.name} >
                        <div className="img-holder">
                          <img src={data.img} alt={data.name}/>
                        </div> 
                        <div className="pr-d">
                          <h3>{data.name}</h3>
                        </div>
                      </Link>
                  </div>
                ))
                }
            </div>

          </div>  
  )
}

export default ProjectList
