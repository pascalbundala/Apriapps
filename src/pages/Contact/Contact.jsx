import React, { useState,useRef } from 'react';
import { ArrowRight,Instagram,Facebook,Linkedin } from 'lucide-react';
import Navbar from '../../components/navbar/Navbar';
import'./contact.css';
import Footer from '../../components/footer/Footer';


const Contact = () => {

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef =  useRef(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message:""
  });


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
        errs.email = "Your email is not valid";
      }

      if (!data.message) {
        errs.message = "message is required";
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
    <div>
        <Navbar/>
        <div className="contact-page padding-space">

             <div className="contax">
                  <div className="larger-h1">
                    Contact us
                  </div>
                  <p className='small-title'>
                    Whether you're sketching the blueprint for a groundbreaking project or just want to shoot the breeze about digital possibilities, this is your backstage pass to make it happen. Let's turn the blank page into your next chapter.
                  </p>
             </div>

            <div className="contact-form">
                  <form className="form-form" autoComplete="on" onSubmit={handleSubmit}>
                    <div className='form-group'>
                      {errors.username && <small>{errors.username}</small>}
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
                      {errors.email && <small>{errors.email}</small>}
                      <input type="email" name="email" id="email" placeholder='Email*' 
                      autoComplete='email' ref={emailRef} tabIndex="2" onChange={handleInputChange}
                      value={formData.email}  aria-invalid={!!errors.email} />
                    </div>
                    
                    <div className='form-group'>
                      {errors.message && <small>{errors.message}</small>}
                      <textarea id='detail' name='message' rows="5" cols="50" placeholder="Describe project here..." autoComplete='off' ref={messageRef} tabIndex="3" onChange={handleInputChange}
                      value={formData.message}   aria-invalid={!!errors.message}></textarea>
                    </div>

                    <button type='submit'
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className='button-cta'>
                      {isSubmitting ? "Submitting..." : "Send Inquiry"}
                    </button>

                  </form>

            </div>

            <div className="conetails">
              <h1 className='title-bold-extra'>It's a nice looking web form <br/> but you'd like to speak to a person?</h1>

              <div className="contact-card">
                    <div className="s-contact">
                        <h3>Location</h3>
                        <h4>New Street,2519 <br/> New roadx,Moshi Kilimanjaro.</h4>

                    </div>

                    <div className="s-contact">
                    
                        <h3>Contact Us</h3>
                        <h4>+255 (0)785 49-22-67</h4>
                        <h4>hello@apriapps.com</h4>
                    
                    </div>

                    <div className="s-contact">
                        <h3>Get connected</h3>
                        <div className="connected">
                            <Instagram className='connected-icon' />
                            <Facebook className='connected-icon' />
                            <Linkedin className='connected-icon' />
                        </div>
                    </div>
              </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Contact
