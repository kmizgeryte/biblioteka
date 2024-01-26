import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';


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
        
        
      >
        <>
        <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="icon">
        <FaTiktok size={30} />
      </a>
      <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="icon">
        <FaWhatsapp size={30} />
      </a>
      </div>
        <div className="footer">
        Copyright © Dužusios širdelės 2023. All rights reserved.</div>

        </>
      </motion.footer>
    )
  }
 
export default Footer