// import React, {useEffect,useState} from 'react';
// import { NavLink } from "react-router-dom";
// import './navbar.css';
// import { Menu,X  } from 'lucide-react';
// import useMediaQuery from "../useMediaQuery";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const isMobile = useMediaQuery("(max-width: 768px)");

//   return (

//     <div className='navbar'>

//         <NavLink to="/" className="logo">
//           <img
//             src="/src/assets/logo-bluefade.png"
//             alt="logo for Apriapps"
//             className="img-logo"
//           />
//           <div className="name-app">Apriapps</div>
//         </NavLink>
        
//       {isMobile?
//             <ul className='header'>
//               {isOpen? <X className='menu-icon' onClick={() => setIsOpen(!isOpen)} /> :<Menu className='menu-icon' onClick={() => setIsOpen(!isOpen)} />}

//               <div className={`${isOpen ? "openMenu" : "closedMenu"}`}>
//                 <NavLink to="/about" className="item-menu">About</NavLink>
//                 <NavLink to="/project" className="item-menu">Project</NavLink>
//                 <NavLink to="/contact" className="item-menu">Contact</NavLink>
//               </div>           
//             </ul> 
//               : 
//             <ul className='header'>
//                 <div className='listMenu'>
//                 <NavLink to="/about" className="item-menu">About</NavLink>
//                 <NavLink to="/project" className="item-menu">Project</NavLink>
//                 <NavLink to="/contact" className="item-menu">Contact</NavLink>
//                 </div>           
//             </ul>
//       }
              
//     </div> 

//   )
// }

// export default Navbar



import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';
import { Menu, X } from 'lucide-react';
import useMediaQuery from "../useMediaQuery";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // 🔒 STOP BODY SCROLL WHEN MENU IS OPEN (MOBILE)
useEffect(() => {
  if (!isMobile) return;

  if (isOpen) {
    const scrollY = window.scrollY;
    
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
  } else {
    const scrollY = document.body.style.top;

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  return () => {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
  };
}, [isOpen, isMobile]);


  return (
    <div className='navbar'>
      <NavLink to="/" className="logo">
        <img
          src="/src/assets/logo-bluefade.png"
          alt="logo for Apriapps"
          className="img-logo"
        />
        <div className="name-app">Apriapps</div>
      </NavLink>

      {isMobile ? (
        <ul className='header'>
          {isOpen ? (
            <X className='menu-icon' onClick={() => setIsOpen(false)} />
          ) : (
            <Menu className='menu-icon' onClick={() => setIsOpen(true)} />
          )}

          <div className={`${isOpen ? "openMenu" : "closedMenu"}`}>
            <NavLink to="/about" className="item-menu" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/project" className="item-menu" onClick={() => setIsOpen(false)}>Project</NavLink>
            <NavLink to="/contact" className="item-menu" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </ul>
      ) : (
        <ul className='header'>
          <div className='listMenu'>
            <NavLink to="/about" className="item-menu">About</NavLink>
            <NavLink to="/project" className="item-menu">Project</NavLink>
            <NavLink to="/contact" className="item-menu">Contact</NavLink>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
