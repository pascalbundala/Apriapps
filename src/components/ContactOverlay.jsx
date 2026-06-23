import { FacebookIcon, InstagramIcon,Linkedin,TwitterIcon} from "lucide-react";
import { useContact } from "../context/contactContext";
import React, { useRef, useState } from 'react';

const socialAccount=[
    {icon:<InstagramIcon/>,link:"https://www.instagram.com/apriapps/"},
    {icon: <FacebookIcon/>,link:"https://www.facebook.com/14apriapps/"},
    {icon: <TwitterIcon/>,link:"https://www.facebook.com/14apriapps/"},
    {icon:<Linkedin/>,link:"https://www.instagram.com/apriapps/"},
]

const ContactOverlay = () => {
    const { isOpen, closeContact } = useContact();
    const userNameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef =  useRef(null);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      message:"",
      services: [],

    });

    if (!isOpen) return null;

    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;

      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
  
        setErrors((prev) => ({ ...prev, [name]: "" }));
      };
  
  
      const validate = (data) => {
        const errs = {};
  
        if (!data.username.trim()) {
          errs.username = "Name is required";
        }
  
        if (!data.email) {
          errs.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
          errs.email = "invalid email";
        }
  
        if (!data.message) {
          errs.message = "Message is required";
        } 
  
        return errs;
      };
  
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
  
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
  
        try {
          setIsSubmitting(true);
          await new Promise((res) => setTimeout(res, 1500));
  
          console.log(formData);

          setFormData({ username: "", email: "", message: "" });
          setErrors({});
        
        } finally {
          setIsSubmitting(false);
        }
      };

  return (
    <div className="overlay" onClick={closeContact}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="intro-close">
            <h3>please fill the form</h3>
            <button onClick={closeContact}>✕</button>
        </div>

        <div className="flex row">
            <div className="form-c">

                    <div className="naemail">
                          <div className='form-group'>
                            {errors.username && <small className="small">{errors.username}</small>}
                            <input
                            type="text"
                            name="username" 
                            id="username" 
                            placeholder='Name*'
                            autoComplete='name' 
                            ref={userNameRef} 
                            tabIndex="1" 
                            aria-invalid={!!errors.username}
                            onChange={handleInputChange}
                            value={formData.username}
                            />
                          </div>

                          <div className='form-group' >
                            {errors.email && <small className="small">{errors.email}</small>}
                            <input type="email" name="email" id="email" placeholder='E-mail address *' 
                            autoComplete='email' ref={emailRef} tabIndex="2" onChange={handleInputChange}
                            value={formData.email}  aria-invalid={!!errors.email} />
                          </div>
                    </div>

                    <div className="chooselist">
                      <h4>choose the service</h4>
                      <div className="list-choice">

                        <div className="checkbox-service">
                          <input type="checkbox" id="branding" value="Branding"
          onChange={handleCheckboxChange} />
                          <label htmlFor="branding">
                            <span className="custom-checkbox"></span>
                            branding
                          </label>
                        </div>

                        <div className="checkbox-service">
                          <input type="checkbox" id="design" value="design"
          onChange={handleCheckboxChange} />
                          <label htmlFor="design">
                            <span className="custom-checkbox"></span>
                            Design</label>
                        </div>
                        
                        <div className="checkbox-service">
                          <input type="checkbox" id="website" value="website"
          onChange={handleCheckboxChange} />
                          <label htmlFor="website">
                          <span className="custom-checkbox"></span>
                          Website</label>
                        </div>

                        <div className="checkbox-service">
                          <input type="checkbox" id="web-app" value="web application"
          onChange={handleCheckboxChange} />
                          <label htmlFor="web-app">
                            <span className="custom-checkbox"></span>
                            Web app</label>
                        </div>

                        <div className="checkbox-service">
                          <input type="checkbox" id="android" value="Android"
          onChange={handleCheckboxChange}/>
                          <label htmlFor="android">
                            <span className="custom-checkbox"></span>
                            Android App</label>
                        </div>
                        
                        <div className="checkbox-service">
                          <input type="checkbox" id="ios-app" value="ios"
          onChange={handleCheckboxChange} />
                          <label htmlFor="ios-app">
                            <span className="custom-checkbox"></span>
                            IOS app</label>
                        </div>

                        <div className="checkbox-service">
                          <input type="checkbox" id="marketing" value="market "
          onChange={handleCheckboxChange} />
                          <label htmlFor="marketing">
                            <span className="custom-checkbox"></span>
                            Marketing</label>
                        </div>

                      </div>
                    </div>



                    <div className='form-group'>
                      {errors.message && <small className="small">{errors.message}</small>}
                      <textarea id='detail' name='message' rows="5" cols="50" placeholder="Describe project here" autoComplete='off' ref={messageRef} tabIndex="3" onChange={handleInputChange}
                      value={formData.message}   aria-invalid={!!errors.message}></textarea>
                    </div>

                    <button type='submit'
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className='button-cta'>
                      {isSubmitting ? "Submitting..." : "Get Quote"}
                    </button>
            </div>

            <div className="space-c">
              <span></span>
            </div>

            <div className="extra-c">
                <div className="contacts">
          <a
              href="https://wa.me/255785492267"
              target="_blank"
              rel="noopener noreferrer"
            >
              +255-785-492-267
            </a>
          <a href="mailto:hello@apriapps.com?subject=Website Inquiry&body=Hello ApriApps,">hello@apriapps.com</a>
                </div>
                <div className="socials">
                    {
                        socialAccount.map((account,id)=>( 
                        <a key={id}  href={account.link} target="_blank" rel="noopener noreferrer">{account.icon}</a>
                        ))
                        }
                </div>

                <div className="address">
                    New Street 2519,Moshi-Kilimanjaro,Tanzania.
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ContactOverlay;