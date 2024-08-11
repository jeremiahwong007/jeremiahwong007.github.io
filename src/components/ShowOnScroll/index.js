import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ShowOnScroll = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const animationVariables = {
    visible: { opacity: 1, x: 0, transition: { duration: props.landing ? 2 : 1 } },
    hidden: { opacity: 0, x: props.landing ? "" : "-10vw"}
  };
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariables}
    >
        {props.children}
    </motion.div>
  );
}

export default ShowOnScroll;

