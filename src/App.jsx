// import React from 'react'
// import Hero from './components/hero/hero'
// import Welcome from './components/welcome/welcome'
// import Officer from './components/officer/Officer'
// import Largeimg from './components/largeImage/Largeimg'
// import Testmonial from './components/testmonial/Testmonial'
// import Partner from './components/partner/Partner'
// import Form from './components/form/Form'
// import Footer from './components/footer/Footer'
// import ProjectList from './components/project/ProjectList'
// import Service from './components/service/service'
// import Navbar from './components/navbar/Navbar'

// const App = () => {
//   return (
//     <div className='app'>
//        <Navbar/>     
//        <Hero/>  
//        <Welcome/>
//        <ProjectList/>
//        <Service/>
//        <Largeimg/>
//        <Testmonial/>
//        <Partner/>
//        <Form/>
//        <Footer/>
//     </div>
//   )
// }

// export default App


import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
