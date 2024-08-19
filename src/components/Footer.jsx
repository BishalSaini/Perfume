import React from 'react'; 
import { SOCIAL_MEDIA_LINKS } from '../constants'; 
import { motion } from "framer-motion"; 

function Footer() {
  return (
    <div className='mb-8 mt-20'>
      <div className='flex items-center justify-center'> 
        <motion.figure 
          initial={{opacity:0}} 
          whileInView={{opacity:1}} 
          transition={{duration:1.5, delay:1}}> 
            <div className='mb-2 text-3xl font-bold text-yellow-400'>Fragence</div>
            <div className='mb-10 h-3 w-12 bg-white'></div>
        </motion.figure>
      </div> 
      <div className='flex items-center justify-center gap-8'> 
        {SOCIAL_MEDIA_LINKS.map((link, index) =>( 
            <motion.a  
            initial={{opacity:0}} 
            whileInView={{opacity:1}} 
            transition={{duration:0.2, delay:0.5 * index}}
            key={index} href={link.href} target='_blank' rel="noreferrer"> 
            {link.icon} 
            </motion.a> 
        ))}
      </div> 
      <p className='mt-8 text-center text-sm tracking-wide text-gray-400'> 
        &copy; Fragence. All rights reserved
      </p>
    </div>
  )
}

export default Footer;