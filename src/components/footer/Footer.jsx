import React,{useState,useEffect} from 'react';
import './footer.css';

const socialAccount=[{name:"instagram",link:"https://www.instagram.com/apriapps/"},{name:"linkedln",link:""},{name:"facebook",link:"https://www.facebook.com/14apriapps/"},
  {name:"dribble",link:""}
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
            <h3 className='small-title'>About us</h3>
            <h3 className='small-title' >all project </h3>
            <h3 className='small-title' >service </h3>
            <h3 className='small-title' >Career </h3>
        </div>

        <div className="office">
          <h3>+255 (0)785-492-267</h3>
          <h3>hello@apriapps.com</h3>
        </div>

        <div className="f-social">
            {
              socialAccount.map((account,id)=>( 
              <a className='small-title' key={id}  href={account.link} target="_blank" rel="noopener noreferrer">{account.name}</a>
            ))
            }
        </div>
      </div>

      <div className="locs">
        <p>Based in Kilimanjaro City,Tanzania Working Worldwide.</p>
      </div>
      
      <div className="footer-end">
          <h6 className='small-title'>@{currentYear} All rights reserved</h6>
          <div className="legal">
            <a className='small-title' href="" target="_blank" rel="noopener noreferrer" >privacy policy</a>
            <a className='small-title' href="" target="_blank" rel="noopener noreferrer">cookie policy</a>
        </div>
      </div>

    </div>
  )
}

export default Footer
