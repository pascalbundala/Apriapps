import React, { useState, useEffect,useRef,useMemo } from 'react';
import './hero.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);
import useMediaQuery from '../../../components/useMediaQuery';
import FadeText from '../../../components/FadeText'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef()
  const { mouse, viewport } = useThree()

  const particlesPosition = useMemo(() => {
    const particlesCount = 5000
    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15
    }

    return positions
  }, [])

  useFrame(() => {
    if (!pointsRef.current) return

    const targetX = mouse.x * viewport.width * 0.2
    const targetY = mouse.y * viewport.height * 0.2

    pointsRef.current.position.x = THREE.MathUtils.lerp(
      pointsRef.current.position.x,
      targetX,
      0.05
    )

    pointsRef.current.position.y = THREE.MathUtils.lerp(
      pointsRef.current.position.y,
      targetY,
      0.05
    )
    // subtle floating motion
    pointsRef.current.rotation.y += 0.0005
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.01}
        color="#d0d0d0"
        sizeAttenuation
        transparent
        opacity={0.3}
        depthWrite={false}
      />
    </points>
  )
}




const Hero = () => {
      const isMobile=useMediaQuery("(max-width:768px)");
      const [time, setTime] = useState("");

      useEffect(() => {
        const updateTime = () => {
          const currentTime = new Date().toLocaleTimeString("en-US", {
            timeZone: "Africa/Dar_es_Salaam",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });
          setTime(currentTime);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
      }, []);

  return (
    <div className="hero flex column padding-space ">
            <div className="span-list flex row center ">
              <span>Design</span>
              <span>Websites</span>
              <span>Software Development</span>
              <span>Digital solutions </span>
            </div>

            <FadeText>
            <h1 className="larger-h1">
              <span className='white-span'>Digital</span> Excellence,<br/>Powerful <span className='white-span'>Results</span>.
            </h1>
            </FadeText>

            <div className="scroll ">
              <div className="scroll-container">
                <span className="scroll-line"></span>
              </div>
            </div>
          
            <p className='location'>Digital Agency <br/>based in Tz</p>
            <p className='time-location'>{time}</p>
        
          <div className="canvas-container">
              <Canvas className="canvas">
                <Particles />
              </Canvas>
          </div>
    </div>
  )
}

export default Hero
