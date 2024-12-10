import FeatureCard from "../components/FeatureCard";
import { features } from "../constants";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Features = () => {
  return (
    <section className="max-container mt-[-100px] px-10">
      <motion.div
        className="flex flex-row justify-between items-center gap-5 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
      >
        <motion.h1
          className="text-4xl font-palanquin font-bold text-slate-300"
          variants={cardVariants}
        >
          Discover Our App's Key Features
        </motion.h1>
        <motion.p
          className="text-slate-gray font-montserrat lg:max-w-lg mt-2 text-slate-300"
          variants={cardVariants}
        >
          <span className="font-semibold text-white text-lg">GymFluencer</span>{" "}
          is your ultimate fitness companion, designed to help you track your
          workouts with ease. Our application allows you to log exercises, count
          reps, and calculate calories burned, all through a user-friendly
          interface. Whether you're a beginner or a seasoned athlete, our app
          will keep you motivated and on track.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-16 grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants} viewport={{once:false,amount:index*0.3}}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;

