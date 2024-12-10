import { motion } from "framer-motion";

const FeatureCard = ({ imgURL, name, content }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full cursor-pointer mt-10">
      <motion.img
        src={imgURL}
        alt={name}
        className="w-[350px] h-[350px] img-shadow mx-auto"
        initial={{ scale: 0 }}
        animate={{ scale: [null, 1.1, 1] }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="mt-2 text-xl text-center leading-normal font-semibold font-palanquin text-white">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat leading-normal text-lg text-center text-slate-400">
        {content}
      </p>
    </div>
  );
};

export default FeatureCard;
