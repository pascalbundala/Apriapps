import Navbar from "../../components/navbar/Navbar";
import Hero from './hero/hero'
import Welcome from './welcome/welcome'
// import Officer from './officer/Officer'
import Largeimg from './largeImage/Largeimg'
import Testmonial from './testmonial/Testmonial'
import Partner from './partner/Partner'
import Form from './form/Form'
import Footer from './footer/Footer'
import ProjectList from './project/ProjectList'
import Service from './service/service'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>  
        <Welcome/>
        <ProjectList/>
        <Service/>
        <Largeimg/>
        <Testmonial/>
        <Partner/>
        <Form/>
        <Footer/>
    </div>
  );
};

export default Home;
