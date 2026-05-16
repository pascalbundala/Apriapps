import React from 'react';
import "./span.css";
import { Minus} from 'lucide-react';

const Span = (props) => {
  return (
    <div className='flex row ic'>
        <Minus className='span-icon' />
        <h2 className='span-text'>{props.title}</h2>
    </div>
  )
}

export default Span
