import { useContact } from "../context/contactContext";
import { Send } from 'lucide-react';
import React, { useRef, useState } from 'react';
import socialAccount from "../data/socialaccount";


const ContactOverlay = () => {
    const { isOpen, closeContact } = useContact();
    const userNameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef =  useRef(null);
    const mobileRef =  useRef(null);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
      username: "",
      message:"",
      mobile:"",
      services: [],
    });

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

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
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value); 
    };

    const validateEmail = (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      //  if (!value) {
      //   setEmailError("Email is required.");
      // } else
      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
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
        <div className="flex row forx">
            <div className="form-c">
              <div className="naemail">
                    <div className='form-group'>
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

                      {errors.username && <small className="small">{errors.username}</small>}
  </div>

                    <div className='form-group' >
                      <input type="email" name="email" id="email" placeholder='E-mail address *' 
                      autoComplete='email' ref={emailRef} tabIndex="2" onChange={handleEmailChange}
                      value={email} />
                        {emailError && <small className="small">{emailError}</small>}
                    </div>
              </div>

              <div className="naemail-mobile">
                    <div className='form-group'>
                      <input
                      type="text"
                      name="mobile" 
                      id="mobile" 
                      placeholder='Whatsapp no'
                      autoComplete='whatsapp no' 
                      ref={mobileRef} 
                      tabIndex="3" 
                      aria-invalid={!!errors.mobile}
                      onChange={handleInputChange}
                      value={formData.username}
                      />
                      {errors.mobile && <small className="small">{errors.mobile}</small>}
                    </div>

              </div>

              <div className="chooselist">
                <h4>Select the services you're interested in. (Optional)</h4>
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
                    Websites development</label>
                  </div>

                  <div className="checkbox-service">
                    <input type="checkbox" id="web-app" value="web application"
    onChange={handleCheckboxChange} />
                    <label htmlFor="web-app">
                      <span className="custom-checkbox"></span>
                      Web apps</label>
                  </div>

                  <div className="checkbox-service">
                    <input type="checkbox" id="android" value="Android"
    onChange={handleCheckboxChange}/>
                    <label htmlFor="android">
                      <span className="custom-checkbox"></span>
                      Android Apps</label>
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
                <textarea id='detail' name='message' rows="20" cols="10" placeholder="Describe project here" autoComplete='off' ref={messageRef} tabIndex="4" onChange={handleInputChange}
                value={formData.message}   aria-invalid={!!errors.message}></textarea>
              </div>

              <p>By clicking the Submit button, you agree to the terms of our Privacy Policy.</p>

              <button type='submit'
                disabled={isSubmitting}
                onClick={handleSubmit}
                className='linkTo'>
                  <h4> {isSubmitting ? "Submitting..." : "Send Inquiry"}</h4>
                <Send className="lc-icon"/>
              </button>
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
                    {socialAccount.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <a key={index} href={item.link}>
                          <Icon />
                        </a>
                      );
                    })}
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