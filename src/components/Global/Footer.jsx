import { motion } from "framer-motion"

const Footer = () => {
    return (
      <motion.footer
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.7
        }}
      >Copyright © VetBee 2023. All rights reserved.</motion.footer>
    )
  }
  
export default Footer