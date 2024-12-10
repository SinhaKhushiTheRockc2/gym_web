import { useState, useEffect } from "react";
import { hamburgerIcon } from "../assets/icons";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import Button from "./Button";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Framer Motion animation variants for the navbar
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({ opacity: 1, x: 0, transition: 0.3 * i }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.header
      className={`padding-x py-8 sticky top-0 z-10 w-full transition-colors duration-300 ${
        scrolled ? "bg-zinc-900" : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={navbarVariants}
    >
      <nav className="flex justify-between max-container items-center">
        {/* Logo */}
        <a href="/">
          <motion.h1
            className="text-2xl font-palanquin font-extrabold text-white"
            variants={navItemVariants}
          >
            GymFluencer
          </motion.h1>
        </a>

        {/* Navigation Links */}
        <motion.ul
          className="flex flex-1 justify-center items-center gap-12 max-xl:hidden"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {navLinks.map((navItem, index) => (
            <motion.li
              key={navItem.label}
              variants={navItemVariants}
              transition={{ duration: 0.5 }}
              custom={index}
            >
              <a
                href={navItem.href}
                className="font-montserrat font-semibold text-lg leading-normal text-slate-400 transition-all ease-in-out duration-300 hover:text-white hover:scale-110 inline-block"
              >
                {navItem.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Buttons */}
        <motion.div
          className="flex justify-between items-center gap-10 text-lg font-semibold max-lg:hidden"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button content="Get Started" />
          <Button content="Login" />
        </motion.div>

        {/* Hamburger Icon */}
        <motion.div
          className="hidden max-xl:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <img
            src={hamburgerIcon}
            alt="hamburger icon"
            width={25}
            height={25}
            className="text-white"
          />
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Nav;
