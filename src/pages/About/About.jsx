import Navbar from "../../components/navbar/Navbar";
import './about.css';
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import { Const } from "three/tsl";

const sts=[{no:"08", name:"years"},{no:"12", name:"projects"},{no:"120", name:"clients"},{no:"12", name:"countries"},]

const partners=['/partner/deloitte-1.svg','/partner/google-1.svg','/partner/nasa-6.svg','/partner/trustpilot-1.svg','/partner/database-labs.svg']

const images=['/office/office-code.jpg','/office/office.jpg','/office/swimming.jpg','/office/puto.jpg']

const why=[{name:"Strategy Solutions",p:"We take time to understand your business goals before writing a single line of code. Every project is built with purpose, clarity and measurable outcomes in mind."},{name:"Focused Design",p:"Great products are built for people. Our UI/UX approach ensures intuitive experiences, clean interfaces, and seamless interactions across all devices."},{name:"Partnership Mindeset",p:"We go beyond project delivery. ApriApps acts as a technology partner, providing ongoing support, optimization, and continuous improvement."},{name:"Transparent collaboration",p:"Clear communication, defined timelines, and honest feedback are core to how we work. You stay informed and involved at every stage."},]

const Home = () => {
  return (
    <div className="g-holder abt" >
        <Navbar/>
        <div className="big-image">
              <h1 className="larger-h1">
                The Fusion of Strategy, Creativity and Technology.
              </h1>
        </div>

        <div className="container-holder ">
            <div className="big-title">
              <p className="small-title">We craft digital experiences that connect ideas with people. We are working with clients  worldwide, we design and build meaningful digital products that inspire growth and create impact,Blending creativity, technology and strategy.</p>
            </div>
        </div>

        <div className="why padding-space">
            <div className="img-container img-chess ">
              <img src="/images/office.jpg" alt="" />
            </div>  
            <div className="strategyContainer ">
              <div className="why-uss">

                {
                  why.map((y,i)=>(<div className="reas" key={i}>
                  <h3 className="title-bold-extra" >{y.name}</h3>
                  <p className="small-title">{y.p}</p>
                </div>))
                }

              </div>

            </div>
        </div>

        <div className="team padding-space">

            <p className="title-bold-extra">Direct collaboration, fewer intermediaries, faster execution by transparent support and strategic Team.</p>


           <div className="team-list">
              <div className="team-container">
                  <img src="images/pass.jpeg" alt="" />

                  <div className="container-hover">
                    <div className="inside">
                        <h3>Pascal Bundala</h3>
                        <h4>CEO</h4>
                    </div>

                  </div>
              </div>
           </div>

        </div>

        <div className="phil padding-space">
          <span>WHAT WE BELIEVE</span>

          <p className="title-bold-extra">Every digital product we build must serve a purpose, deliver measurable value, and enhance the user experience.
          </p>

          <div className="statics">
              {
                sts.map((s,index)=>(
                  <div className="st" key={index}>
                    <h4>{s.no}</h4>
                    <p>{s.name}</p>
                  </div>
                ))
              }

          </div>

        </div>

        <div className="industries padding-space">
          <span>industries </span>
          <ul>
            <li>E-Commerce</li>
            <li>Technology</li>
            <li>Lifestyle</li>
            <li>Fashion</li>
            <li>Tourism</li>
            <li>Hospitality</li>
            <li>Beverage</li>
            <li>Real Estate</li>
          </ul>

        </div>

        <div className="office-gallery">
          {
            images.map((image,index)=>(
                <img src={image} alt="" key={index} />
            ))
          }
        </div>

        <div className="partner padding-space">
          <span>partner</span>
          <div className="partners-list">
                {
                  partners.map((logo,index)=>(            
                  <div className="logo" key={index}>
                    <img src={logo} alt="" />
                  </div>))
                }
          </div>

        </div>
        <Form/>
        <Footer/>
        
    </div>
  );
};

export default Home;
