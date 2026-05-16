import React,{useState,useRef} from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from "react-router-dom";
import './form.css';
import useMediaQuery from '../useMediaQuery';
import Button from '../../components/button/Button';


const Form = () => {
  const isMobile =useMediaQuery("(max-width:768px)");


  return (
    <div className='form'>
      
        <div className={`${isMobile?"flex column":"flex column space-between"}`}>
            <p className="larger-h1">
              Ready to create your next project.
            </p>
        </div>

        <Link to="/contact" className='navigation-link'>
          <Button text="start project" />
        </Link>
      
    </div>
  )
}

export default Form
