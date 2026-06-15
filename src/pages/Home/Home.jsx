import Navbar from "../../components/navbar/Navbar";
import Hero from './hero/hero'
import Welcome from './welcome/welcome'
import Testmonial from './testmonial/Testmonial'
import Partner from './partner/Partner'
import Footer from './../../components/footer/Footer'
import ProjectList from './project/ProjectList'
import Service from './service/service'
import Expection from "./expection/Expection";
import Form from "./../../components/form/Form";


const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>  
        <Welcome/>
        <ProjectList/>
        <Service/>
        <Expection/>
        <Partner/>
        <Testmonial/>
        <Form/>
        <Footer/>
    </>
  );
};

export default Home;
