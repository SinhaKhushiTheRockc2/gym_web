import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Animation for the container
const containerVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

// Animation for child elements
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.2, 
    },
  }),
};

const StepCard = ({ label, subtext, id }) => {
  const [isInView, setIsInView] = useState(false);

  // Check if the element is in the viewport
  const handleScroll = () => {
    const rect = document.getElementById(id).getBoundingClientRect();
    const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
    setIsInView(inView);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id={id}
      className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16 img-shadow"
      variants={containerVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} 
      style={{ opacity: 0, transform: "translateX(-100px)" }}
    >
      <motion.h3
        className="mt-5 font-palanquin text-3xl leading-normal font-bold text-green-300"
        variants={childVariant}
        custom={id}
      >
        {label}
      </motion.h3>

      <motion.p
        className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-100"
        variants={childVariant}
        custom={id}
      >
        {subtext}
      </motion.p>
    </motion.div>
  );
};

export default StepCard;
