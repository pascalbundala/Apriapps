import React,{useRef} from 'react';
import Navbar from '../../components/navbar/Navbar';
import './project.css';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';
import projectData from '../../data/project';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const steps = [
  {
    stepname: "Consultation",
    steplist: ["requirements", "business goals"]
  },
  {
    stepname: "Planning & Analysis",
    steplist: ["Research", "Project roadmap"]
  },
  {
    stepname: "Design & Development",
    steplist: ["UI/UX Design", "Development"]
  },
  {
    stepname: "Testing & Quality Assurance",
    steplist: ["Testing", "Bug fixing"]
  },
  {
    stepname: "Deployment",
    steplist: ["Server setup", "Launch"]
  },
  {
    stepname: "Support & Maintenance",
    steplist: ["Monitoring", "Updates"]
  }
];

const Project = () => {
  const projectContainerRef=useRef();
  const workTitle =useRef();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar/>
      <div className="project-page padding-space" ref={projectContainerRef}>
        <div className="work-title" ref={workTitle}>
            <h1 className='larger-h1'>work.</h1>
            <p className='small-title'>
                Every project we deliver is a reflection of our commitment to quality, designed to inspire and drive success.
            </p>

            <div className="short-description">
              <h3>DEFINING BRAND AESTHETICS</h3>
              <p>selected quality work <br /> <br /> @2018-{currentYear}</p>
              <p>Branding | Design | websites | software solution</p>
            </div>
        </div>





        <div className="project-list">
          {
            projectData.map((project,index)=>(            
            <div className="project-item" key={index}>
              <img src={project.img} alt={project.name} />
              <div className="projectData">
                  <div className="simple-description">
                    <h3>{project.name}</h3>
                    <div className="flex row">
                      {
                      project.tags.map((tag,i)=>(
                        <p key={i}>{tag}</p>
                      ))
                    }
                    </div>                   
                  </div>
                  <p className="large-description">{project.description}
</p>

                  <Link className='linkTo'  to={`/project/${project.name}`} key={project.name}>
                    <h4>Discover more</h4> <ArrowUpRight strokeWidth={0.9} />
                  </Link>
              </div>
            </div>))
          }

        </div>
      </div>
      <div className="how-we-work padding-space">
        <span>how we work</span>
        <ul>
          {
            steps.map((step,index)=>(
              <div key={index} className='listing-process'>
                <h3>{index+1}-{step.stepname}</h3>
                <div className="list-pr">
                  {
                    step.steplist.map((stp,index)=>(
                        <p key={index}>{stp}</p>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </ul>
      </div>
      <Form/>
      <Footer/>
      
    </>
  )
}

export default Project
