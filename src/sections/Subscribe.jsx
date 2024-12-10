import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

// Animation for Subscribe Section
const subsAnimate = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 padding">
      <motion.h3
        variants={subsAnimate}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold text-slate-400 img-shadow"
      >
        Sign Up for <span className="text-white">Updates</span> and Newsletter
      </motion.h3>

      <motion.div
        variants={subsAnimate}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
      >
        <input
          type="text"
          placeholder="subscribe@gymfluencer"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button content="Sign Up" />
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
