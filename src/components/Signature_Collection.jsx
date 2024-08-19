import React from 'react';
import { FaCrown } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { FaFeatherAlt } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const technologies = [
  { icon: <FaCrown className="text-7xl text-purple-500" />, name: 'Royal Collection' },
  { icon: <FaGem className="text-7xl text-emerald-500" />, name: 'Gemstone Series' },
  { icon: <FaFeatherAlt className="text-7xl text-pink-500" />, name: 'Feather Touch' },
  { icon: <FaFireAlt className="text-7xl text-red-500" />, name: 'Inferno Collection' },
  { icon: <FaLeaf className="text-7xl text-green-500" />, name: 'Botanical Essence' },
];

function Signature_Collection() {
  return (
    <div className="border-b border-neutral-800 pb-24" id="signature">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Signature Collection
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.5 + index)}
            initial="initial"
            animate="animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
          >
            {tech.icon}
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 bg-opacity-80  opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl">{tech.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Signature_Collection;
