import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PetsContext from '../../contexts/PetsContext'

const Pet = ({img, vardas, dob, rusis, id, motion, item}) => {
  const API = "http://localhost:3010/gyvunai/" + id;
  const dobFormated = new Date(dob).toLocaleDateString("lt")
  const {petsData, setPetsData} = useContext(PetsContext)

  const handleDelete = async (e) => {
    e.preventDefault()

    try {
      const resp = await fetch(API, {
        method: "DELETE"
      })

      if(resp.ok){
        const newPets = petsData.filter(data => data.id !== id)
        setPetsData(newPets)
       }
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <motion.div className="pet" variants={item} layout="position">
      <img src={img} alt={vardas} className="img" />
      <h2 className="title">{vardas}</h2>
      <div className="dob">{dobFormated}</div>
      <div className="email">{rusis}</div>
      <div className="buttons">
          <Link to={"/logs/" + id} className="button">View log</Link>
          <a onClick={handleDelete} className="button outline">Rado namus</a>
      </div>
  </motion.div>
  )
}

export default Pet