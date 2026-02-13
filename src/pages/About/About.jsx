import Navbar from "../../components/navbar/Navbar";
import './about.css';


const techies=[
  {logo:"/brands/figma-icon.svg",name:"figma"},
  {logo:"/brands/android-4.svg",name:"android"},
  {logo:"/brands/java-4.svg",name:"java"},
  {logo:"/brands/css-3.svg",name:"css3"},
  {logo:"/brands/firebase-1.svg",name:"firebase"},
  {logo:"/brands/flutter.svg",name:"flutter"},
  {logo:"/brands/gsap-greensock.svg",name:"gsap"},
  {logo:"/brands/html-1.svg",name:"html5"},
  {logo:"/brands/javascript-1.svg",name:"javascript"},
  {logo:"/brands/laravel-2.svg",name:"laravel"},
  {logo:"/brands/mysql-3.svg",name:"mysql"},
  {logo:"/brands/nodejs-3.svg",name:"nodejs"},
  {logo:"/brands/react-native-1.svg",name:"react"},
  {logo:"/brands/tailwind-css-2.svg",name:"tailwind"},
  {logo:"/brands/threejs-1.svg",name:"threejs"},
  {logo:"/brands/vercel.svg",name:"vercel"},
  {logo:"/brands/github.svg",name:"github"},
  {logo:"/brands/php-4.svg",name:"php"},
  {logo:"/brands/postman.svg",name:"postman"},
  {logo:"/brands/wordpress-icon-1.svg",name:"Wordpress"},

]

const Home = () => {
  return (
    <div >
        <Navbar/>

        <div className="big-title padding-general">
          <span></span>
          <h1>We craft digital experiences that connect ideas with people. We are working with clients  worldwide, we design and build meaningful digital products that inspire growth and create impact,Blending creativity, technology, and strategy.</h1>
        </div>

        <div className="stats padding-general flex row">
          <div className="img-container">
            <img src="/images/office.png" alt="" />
          </div>

          <div className="box-data">

            <div className="x-column">
                <div className="statscard">
                  <h3>project</h3>
                  <p>25</p>
                </div>

                <div className="statscard">
                  <h3>project</h3>
                  <p>25</p>
                </div>

                <div className="statscard">
                  <h3>project</h3>
                  <p>25</p>
                </div>
            </div>

            <div className="x-column">
                <div className="statscard">
                  <h3>project</h3>
                  <p>25</p>
                </div>

                <div className="statscard">
                  <h3>project</h3>
                  <p>25</p>
                </div>

                <div className="statscard">
                  <h3>project</h3>
                  <p>25</p>
                </div>
            </div>



          </div>
        </div>

        <div className="mv">
          <div className="m">
            <span>mission</span>
            <p className="standard-text" >To create human-centered digital experiences that help African and global brands grow, connect, and thrive in the digital era.</p>
          </div>

          <div className="m">
              <span>vision</span>
              <p className="standard-text">To be a creative technology partner that elevates African innovation to a global audience.</p>
          </div>
        </div>

        <div className="why">

            <div className="img-container img-chess ">
              <img src="/images/chess.png" alt="" />
               <span>why  choose us</span>
            </div>  
           
            <div className="strategyContainer ">
              <div className="reas">
                <h3>Strategy-Driven Solutions</h3>
                <p className="standard-text">We take time to understand your business goals before writing a single line of code. Every project is built with purpose, clarity and measurable outcomes in mind.</p>
              </div>

              <div className="reas">
                <h3>User-Focused Design</h3>
                <p className="standard-text">Great products are built for people. Our UI/UX approach ensures intuitive experiences, clean interfaces, and seamless interactions across all devices.</p>
              </div>

              <div className="reas">
                <h3>Long-Term Partnership Mindset</h3>
                <p className="standard-text" >We go beyond project delivery. ApriApps acts as a technology partner, providing ongoing support, optimization, and continuous improvement.</p>
              </div>
              <div className="reas">
                <h3>Transparent Collaboration</h3>
                <p className="standard-text" >Clear communication, defined timelines, and honest feedback are core to how we work. You stay informed and involved at every stage.</p>
              </div>
            </div>
        </div>

        <div className="what-wedo">
          <span>What we do</span>
          <div className="best">
            <div className="service-item">
              <h3>BRANDING</h3>
              <ul>
                <li>Brand Strategy</li>
                <li>Brand Architecture</li>
                <li>Verbal Identity</li>
                <li>Brand Guidelines</li>
                <li>Brand experience</li>
              </ul>
            </div>

            <div className="service-item">
              <h3>UI & UX DESIGN</h3>
              <ul>
                <li>Website Design</li>
                <li>Animations</li>
                <li>Software Design</li>
                <li>Brand Guidelines</li>
                <li>Brand experience</li>
              </ul>
            </div>


          <div className="service-item">
              <h3>DIGITAL PRODUCTS</h3>
              <ul>
                <li>Websites </li>
                <li>Web Application</li>
                <li>Mobile Application</li>
                <li>Custom Software</li>
                <li>APIs & Integration</li>
              </ul>
            </div>


                        <div className="service-item">
              <h3>SEO & MARKETING</h3>
              <ul>
                <li>Brand Strategy</li>
                <li>Brand Architecture</li>
                <li>Verbal Identity</li>
                <li>Brand Guidelines</li>
                <li>Brand experience</li>
              </ul>
            </div>




          </div>
        </div>


        <div className="techstack">
          <span>technologies stack</span>
          <div className="techs">
            {
              techies.map((tech,id)=>(           
              <div className="tech">
              <img src={tech.logo} alt="technology logo" />
              <h3>{tech.name}</h3>
            </div>))
            }
          </div>
        </div>


      
    </div>
  );
};

export default Home;
