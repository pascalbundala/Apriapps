import React,{useRef} from 'react';
import Navbar from '../../components/navbar/Navbar';
import './project.css';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';
import projectData from '../../data/project';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

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
                  <p className="large-description">{project.description}</p>
                  <Link className='linkTo'  to={`/project/${project.name}`} key={project.name}>
                    <h4>Discover more</h4> <ArrowUpRight className='lc-icon' />
                  </Link>
              </div>
            </div>))
          }

        </div>
      </div>

      <Form/>
      <Footer/>
      
    </>
  )
}

export default Project
