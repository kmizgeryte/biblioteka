import React, { useContext, useEffect, useState } from 'react'
import Logs from '../components/PetLogsPage/Logs'
import { useParams } from 'react-router-dom'
import PetLogsHeader from '../components/PetLogsPage/PetLogsHeader'
import Header from '../components/Global/Header'
import Footer from '../components/Global/Footer'

const PetLogsPage = () => {
  const {id} = useParams()
  const [logsData, setLogsData] = useState([]);
  const [petName, setPetName] = useState("");

  const fetchNameData = async () => {
    const resp = await fetch("https://vetbee-backend.glitch.me/v1/pets/" + id)
    const json = await resp.json()
    setPetName(json.name)
  }

  const fetchLogs = async () => {
    const resp = await fetch("https://vetbee-backend.glitch.me/v1/logs/" + id)
    const json = await resp.json()
    setLogsData(json)
  }

  useEffect(() => {
    fetchNameData()
    fetchLogs()
  }, [])


  return (
      <div className="pet-logs">
        <PetLogsHeader petName={petName} id={id} />
        <Logs logsData={logsData} />
      </div>
  )
}

export default PetLogsPage