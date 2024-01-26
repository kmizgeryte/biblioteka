import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PetsContext from '../contexts/PetsContext'
import { motion } from 'framer-motion'
import { FaHeartBroken } from "react-icons/fa";
import { GiBrokenHeartZone } from "react-icons/gi";

const NewPetPage = () => {
  
  const [img, setImg] = useState(null) 
      const [vardas, setVardas] = useState("")
      const [dob, setDob] = useState("")
      const [rusis, setRusis] = useState("")
      const navigate = useNavigate()
      const {petsData, setPetsData} = useContext(PetsContext)
      const API = "http://localhost:3010/gyvunai"


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

          const newPetData = {
          img, vardas, dob, rusis
          }

          if( !img || !vardas || !dob || !rusis) return alert("Užpildykite visus laukelius");

          const resp = await fetch(API, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newPetData)
          })
    
          console.log(resp)
          if(resp.ok){
            const fetchPets = async () => {
              const resp = await fetch(API)
              const json = await resp.json()
              setPetsData(json)
            }
        
            fetchPets()
           
            navigate("/")
           }
        } catch(error) {
          console.log(error)
        }
    }


    const handleChange = (e) => {
      const {name, value} = e.target
      switch(name) {
        case "img": setImg(value); break;
        case "vardas": setVardas(value); break;
        case "dob": setDob(value); break;
        case "rusis": setRusis(value); break;
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
      <h1>Pridėti liūdinčia širdele <GiBrokenHeartZone />  </h1>
      <div className=''>


      </div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="img">Paveikslėlis (URL):</label>
      <input onChange={handleChange} type="text" name='img' placeholder='Nuotraukos URL' autoComplete="off" />
          <label htmlFor="vardas">Gyvūno Name:</label>
          <input onChange={handleChange} type="text" name='vardas' placeholder='nežinomas/ Lokiukas' autoComplete="off"/>

          <label htmlFor="dob">Numonoma gimimo data:</label>
          <input onChange={handleChange} type="date" name='dob'  autoComplete="off"/>

          <label htmlFor="rusis">Katė- šuo jei yra veislė:</label>
          <input onChange={handleChange} type="text" name='rusis' placeholder='katė-beveislė' autoComplete="off"/>

          <div className="buttons">
            <button className="button">Pridėti <FaHeartBroken />  </button>
            <Link to="/" className="button outline">Gįžti atgal</Link>
          </div>
      </form>
  </motion.div>
  )
}

export default NewPetPage