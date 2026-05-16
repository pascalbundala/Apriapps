import React from 'react'
import './button.css'
import { MoveUpRight } from 'lucide-react';

const Button = (props) => {
  return (
    <div className='btn flex row'>
        {props.text} <MoveUpRight className='btn-icon'/>
    </div>
  )
}

export default Button
