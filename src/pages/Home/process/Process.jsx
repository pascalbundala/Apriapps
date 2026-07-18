import React from 'react';
import './process.css';
import WorkingSteps from '../../../components/process/WorkingSteps';

const Process = () => {
  return (
    <div className='process'>
        <div className="title-intro">
            <p className="larger-h1">
                A Smarter Way to Build Digital Products.
            </p>
            <p className="small-title">
                we simplify the journey of building digital products. Through careful planning, innovative design, expert development, and continuous support, we create websites, mobile apps, and digital experiences that help your business grow.
            </p>
        </div>

        <WorkingSteps/>
      
    </div>
  )
}

export default Process
