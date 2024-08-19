import React from 'react'
import { TESTIMONIALS } from '../constants' 
import { motion } from "framer-motion"; 

const containerVariants = { 
  hidden: { opacity: 0}, 
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.8,
    },
  },
};

const itemsVariants = { 
  hidden: { opacity: 0, y: 20},  
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 },
  },
};

function Testimonials() {
  return (
    <div id="testimonials" className='container mx-auto mt-20 py-16 tracking-tighter'>
      <h2 className='mb-12 text-center text-4xl font-semibold'> 
        Happy Customer's 
      </h2> 
      <motion.div  
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className='mx-auto max-w-3xl'>  
        {TESTIMONIALS.map((testimonials, index)=>( 
            <motion.div 
            variants={itemsVariants}
            key={index} className='mx-4 mb-8 flex flex-col items-center rounded-lg border border-dotted border-gray-600 p-6 md:flex-row'> 
            <img src={testimonials.image} 
            alt={testimonials.name}  
            className='mb-4 mr-6 h-16 w-16 rounded-full md:mb-0'
            /> 
            <div> 
                <p className='mb-4 italic'>"{testimonials.quote}"</p> 
                <p className='font-bold'>{testimonials.name}</p> 
                <p className='text-gray-400'>{testimonials.title}</p>
            </div>
            </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Testimonials
