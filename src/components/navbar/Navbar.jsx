import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';
import { Plus,Minus } from 'lucide-react';


const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (isOpen) {
        document.documentElement.classList.add("no-scroll");
      } else {
        document.documentElement.classList.remove("no-scroll");
      }

      return () => {
        document.documentElement.classList.remove("no-scroll");
      };
    }, [isOpen]);


  return (
    <div className='navbar padding-space'>
      <NavLink to="/" className="logo">
        <img
          src="/src/assets/icon-last.png"
          alt="logo for Apriapps"
          className="img-logo"
        />
        <div className="name-app">
          <h2>Apriapps</h2>
          <h3>Digital Solutions</h3>
        </div>
      </NavLink>

      <div className="header">
        <div className="menu-wrapper"> 
          {isOpen ? (
            <div className='close-icon' onClick={() => setIsOpen(false)}>
              Close <Minus className='close-icon-icon' />
            </div>
          ) : (
            <div className="cta-menu">            
              <div className='close-icon' onClick={() => setIsOpen(true)}>
                Menu <Plus className='close-icon-icon' />
              </div>
            </div>
          )}
        </div>

        <div className={isOpen ? "openMenu" : "closedMenu"}>
            <div className="nav-open">
                  <h1>
                    Let work<br/> together.
                  </h1>
                
                  <div className="links">
                      <NavLink to="/about" className="title-bold item-menu " onClick={() => setIsOpen(false)}>
                        About
                      </NavLink>
                      <NavLink to="/project" className="title-bold item-menu " onClick={() => setIsOpen(false)}>
                        Project
                      </NavLink>
                      <NavLink to="/contact" className="title-bold item-menu" onClick={() => setIsOpen(false)}>
                        Contact
                      </NavLink>
                  </div>
            </div>

            <div className="simple-contact">
              <h3 className='small-title'>hello@apriapps.com</h3>
              <h3 className='small-title'>+255(0)785492267</h3>
              <h3 className='small-title'>2519 new st,Moshi Kilimanjaro TZ</h3>
            </div>

            <div className="social-links">
              <a className='small-title' href="">linkedln</a>
              <a className='small-title' href="">facebook</a>
              <a className='small-title' href="">twitter</a>
              <a  className='small-title' href="">dribble</a>
            </div>

            <div className="background-shadow"></div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
