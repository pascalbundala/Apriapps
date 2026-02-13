import React,{useState,useRef} from 'react';
import { ArrowUpRight } from 'lucide-react';
import './form.css';
import useMediaQuery from '../../../components/useMediaQuery';

const Form = () => {
  const isMobile =useMediaQuery("(max-width:768px)");
  const userNameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef =  useRef(null)

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
      errs.email = "Invalid email address";
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
    <div className='form'>

        <div className={`container-holder ${isMobile?"flex-column":"flex space-between"}`}>
            <p className="project-title">
            <span></span><br/>
              Are you ready to bring your vision to life?
            </p>
            <p className="small-title">
               Get started right away, simply by providing your contact information here, so we can get back to you regarding your project.
            </p>
        </div>

        <form className="form-form" autoComplete="on" onSubmit={handleSubmit}>

          <div>
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


          <div>
            {errors.email && <small>{errors.email}</small>}
            <input type="email" name="email" id="email" placeholder='Email*' 
            autoComplete='email' ref={emailRef} tabIndex="2" onChange={handleInputChange}
            value={formData.email}  aria-invalid={!!errors.email} />
          </div>
          

          <div>
             {errors.message && <small>{errors.message}</small>}
            <textarea id='detail' name='message' rows="5" cols="50" placeholder="Describe project here..." autoComplete='off' ref={messageRef} tabIndex="3" onChange={handleInputChange}
            value={formData.message}   aria-invalid={!!errors.message}></textarea>
          </div>

            <button type='submit'
              disabled={isSubmitting}
              onClick={handleSubmit}
              className='submit-button'>
               {isSubmitting ? "Submitting..." : "Submit"}
              <ArrowUpRight className='icons-arrow' size={32} strokeWidth={0.5}  />
            </button>
        </form>
      
    </div>
  )
}

export default Form
