import React from 'react';
import './footer.css';
import { Instagram,Facebook,Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <h3>Let get connected</h3>

      <h4 className='footer-title'>+255(0)785-492-267</h4>
      <h4 className='footer-title'>friends@apriapps.com</h4>

      <ul className="social-account">
        <li><a href="https://www.instagram.com/14apriapps/"  
        target="_blank"
        rel="noopener noreferrer"
        ><Instagram className='social-icon' /></a></li>
         <li><a href="https://www.facebook.com/14apriapps/"  
         target="_blank"
         rel="noopener noreferrer"
         ><Facebook className='social-icon' /></a></li>
          <li><a href="www.linkedin.com/in/apriapps"
         target="_blank"
         rel="noopener noreferrer"><Linkedin className='social-icon'/></a></li>
      </ul>

      <div className="footer-end">
        <h4> &copy;{currentYear} Apriapps</h4>
        <div className="extra">
            <a href="http://">Carrier</a>
            <a href="http://">Privacy</a>
            <a href="http://">Terms</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
