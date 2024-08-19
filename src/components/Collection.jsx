import React from 'react';
import { COLLECTIONS } from '../constants';
import Card from './Card'; 
import { motion } from "framer-motion"; 

const containerVariants = { 
  hidden: { opacity: 0, y: -20 }, 
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.4,
    },
  },
};

const itemsVariants = { 
  hidden: { opacity: 0, y: 20, scale: 0.95 },  
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1, 
    transition: { duration: 0.5 },
  },
};

function Collection() {
  return (
    <div id="collections">
      <motion.h2  
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className='mt-20 text-center text-4xl font-semibold'
      >
        Collections
      </motion.h2> 
      <motion.div 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className='flex flex-wrap justify-center py-8'
      > 
        {COLLECTIONS.map((collection, index) => (
          <motion.div  
            variants={itemsVariants}
            key={index}
            className="p-4"
          > 
            <Card 
              image={collection.image} 
              title={collection.title} 
              subtitle={collection.subtitle} 
              link="#" 
            />
          </motion.div>
        ))} 
      </motion.div> 
    </div>
  )
}

export default Collection;
