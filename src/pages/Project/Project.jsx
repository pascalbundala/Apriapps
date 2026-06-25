import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './project.css';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';
import projectData from '../../data/project';
import { Link } from 'react-router-dom';

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
  return (
    <>
      <Navbar/>
      <div className="project-page padding-space">
        <div className="work-title">
          <h1 className='larger-h1'>work</h1>
          <div className="title">
            <p className='small-title'>
                Every project we deliver is a reflection of our commitment to quality, designed to inspire and drive success.
            </p>
          </div>
        </div>

        <div className="project-list">
          {
            projectData.map((project,index)=>(            
            <div className="project-item" key={index}>
              <img src={project.img} alt="" />
              <div className="project-title">
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
                  <p className="large-description">
                    {
                      project.description
                    }
                  </p>

                  <Link className='linkto'  to={`/project/${project.name}`} key={project.name}>
                    view more
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
