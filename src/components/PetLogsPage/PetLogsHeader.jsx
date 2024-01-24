import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const PetLogsHeader = ({petName, id}) => {
  return (
    <motion.div 
    className="pet-logs-header"
    initial={{opacity: 0, y: -20}}
    animate={{opacity: 1, y: 0}}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.3
    }}
    >
      <h1>{petName && petName}: Health Records</h1>
        <div className="buttons">
          <Link to={`/logs/${id}/new-log`} className="button">Add Log</Link>
          <Link to="/" className="button outline">Go back</Link>
      </div>
    </motion.div>
  )
}

export default PetLogsHeader