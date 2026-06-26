import React, { useState } from 'react'
import './faq.css';
import faqData from '../../../data/faq';
import FadeText from '../../../components/FadeText';
import Span from '../../../components/span/span';


const Faq = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faq padding-space'>

        <div className="flex row w-100 t-header">
            <div className="column">
                <FadeText><Span title="F.A.Q"/></FadeText>
                <FadeText><p className="title-bold-extra" >
                    What clients <br/>ask Us.
                </p></FadeText>
            </div>
        </div>

        <div className="flex row faqsection">
           {
            faqData.map((faq,index)=>(
                <div className="faqblock" key={index}>
                    <div className="faq-question">
                        <div className="flex row h43">
                            <h3>{index+1}</h3>
                            <h3>{faq.qn}</h3>
                        </div>
                        <span  onClick={() => toggleFAQ(index)} >{activeIndex === index ? "−" : "+"}</span>
                    </div>

                    <div
                        className={`faq-answer ${
                            activeIndex === index ? "show" : ""
                        }`}
                        >
                        <p>{faq.answer}</p>
                    </div>                   
                </div>
            ))
        }
        </div>

    </div>
  )
}

export default Faq
