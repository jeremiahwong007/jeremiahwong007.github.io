import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import NavBar from '../NavBar';
import About from '../About'
import Projects from '../Projects';
import Experience from '../Experience';
import ScrollButton from '../ScrollButton';

const MouseModifier = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })

      var vinyl = document.getElementById("rainbowVinyl");
      var vinylX = vinyl.offsetLeft+ vinyl.offsetWidth/2;
      var vinylY = vinyl.offsetTop + vinyl.offsetHeight/2;
      var dX = vinylX - e.clientX;
      var dY = vinylY - e.clientY;
      var degree = Math.atan(- dX / dY) * 180 / Math.PI;
      if (dY > 0){degree += 180}

      vinyl.style.transform = "rotate("+degree+"deg)" 
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "purple",
      mixBlendMode: "screen",
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <>  
        <div className='pb-40'>
            <NavBar textEnter={textEnter} textLeave={textLeave} />
            
            <About textEnter={textEnter} textLeave={textLeave} />
            
            <Experience textEnter={textEnter} textLeave={textLeave}/>

            <Projects textEnter={textEnter} textLeave={textLeave}/>
            <ScrollButton />
            <motion.div
                className='cursor'
                variants={variants}
                animate={cursorVariant}
            />
        </div>
    </>

  );
}

export default MouseModifier;