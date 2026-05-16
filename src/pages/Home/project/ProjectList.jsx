import React, { useRef } from "react";
import './projectlist.css';
import { Link } from "react-router-dom";
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
  const lenis = useLenis() 

  useGSAP(
    () => {
      // Sync Lenis with ScrollTrigger
      if (lenis) {
        lenis.on("scroll", ScrollTrigger.update)
      }
      
      const wrappers = gsap.utils.toArray(".img-holder")
      wrappers.forEach((wrapper) => {
        const img = wrapper.querySelector("img")
        let skewSetter = gsap.quickSetter(img, "skewY", "deg")
        let proxy = { skew: 0 }
        let clamp = gsap.utils.clamp(-17, 17)

        ScrollTrigger.create({
          trigger: wrapper,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / -300)
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
              proxy.skew = skew
              gsap.to(proxy, {
                skew: 0,
                duration: 0.8,
                ease: "power3",
                overwrite: true,
                onUpdate: () => skewSetter(proxy.skew)
              })
            }
          }
        })
      })

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill())
        if (lenis) {
          lenis.off("scroll", ScrollTrigger.update)
        }
      }
    },
    { scope: container }
  )




  return (
          <div className='projectList padding-space' ref={container}>

            <FadeText>
              <Span title="selected project"/>
            </FadeText>

            <FadeText>
              <h2 className="title-bold-extra">A selected project showcasing strategic <br/> planning and measurable <br/> <span className="span-highlight">outcomes.</span></h2>
            </FadeText>

                <div className="grid" >
                  <div className="rows">
                    {
                    projectData .map((data,index)=>(
                        <div className="item" key={index}>
                          <div className="img-holder">
                            <img src={data.img} alt=""/>
                          </div>
                          <h3>{data.name}</h3>
                          <p>{data.tags}</p>
                        </div>
                    ))
                    }
                  </div>
                </div>

                <Link to="/project" className='navigation-link'>
                <Button text="all work" />
                </Link>

          </div>  

  )
}

export default ProjectList
