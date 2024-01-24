import React, { useContext, useEffect, useState } from 'react'
import Pet from './Pet'
import PetsContext from '../../contexts/PetsContext'
import { motion } from "framer-motion"

const PetsList = () => {
  const {petsData} = useContext(PetsContext)
  const [isRendered, setIsRendered] = useState(false)
  
  const listItems = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true)
    }, 300)
  },[])


  return (
    <motion.div 
      className="pets" 
      variants={listItems}
      initial='hidden' 
      animate={isRendered ? "visible" : "hidden"} 
    >
      {petsData && petsData.map((data) =>(
        <Pet 
        img={data.img} 
        id={data.id} 
        vardas={data.vardas} 
        dob={data.dob} 
        rusis={data.rusis} 
        key={data.id}
        motion={motion}
        item={item}/>
      ))}
    </motion.div>
  )
}

export default PetsList