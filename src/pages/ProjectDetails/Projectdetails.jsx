import React from 'react';
import { useParams } from "react-router-dom";
import './projectdetails.css';
import Navbar from '../../components/navbar/Navbar';


const Projectdetails = () => {
const { name } = useParams();

  return (
    <div className='prj'>
        <Navbar/>
        <div className="prj-container padding-space">
          <h1 className='prj-heading'>{name}</h1>

        </div>
    </div>
  )
}

export default Projectdetails
