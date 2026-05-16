import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './service.css';
import Footer from '../../components/footer/Footer';
import { MoveUpRight } from 'lucide-react';
import Form from '../../components/form/Form';


const techies=[
  {logo:"/brands/figma-icon.svg",name:"figma"},
  {logo:"/brands/android-4.svg",name:"android"},
  {logo:"/brands/java-4.svg",name:"java"},
  {logo:"/brands/css-3.svg",name:"css3"},
  {logo:"/brands/firebase-1.svg",name:"firebase"},
  {logo:"/brands/flutter.svg",name:"flutter"},
  {logo:"/brands/gsap-greensock.svg",name:"gsap"},
  {logo:"/brands/html-1.svg",name:"html5"},
  {logo:"/brands/javascript-1.svg",name:"javascript"},
  {logo:"/brands/laravel-2.svg",name:"laravel"},
  {logo:"/brands/mysql-3.svg",name:"mysql"},
  {logo:"/brands/nodejs-3.svg",name:"nodejs"},
  {logo:"/brands/react-native-1.svg",name:"react"},
  {logo:"/brands/tailwind-css-2.svg",name:"tailwind"},
  {logo:"/brands/threejs-1.svg",name:"threejs"},
  {logo:"/brands/vercel.svg",name:"vercel"},
  {logo:"/brands/github.svg",name:"github"},
  {logo:"/brands/php-4.svg",name:"php"},
  {logo:"/brands/postman.svg",name:"postman"},
  {logo:"/brands/wordpress-icon-1.svg",name:"Wordpress"},

]

const services=[
  {
    name:"Brand & Creative.",
    serviceList:["Brand Strategy","Visual Identity","UI/UX Design","Creative Direction"]
  },
  {
    name:"Software Development",
    serviceList:["Web Applications","Mobile Applications","APIs & Integrations","Customs Systems"]
  },

  {
    name:"Digital Products & Experience",
    serviceList:["Website Development","SaaS & Platforms","Optimization & Scaling","Maintenance & Support"]
  },

]

const Service = () => {
  return (
    <div className='sevc padding-space'>
        <Navbar/>
        
        <div className="container-holder">

            <div className="big-image">
              <h1 className="larger-h1">
                Strategic Digital Solutions. Built to Perform.
              </h1>
            </div>

            <div className="big-title">
              <span>What we do</span>
              <p className='title-bold center-horizontal'>We combine strategic digital expertise, innovative development, and creative execution into one powerful technology-driven solution.</p>
            </div>


              {services.map((service,index)=>(
                  <div className="sevc-list" key={index}>
                      <h3>{service.name}</h3>
                      <ul className='ul-list'>
                        {
                          service.serviceList.map((list,index)=>(
                            <li key={index}>{list}</li>
                          ))
                        }
                      </ul>
                  </div>
                ))
              }

            <div className="ready-work">
              <p className='title-bold'>
                <span>ready to start a project?</span> <br/> You’ve seen what we offer. Now let’s transform your ideas into measurable growth. Choose the service that fits your goals and take the next step toward a smarter, stronger digital presence.</p>
              <div className="cta-work">
                  <button className='flex'>Lets Talk  <MoveUpRight className='arrow-icon' /></button>
              </div>
            </div>

        </div>

        <div className="how column">
            <span>our process</span>
            <p className='title-bold'>We follow a structured, strategy-driven process that transforms ideas into powerful digital solutions. Our approach combines creativity, technical precision, and measurable execution to ensure every project delivers real business value.</p>

            <div className="flex wrap prs">

                <div className="hows flex nowrap">
                  <div className="how-image">
                    <img src="/projects/research.png" alt="" srcset="" />
                  </div>
                  <div className="column nowrap width-50">
                      <h2>01</h2>
                      <p className="how-title title-bold">Discovery & understanding</p>
                      <p className="standard-text">We begin by listening. We take time to understand your business, goals, challenges, and expectations. This helps us define the right strategy and ensure we are building a solution that truly fits your needs.</p>
                  </div>
                </div>

                <div className="hows flex nowrap">
                  <div className="how-image">
                    <img src="/projects/design.png" alt="" srcset="" />
                  </div>
                  <div className="column nowrap width-50">
                      <h2>02</h2>
                      <p className="how-title title-bold">Plan & Design</p>
                      <p className="standard-text">Once we understand your vision, we create a clear project plan and design the structure of your solution. This includes mapping out features, user experience, timeline, and technical approach to ensure everything is organized before development begins.</p>
                  </div>
                </div>

                <div className="hows flex nowrap">
                  <div className="how-image">
                    <img src="/projects/gear.png" alt="" srcset="" />
                  </div>
                  <div className="column nowrap width-50">
                      <h2>03</h2>
                      <p className="how-title title-bold">Build & Test</p>
                      <p className="standard-text">Our team develops your solution using modern, reliable technology. Throughout the process, we carefully test every feature to ensure performance, security, and smooth functionality before launch.</p>
                  </div>
                </div>

                <div className="hows flex nowrap">
                  <div className="how-image">
                    <img src="/projects/launch.png" alt="" srcset="" />
                  </div>
                  <div className="column nowrap width-50">
                      <h2>04</h2>
                      <p className="how-title title-bold">Launch & support</p>
                      <p className="standard-text">After final approval, we launch your project and make it live. But we don’t stop there  we continue to provide support, improvements, and guidance to help your business grow long-term.</p>
                  </div>
                </div>

            </div>

        </div>

        <div className="techstack flex column">

          <span>Tools That Power Our Execution </span>
          <p className="title-bold">
            we believe exceptional results are never accidental they are engineered. Behind every successful campaign, application, or digital strategy lies a carefully selected ecosystem of professional tools that enable precision, efficiency, and measurable impact.
          </p>

          <div className="techs">
            {
              techies.map((tech,id)=>(           
              <div className="tech">
              <img src={tech.logo} alt="technology logo" />
              <h3>{tech.name}</h3>
            </div>))
            }
          </div>
        </div>

        <Form/>

        <Footer/>
      
    </div>
  )
}

export default Service
