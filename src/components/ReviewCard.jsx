import { star } from "../assets/icons";
import { motion } from "framer-motion";

// Animation for review card
const testimonial = {
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

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <motion.div
      className="flex justify-center items-center flex-col img-shadow"
      variants={testimonial}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: false, amount: 0.3 }} 
    >
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover"
        width={120}
        height={120}
      />
      <p className="mt-6 max-w-sm text-center text-slate-200 font-montserrat">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating"
          width={25}
          height={25}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-200">{rating}</p>
      </div>
      <h3 className="text-3xl mt-1 font-palanquin font-bold text-center text-white">
        {customerName}
      </h3>
    </motion.div>
  );
};

export default ReviewCard;
