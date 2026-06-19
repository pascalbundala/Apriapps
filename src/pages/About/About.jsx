import Navbar from "../../components/navbar/Navbar";
import './about.css';
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";

const sts=[{no:"08", name:"years"},{no:"12", name:"projects"},{no:"120", name:"clients"},{no:"12", name:"countries"},]

const partners=['/partner/deloitte-1.svg','/partner/google-1.svg','/partner/nasa-6.svg','/partner/trustpilot-1.svg','/partner/database-labs.svg']

const images=['/office/office-code.jpg','/office/office.jpg','/office/swimming.jpg','/office/puto.jpg']

const why=[{name:"Strategy Solutions",p:"We take time to understand your business goals before writing a single line of code. Every project is built with purpose, clarity and measurable outcomes in mind."},{name:"Focused Design",p:"Great products are built for people. Our UI/UX approach ensures intuitive experiences, clean interfaces, and seamless interactions across all devices."},{name:"Partnership Mindeset",p:"We go beyond project delivery. ApriApps acts as a technology partner, providing ongoing support, optimization, and continuous improvement."},{name:"Transparent collaboration",p:"Clear communication, defined timelines, and honest feedback are core to how we work. You stay informed and involved at every stage."},]

const skills=['reactjs','tailwinds','css3','javascript','PHP','html5','Gsap','ThreeJs','Laravel','flutter','API','firebase','Mysql','UX Design','UI Design','Web Design','visual identity','visual direction'];

const tools=['figma','vscode']

const Home = () => {
  return (
    <div className="g-holder abt" >
        <Navbar/>

        <h1 className="larger-h1">
          The Fusion of Strategy, Creativity and Technology.
        </h1>

        <p className="small-title">We craft digital experiences that connect ideas with people. We are working with clients  worldwide, we design and build meaningful digital products that inspire growth and create impact,Blending creativity, technology and strategy.
        </p>

        <div className="why">
            <div className="img-container about-image ">
              <img src="/images/office.jpg" alt="" />
            </div>  
            <div className="strgt padding-space">
                {
                  why.map((y,i)=>(
                  <div className="reas" key={i}>
                      <h3>{y.name}</h3>
                      <p>{y.p}</p>
                </div>))
                }
            </div>
        </div>

        <div className="team padding-space">
          <p className="title-bold-extra">
            Direct collaboration<br/> and strategic Team.</p>
           <div className="team-list">
              <div className="team-container">
                  <img src="images/pass.jpeg" alt="" />
                  <div className="team-detail">
                        <h3>Pascal Bundala</h3>
                        <h4>Ceo & Founder</h4>
                  </div>
              </div>
           </div>
        </div>

        <div className="phil padding-space">
            <div className="flex row space-between">

                <p className="title-bold-extra">
                  Every digital product.
                </p>

                <p className="small-title">
                  Design does not end with websites and apps for me. I am also interested in 3D, motorsport, visual experiments, and personal projects where I can explore ideas without a client brief.
                  One of these projects was a fan-made 3D printed Formula 1 model inspired by Red Bull Racing, created as my final school project. It took over 200 hours to build and reached more than 30,000 views after I shared it online.
                  Projects like this remind me why I enjoy design in the first place: the mix of detail, patience, technical problem-solving, and the satisfaction of turning an idea into something real.
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

            <div className="flex row space-between ">
              <div className="tools">
                    <span>skills </span>
                  <ul>
                    {
                      skills.map((skill,index)=>{
                          return <li key={index}>{skill}</li>
                      })
                    }
                  </ul>
              </div>
            </div>
        </div>
        <Form/>
        <Footer/>
        
    </div>
  );
};

export default Home;
