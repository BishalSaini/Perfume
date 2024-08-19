import React from 'react'
import video from "../assets/video2.mp4"
import { MILESTONES } from '../constants' 
import { motion } from "framer-motion";  

const containerVariants = { 
  hidden: { opacity: 0, y: 20 }, 
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1, 
      staggerChildren: 0.8,
    },
  },
};

const itemsVariants = { 
  hidden: { opacity: 0, x: -20},  
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 },
  },
};

function Milestone() {
  return (
    <div id="milestone">
      <h2 className='mb-12 mt-20 text-center text-4xl font-semibold'>Milestone</h2> 
      <motion.div 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className='mx-auto flex max-w-6xl flex-wrap'> 
        <motion.div  
          variants={itemsVariants}
        className='w-full p-2 sm:w-1/2'> 
        <video className='w-full rounded-lg' autoPlay muted loop playsInline> 
            <source src={video} type="video/mp4" />
        </video>
        </motion.div> 
        <motion.div  
        variants={itemsVariants}
        className='w-full p-4 text-center sm:w-1/2'> 
        <h2 className='mb-4 text-3xl'>{MILESTONES.title}</h2>  
        <span className='mt-4 border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400'>{MILESTONES.milestone}</span> 
        <p className='m-4 p-2 italic'>{MILESTONES.description}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Milestone