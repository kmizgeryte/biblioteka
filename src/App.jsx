import "./scss/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PetsListPage from "./pages/PetsListPage"
import NewPetPage from "./pages/NewPetPage"
import { useEffect, useState } from "react";
import PetsContext from "./contexts/PetsContext";
import PetLogsPage from "./pages/PetLogsPage";
import NewLogPage from "./pages/NewLogPage";
import Header from "./components/Global/Header";
import Footer from "./components/Global/Footer";

function App() {
  const API = "http://localhost:3010/gyvunai"
  const [petsData, setPetsData] = useState()
  const contextValue = {petsData, setPetsData}

  useEffect(() => {
    const fetchPets = async () => {
      const resp = await fetch(API)
      const json = await resp.json()
      setPetsData(json)
    }

    fetchPets()
  }, [])

  return (
    <>  
    <PetsContext.Provider value={contextValue}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<PetsListPage/>}/>
          <Route path="/new-pet" element={<NewPetPage/>}/>
          <Route path="/logs/:id" element={<PetLogsPage/>}/>
          <Route path="/logs/:id/new-log" element={<NewLogPage/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
      </PetsContext.Provider>
    </>
  )
}

export default App
