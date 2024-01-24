import React from 'react'
import Header from '../components/Global/Header'
import Footer from '../components/Global/Footer'
import PetsList from '../components/PetListPage/PetsList'
import PetListHeader from '../components/PetListPage/PetsListHeader'

const PetsListPage = () => {
  return (
  <>
    <PetListHeader/>
    <PetsList/>
  </>
  )
}

export default PetsListPage