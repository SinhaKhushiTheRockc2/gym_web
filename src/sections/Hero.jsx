import { bodybuilder } from "../assets/images";
import { motion } from "framer-motion";

// Framer Motion animation for Hero section
const BodyBuilder = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: [null, 1.1, 1],
    transition: { duration: 1.5 },
  },
};

const HeroText = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.7 },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container items-center"
    >
      <motion.div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x max-xl:mt-[-5px] mt-[-50px]"
        variants={HeroText}
        initial="hidden"
        whileInView="visible"  
        viewport={{ once: false, amount: 0.3 }}  
      >
        <motion.h1
          className="text-slate-100 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
          variants={HeroText}
        >
          Track Your Fitness Journey
        </motion.h1>
        <motion.p
          className="text-slate-300 mt-10"
          variants={HeroText}
        >
          Discover the ultimate fitness companion with{" "}
          <span className="text-white text-lg font-semibold">GymFluencer</span>. Effortlessly log your workouts, count
          reps, and track calories burned. Stay motivated and achieve your goals with our user-friendly interface.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative xl:min-h-screen bg-primary bg-hero bg-cover bg-center max-md:mt-[-100px]"
        initial="hidden"
        whileInView="visible"  
        viewport={{ once: false, amount: 0.3 }}  
      >
        <motion.img
          src={bodybuilder}
          alt="body builder"
          className="img-shadow h-[550px] relative object-contain max-lg:h-[600px]"
          variants={BodyBuilder}
        />
      </motion.div>
    </section>
  );
};

export default Hero;

