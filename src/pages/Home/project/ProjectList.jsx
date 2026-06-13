import React, { useRef } from "react";
import './projectlist.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; 
import { SplitText } from "gsap/SplitText";
import useMediaQuery from "../../../components/useMediaQuery";
import FadeText from "../../../components/FadeText";
import Button from '../../../components/button/Button';
import Span from '../../../components/span/span';
import { useLenis } from "lenis/react"
gsap.registerPlugin(ScrollTrigger,SplitText);

const projectData=[
  {img:"/src/assets/project1.jpg",name:"Talanta trust",tags:"Branding"},
  {img:"/src/assets/project2.jpg",name:"Talanta trust",tags:"Website"},
  {img:"/src/assets/project3.jpg",name:"Talanta trust",tags:"Branding"},
  {img:"/src/assets/project1.jpg",name:"Talanta trust",tags:"Branding"},
  {img:"/src/assets/project2.jpg",name:"Talanta trust",tags:"Website"},
  {img:"/src/assets/project3.jpg",name:"Talanta trust",tags:"Branding"},
]


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
          y: isEven ? -300 : -50, 
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // gsap.timeline({
      //     scrollTrigger:{
      //       trigger:'.project-slide',
      //       start:"top center",
      //       endTrigger:container.current,
      //       end:"bottom top",
      //       toggleActions: 'play reverse play reverse',
      //       markers:false
      //     }
      // })
      // .to(container.current, {
      //   backgroundColor: "var(--white-color)",
      //   ease: "none"
      // }, 0)
      // .to(".pr-d", {
      //   color: "var(--text-color)",
      //   ease: "none"
      // }, 0);

      gsap.fromTo(
        stickTitle.current,
        {
          scale: 4,
        },
        {
          scale: 1,
          opacity:0,
          ease: "none",
          scrollTrigger: {
            trigger: stickTitle.current,
            start: "top center",
            end: "+=300",
            scrub: true,
            pin: true,
          },
        }
      );
    },{ scope: container });

  return (
          <div className='projectList padding-space' ref={container}>
            <div className="container-holder flex row space-between">
                <FadeText>< Span title="selected work"/></FadeText>
                <FadeText>< Span title="2019-present"/></FadeText>
            </div>

            {/* <FadeText>
              <Span title="selected project"/>
            </FadeText> */}

            {/* <FadeText>
              <h2 className="title-bold-extra">A selected project showcasing strategic <br/> planning and measurable <br/> <span className="span-highlight">outcomes.</span></h2>
            </FadeText> */}

            <div className="flex row" >
              <div className="intro-project" ref={stickTitle}>
                <p>Projects shaped <br/> by strategy.</p>
              </div>
              <div className="project-slide">
                {
                projectData .map((data,index)=>(
                    <div className="item" key={index}>
                      <div className="img-holder">
                        <img src={data.img} alt=""/>
                      </div> 
                      <div className="pr-d">
                        <h3>{data.name}</h3>
                        <div className="tags-column flex column">
                          <p>{data.tags}</p>
                        </div>
                      </div>
                    </div>
                ))
                }
              </div>
            </div>

            {/* <Link to="/project" className='navigation-link'>
            <Button text="all work" />
            </Link> */}

          </div>  
  )
}

export default ProjectList
