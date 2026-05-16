import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './project.css';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';

const projectList=[
{
name:"REFEREEE",
image:"/projects/image1.jpg",
description:"BRAND | WEBSITE-DESIGN ",
},

{
name:"SECONDPROJECT",
image:"/projects/image2.jpg",
description:"BRAND | WEBSITE-DESIGN ",
},

{
name:"BRANDOX",
image:"/projects/image3.jpg",
description:"BRAND | DESIGN |VISUAL ",
},
]

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

        <div className="project_list">
          {
            projectList.map((project,index)=>(            
            <div className="project-item" key={index}>
              <img src={project.image} alt="" />
              <div className="simple-description">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
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
