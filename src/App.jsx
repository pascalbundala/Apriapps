import React,{useRef,useEffect} from 'react';
import gsap from 'gsap'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Service from "./pages/service/Service";
import ProjectDetails from "./pages/ProjectDetails/Projectdetails";
import ScrollToTop from './components/scrollToTop';
import { ReactLenis } from 'lenis/react';
import ContactOverlay from "./components/ContactOverlay";

function App() {

  const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])

  return (
        <>
            <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/project" element={<Project />} />
              <Route path="/projects/:name" element={<ProjectDetails />} />
            </Routes>
            <ContactOverlay />
        </>

  );
}

export default App;


// function App() {
//   const lenisRef = useRef();

//   useEffect(() => {
//     function update(time) {
//       lenisRef.current?.lenis?.raf(time * 1000);
//     }

//     gsap.ticker.add(update);
//     return () => gsap.ticker.remove(update);
//   }, []);

//   return (
//     <>
//       <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
//       <ScrollToTop />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/project" element={<Project />} />
//       </Routes>

//       {/* GLOBAL OVERLAY */}
//       <ContactOverlay />
//     </>
//   );
// }

// export default App;

