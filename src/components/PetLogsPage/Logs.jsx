import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Logs = ({logsData}) => {
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
      className="logs"
      variants={listItems}
      initial='hidden' 
      animate={isRendered ? "visible" : "hidden"} 
    >
    {logsData && logsData.map((log, index) => (
      <motion.div className="log" key={log.id + index} variants={item} layout="position">
        <h2>{log.info}</h2>
        <p>{log.aprasymas}</p>
        {/* <p>{log.data}</p> */}
        <div className="date">{new Date(log.dob).toLocaleDateString("lt")}</div>
      </motion.div>
    ))}
  </motion.div>
  )
}

export default Logs