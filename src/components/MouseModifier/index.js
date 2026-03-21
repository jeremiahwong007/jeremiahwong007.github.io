import { useEffect } from 'react';
import './styles.css';
import About from '../About'
import Projects from '../Projects';
import Experience from '../Experience';
import ScrollButton from '../ScrollButton';
import ShowOnScroll from '../ShowOnScroll';

const MouseModifier = () => {
  useEffect(() => {
    const mouseMove = e => {
      var vinyl = document.getElementById("rainbowVinyl");
      if (!vinyl) return;
      var rect = vinyl.getBoundingClientRect();
      var vinylX = rect.left + rect.width / 2;
      var vinylY = rect.top + rect.height / 2;
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

  const textEnter = () => {};
  const textLeave = () => {};

  return (
    <div className='relative z-10 pb-40'>
        <ShowOnScroll landing={true}>
          <About textEnter={textEnter} textLeave={textLeave} />
        </ShowOnScroll>

        <Experience textEnter={textEnter} textLeave={textLeave}/>

        <ShowOnScroll>
          <Projects textEnter={textEnter} textLeave={textLeave}/>
        </ShowOnScroll>

        <ScrollButton />
    </div>
  );
}

export default MouseModifier;