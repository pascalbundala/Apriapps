import React,{useState,useEffect} from 'react';
import './footer.css';

const socialAccount=[{name:"instagram",link:"https://www.instagram.com/apriapps/"},{name:"linkedln",link:""},{name:"facebook",link:"https://www.facebook.com/14apriapps/"},
]
const Footer = () => {
  const currentYear = new Date().getFullYear();

   const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <div className='footer padding-space'>

      <div className="footer-abv">
          <div className="f-links">
            <h3>About us</h3>
            <h3>all project </h3>
            <h3>service </h3>
            <h3>Career </h3>
        </div>

        <div className="office">
          <a
              href="https://wa.me/255785492267"
              target="_blank"
              rel="noopener noreferrer"
            >
              +255-785-492-267
            </a>
          <a href="mailto:hello@apriapps.com?subject=Website Inquiry&body=Hello ApriApps,">hello@apriapps.com</a>
        </div>

        <div className="f-social">
            {
              socialAccount.map((account,id)=>( 
              <a key={id}  href={account.link} target="_blank" rel="noopener noreferrer">{account.name}</a>
            ))
            }
        </div>
      </div>

      <div className="locs">
        <p>Based in Kilimanjaro City,Tanzania Working Worldwide.</p>
      </div>
      
      <div className="footer-end">
          <h6> @{currentYear} All rights reserved </h6>
          <div className="legal">
            <a href="" target="_blank" rel="noopener noreferrer" >privacy policy</a>
            <a href="" target="_blank" rel="noopener noreferrer">cookie policy</a>
        </div>
      </div>

    </div>
  )
}

export default Footer
