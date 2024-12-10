import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { motion } from "framer-motion";

// Animation Variants
const slideIn = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Testimonials = () => {
  return (
    <section className="max-container">
      <motion.h3
        variants={slideIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} 
        className="font-palanquin text-center text-4xl font-bold text-slate-400"
      >
        What Our <span className="text-white"> Customers </span> Say?
      </motion.h3>

      <motion.p
        variants={slideIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} 
        className="m-auto mt-4 max-w-lg text-center font-montserrat text-lg text-slate-300"
      >
        Here are some genuine stories from our satisfied customers.
      </motion.p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard {...review} key={review.customerName}/>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
