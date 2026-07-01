import Navbar from "../../components/navbar/Navbar";
import './about.css';
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import skillData from "../../data/skills";
import why from "../../data/values";
import workProcess from "../../data/workprocess";
import serviceList from "../../data/serviceList";
import React, {useState,useRef} from 'react';


const sts=[{no:"08", name:"years"},{no:"12", name:"projects"},{no:"120", name:"clients"},{no:"12", name:"countries"},]

const partners=['/partner/deloitte-1.svg','/partner/google-1.svg','/partner/nasa-6.svg','/partner/trustpilot-1.svg','/partner/database-labs.svg']

const images=['/office/office-code.jpg','/office/office.jpg','/office/swimming.jpg','/office/puto.jpg']


const Home = () => {
  const skills = skillData[0];

  return (
    <div className="g-holder abt" >
        <Navbar/>

        <h1 className="larger-h1">
          The Fusion of Strategy Creativity and Technology.
        </h1>

        <p className="small-title">
          We craft digital experiences that connect ideas with people. We are working with clients  worldwide, we design and build meaningful digital products that inspire growth and create impact,Blending creativity, technology and strategy.
        </p>

        <div className="why padding-space">
             <img src="/images/office.jpg" alt="" />
             <img src="/office/office-code.jpg" alt="" />

             <div className="intro-about padding-space">
               <h2 className="title-bold-extra">our profile</h2>
               <p className="small-title">
                  We create magnetic commerce that attracts, resonates and converts, helping brands turn brave ideas into digital experiences that captivate their audience, build trust, and drive lasting growth.
               </p> 

              <div className="scrolling-stats">
                    {
                      sts.map((s,index)=>(
                        <div className="st" key={index}>
                          <p className="small-title">{s.name}:</p>
                          <h4>{s.no}</h4>
                        </div>
                      ))
                    }
            </div>              
            </div>
        </div>
         
        <div className="profile padding-space">
          <div className="intro-v">
              <h2 className="title-bold-extra">
                about us
              </h2>
          </div>
        </div>

        <div className="our-services" ref={serviceList}>
          <h2 className="title-bold-extra padding-space">Built to Move <br/>Brands Forward</h2>
          <p className="small-title padding-space">
            We combine strategy, creativity and technology to create digital solutions that strengthen brands, engage audiences and drive sustainable business growth.
          </p>

          <ul>
            {
              serviceList.map((service,index)=>(
                <div className="servitm padding-space" key={index}> <h4>{index+1}</h4><span></span> <h3>{service.name} </h3><img src={service.image} alt={service.name} /></div>
              ))
            }
          </ul>
        </div>

        <div className="strategy padding-space">
          <div className="intro-v">
                <h2 className="title-bold-extra">
                our core values.
              </h2>
              <p className="small-title">our core values guide everything we do. They inspire us to deliver innovative, reliable, and high-quality digital solutions while building lasting relationships with our clients.</p>
          </div>
          <div className="strgt">
                  {
                    why.map((y,i)=>{
                    const Icon = y.icon;
                    return(
                    <div className="reas" key={i}>
                        <div className="flex row space-between">
                          <h1 className="larger-h1">{i +1}</h1>
                          <Icon size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="title-bold">{y.name}</h3>
                        <p className="small-title">{y.p}</p>
                    </div>
                  )})
                  }
          </div>
        </div>

        <div className="how-work padding-space">
          <h3 className="title-bold-extra">
            how we work.
          </h3>
          <p className="small-title">
            we follow a structured development process that ensures every project is delivered on time, within budget, and aligned with your business goals.
          </p>

          <div className="steps">
            {
              workProcess.map((process,index)=>(            
              <div className="step" key={index}>
                <h4 className="fc">Step-{process.step}</h4>
                <div className="flex column">
                <h3 className="title-bold">{process.title}</h3>
                <p className="small-title">{process.description}</p>
                </div>

              </div>
            ))
            }
          </div>

        </div>

        <div className="team padding-space">
          <p className="title-bold-extra">
            Direct collaboration<br/> and strategic Team.</p>
           <div className="team-list">
              <div className="team-container">
                  <img src="images/pass.jpeg" alt="" />
                  <div className="team-detail">
                        <h3>Pascal Bundala</h3>
                        <h4>Ceo & Founder</h4>
                  </div>
              </div>
           </div>
        </div>

        <div className="phil padding-space">

                <p className="larger-h1">
                 product
                  build with precision.
                </p>

                <p className="small-title">
                  Every product is carefully designed and developed with a focus on quality, performance, scalability, and user experience delivering reliable digital solutions that create lasting value.
                </p>
        </div>

        <div className="skill padding-space">
            <p className="title-bold-extra">
            technology<br/> stack.</p>
           {Object.entries(skills).map(([category, items]) => (
              <div className="skill-group" key={category}>
                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                <ul className="skill-list">
                  {items.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <Form/>
        <Footer/>
        
    </div>
  );
};

export default Home;
