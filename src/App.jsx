import React,{useRef,useEffect} from 'react';
import gsap from 'gsap'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Service from "./pages/service/Service";
import ScrollToTop from './components/scrollToTop';
import { ReactLenis } from 'lenis/react'

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
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </>

  );
}

export default App;

