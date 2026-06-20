import React, { useRef } from "react";
import { Link } from "react-router-dom";
import './projectlist.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; 
import { SplitText } from "gsap/SplitText";
import useMediaQuery from "../../../components/useMediaQuery";
import FadeText from "../../../components/FadeText";
import Span from '../../../components/span/span';
import { useLenis } from "lenis/react"
gsap.registerPlugin(ScrollTrigger,SplitText);
import projectData from "../../../data/project";


const ProjectList = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const container = useRef(null)
  const stickTitle = useRef(null)
  const lenis = useLenis() 

    useGSAP(() => {
      if (lenis) {
        lenis.on("scroll", ScrollTrigger.update)
      }
      const items = gsap.utils.toArray(".item");
      items.forEach((item, index) => {
      const isEven = index % 2 === 0;

      gsap.to(item, {
          y: isEven ? -200:100, 
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.timeline({
          scrollTrigger:{
            trigger:'.project-slide',
            start:"top center",
            endTrigger:container.current,
            end:"bottom top",
            toggleActions: 'play reverse play reverse',
            markers:false
          }
      })
    },{ scope: container });

  return (
          <div className='projectList padding-space' ref={container}>
            <div className="container-holder flex row space-between">
               <FadeText>< Span title="2019-present"/></FadeText>
              <FadeText>< Span title="selected work"/></FadeText>       
            </div>

            <div className="project-slide">
                {
                projectData .map((data,index)=>(
                  <div className="item-s" key={index}>
                      <Link className="item" to={`/projects/${data.name}`}
                      key={data.name} >
                        <div className="img-holder">
                          <img src={data.img} alt=""/>
                        </div> 
                        <div className="pr-d">
                          <div className="pr">
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>
                          </div>

                          <div className="tags-column">
                              {
                                data.tags.map((tag,id)=>(<p key={id}>{tag}</p>))
                              }
                          </div>
                          
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
