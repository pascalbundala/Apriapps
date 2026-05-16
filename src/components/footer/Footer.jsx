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
    <div className='footer '>

      <div className="x-footer padding-space">
        <div className="xx">
          <img src="/src/assets/logo-white.png" alt="" />
           <h3 className='title-bold-extra'>Let's work <br/> together.</h3>
        </div>

        <div className="x-fed">
          <div className="x-feds-o">
                  <div className="f-links">
                    <h3 className='small-title'>About us</h3>
                    <h3 className='small-title' >work </h3>
                    <h3 className='small-title' >service </h3>
                    <h3 className='small-title' >Carrier </h3>
                  </div>

                  <div className="flex column contact-office">
                      <div className="office">
                        <h3 className='fade-title'>Email </h3>
                        <h3 className='small-title-large' >hello@apriapps.com </h3>
                      </div>
                      
                      <div className="office">
                        <h3 className='fade-title'>office-mobile</h3>
                        <h3 className='small-title-large' >+255(0) 785-492-267 </h3>
                      </div>
                  </div>
          </div>
          
          <div className="x-feds">
            <p className='small-title'>Subscribe to our newsletter</p>
            <input className='subscribe' type="text" />
            <p className='small-title'>Press enter to subscribe to our newsletter & <br/>agree to our privacy policy</p>
          </div>
        </div>
      </div>
      
      <div className="footer-end padding-space">
        <div className="f-end">
          <h6 className='small-title'>@{currentYear} All rights reserved</h6>
        </div>

        <div className="f-social">
          {
            socialAccount.map((account,id)=>( 
            <a className='small-title' key={id}  href={account.link} target="_blank" rel="noopener noreferrer">{account.name}</a>
          ))
          }
        </div>
      </div>

      <div className="legal padding-space">
        <a className='small-title' href="" target="_blank" rel="noopener noreferrer" >privacy policy</a>
        <a className='small-title' href="" target="_blank" rel="noopener noreferrer">cookie policy</a>
      </div>

      <div className="amexs">
        <h2>APRIAPPS</h2>
      </div>

      <div className="shadow">
      </div>
      
    </div>
  )
}

export default Footer
