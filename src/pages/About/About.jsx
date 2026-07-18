import Navbar from "../../components/navbar/Navbar";
import './about.css';
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import skillData from "../../data/skills";
import why from "../../data/values";
import workProcess from "../../data/workprocess";
import serviceList from "../../data/serviceList";
import React, {useState,useRef} from 'react';
import sts from "../../data/abtStatics";


const Home = () => {
  const skills = skillData[0];

  return (
    <div className="g-holder abt" >
        <Navbar/>

        <div className="larger-intro padding-space">
            <h1 className="larger-h1">
              The Fusion of  Creativity and Technology.
            </h1>

          <div className="span-h">
            <div className="p padding-space">scroll</div>
            <span className="line-span"></span>
          </div>

            <p className="title-bold-extra">
              We craft digital experiences that connect ideas with people. We are working with clients  worldwide, we design and build meaningful digital products that inspire growth and create impact,Blending creativity, technology and strategy.
            </p>
        </div>

        <div className="why padding-space">
             <img src="/images/office.jpg" alt="" />
             <div className="intro-about">
                  <h2 className="title-bold">info</h2>
                  <p className="small-title">
                      Founded in 2018, ApriApps was established with a vision to empower businesses through innovative software development and digital solutions. What started as a passionate team focused on solving real-world business challenges has evolved into a trusted technology partner, delivering impactful solutions to clients across diverse industries.
                      Our expertise includes custom software development, website design and development, mobile application development, UI/UX design, branding, digital marketing, and business automation. By combining technical excellence with creative thinking, we develop solutions that improve efficiency, strengthen brands, and drive sustainable business growth.
                      Over the years, we have remained committed to innovation, quality, and long-term client partnerships. Every project is built around understanding our clients' unique goals and delivering reliable, scalable, and user-focused digital solutions. Today, ApriApps continues to help businesses embrace digital transformation with confidence, creating technology that delivers measurable results and lasting value.
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
                        <div className="flex c row space-between">
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
                 product build with precision.
                </p>

                <p className="small-title">
                  Every product is carefully designed and developed with a focus on quality, performance, scalability, and user experience delivering reliable digital solutions that create lasting value.
                </p>

                <div className="flex row fo">
                  <img src="/profile/pascalbundala.jpg" />
                  <p className="small-title">Founder & CEO</p>
                </div>
        </div>

        <div className="skill padding-space">
          <p className="title-bold-extra">
            technology<br/> stack.</p>
           {
           Object.entries(skills).map(([category, items]) => (
              <div className="skill-group" key={category}>
                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                <ul className="skill-list">
                  {items.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                  ))}
                </ul>
              </div>
            ))
            }
        </div>

        <Form/>
        <Footer/>
        
    </div>
  );
};

export default Home;
