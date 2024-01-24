import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion';

const NewLogPage = () => {
    const {id} = useParams()
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("");
    const [petName, setPetName] = useState("");

    const API = "https://vetbee-backend.glitch.me/v1/logs/"
    const navigate = useNavigate()

    const fetchNameData = async () => {
      const resp = await fetch("https://vetbee-backend.glitch.me/v1/pets/" + id)
      const json = await resp.json()
      setPetName(json.name)
    }
  
    useEffect(() => {
      fetchNameData()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const logData = {
                pet_id: id,
                description,
                status
            };

            if(!description || !status) return alert("Užpildykite visus laukelius");

            const resp = await fetch(API, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json" 
                },
                body: JSON.stringify(logData)
              });
          
              console.log(resp)
              if (resp.ok) {
                navigate("/logs/" + id)
              }

        } catch(error) {
            console.log(error)
        }
    }


    const handleChange = (e) => {
        const {name, value} = e.target
  
        switch(name) {
          case "status": setStatus(value); break;
          case "description": setDescription(value); break;
        }
    }

  return (
    <motion.div 
      className='form-container'
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3
      }}
    >
        <h1>Add {petName} Log</h1>
        <form onSubmit={handleSubmit}>
            <label>Status</label>
            <input onChange={handleChange} type="text" name='status' placeholder='Huberium Celliulitus' autoComplete="off"/>

            <label>Description</label>
            <textarea onChange={handleChange} name="description" placeholder="Removed some fat..."></textarea>

            <div className="buttons">
              <button className="button">Add Pet</button>
              <Link to={"/logs/" + id} className="button outline">Go back</Link>
            </div>
        </form>
    </motion.div>
  )
}

export default NewLogPage