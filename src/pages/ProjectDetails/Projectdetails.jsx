import React from 'react';
import { useParams } from "react-router-dom";
import './projectdetails.css';
import Navbar from '../../components/navbar/Navbar';
import projectData from '../../data/project';
import Footer from '../../components/footer/Footer';


const Projectdetails = () => {
const { name } = useParams();

const project = projectData.find(
  (item) => item.name === name
);

if (!project) {
  return <h2>Project not found</h2>;
}


  return (
    <div className='prj'>
        <Navbar/>
        <div className="prj-container padding-space">
          <h1 className='prj-heading'>{name}</h1>
        </div>

        <div className="image-description">
          <div className="title">about project</div>
          <div className="description-link">
            <p>{project.description}</p>
             <a href={project.livelink} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
          <img src={project.img} alt={project.name} />
        </div>

        <div className="challenge border-top padding-space">
          <div className="title">problem/solution</div>
          <div className="problem-solution">
            <div className="title">problem we solve</div>
            <p>{project.problem}</p>
             <div className="title">solution we provide</div>
             <p>{project.solution}</p>
          </div>
          <div className="extra-space"></div>
        </div>

        <div className="techstack  padding-space">
          <div className="title">technology stack</div>
          <div className="tech-other">
            <ul>
                {
                project.technology.map((tech,index)=>(
                  <li key={index}>{tech}</li>
                ))
                }
            </ul>

            <div className="process">
              <div className='steps'><h2>01</h2><h3>discovery</h3></div>
              <div className='steps'><h2>02</h2><h3>documentation</h3></div>
              <div className='steps'><h2>03</h2><h3>design</h3></div>
              <div className='steps'><h2>04</h2><h3>implementation</h3></div>
              <div className='steps'><h2>05</h2><h3>testing</h3></div>
            </div>

            <img src={project.img} alt="" />

          </div>

          
        </div>

        <Footer/>
        
    </div>
  )
}

export default Projectdetails
