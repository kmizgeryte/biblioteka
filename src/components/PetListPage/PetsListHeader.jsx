import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaHeartBroken } from "react-icons/fa";
import { useForm } from 'react-hook-form';


const VolunteerForm = ({ closeModal }) => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3010/savanoriai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Įvyko klaida saugant informaciją.');
      }

      closeModal(); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
        <form onSubmit={handleSubmit(onSubmit)}>
      
      <input {...register('Vardas', { required: true })} placeholder="Vardas" /><br/>
      <input {...register('Pavardė', { required: true })} placeholder="Pavardė" /><br/>
      <input {...register('Gimimo data', { required: true })} placeholder="Gimimo data" /><br/>
      <input {...register('Telefono numeris', { required: true })} placeholder="Telefono numeris" /><br/>
      <input {...register('elPastas', { required: true })} placeholder="El. paštas" /><br/>
      

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button className='button' type="submit">Siųsti</button>
    </form>  
   
  );
};





  const PetListHeader = () => {
    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Įvykdykite veiksmus, kai forma pateikiama
    };
  return (
    <>
    <section className="conteiner">
      <div className="cards row">
        <div className="card row">
          <div className="card-body">
            <div className="title2">
              <h3>Apie</h3>
            </div>
            <h5>Prieglauda gyvuoja nuo 1992. Didžiuojames galėdami padėti mažiesiems draugams.
              Kiekviena diena padedame rasti nuskriaustai 
              likimo širdeliai namus, bet į mūsų rankas
               jų papuola vis daugiau ir daugiau.. </h5>
          </div>
        </div>

        <div className="card row">
          <div className="card-body">
            <div className="title2">
              <h3>Kontaktai</h3>
            </div>
            <h5>Tel. nr. +37895205415.
              adresas: Liepų gatvė 15, Vilniaus rajonas, Žibučių kaimas. 
              El. paštas duzusios.sirdeles@gmail.com</h5>
          </div>
        </div>

        <div className="card row">
          <div className="card-body">
            <div className="title2">
              <h3>Savanoriams</h3>
            </div>
            <h5>Mūsų pagrindas, savanoriškas darbas: tad kviečiame prisijungti prie mūsų. Galite priziureti vien šunis arba kates, ar pabuti su egzotiniais.  </h5>
            
          </div>
        </div>

        <div className="card row">
          <div className="card-body">
            <div className="title2">
              <h3>Laikina globa</h3>
            </div>
            <h5>Gyvūnų tiek daug, kad savo patalpose visų sutalpinti fiziškai nepajėgemia, Tad prašome tų kurie gali mums padėti priziurėti, kol surasime namus. prasome susisiekti su: Dovile +370 04724505 </h5>
          </div>
        </div>

        <div className="card row">
          <div className="card-body">
            <div className="title2">
              <h3>Parama</h3>
            </div>
            <h5>Parama galite skirti:
              skirdami 2% arba pervesti norimą sumą.
              Pavadinimas: VšĮ „Dužusios širdelės“
              Įmonės kodas: 301536872
              Sąskaita: LT837300010106209100
              Bankas: AB „Swedbank“
              SWIFT/BIC kodas: HABALT22.
              Arba paremti gyvūnui reikiamomis priemonėmis ar maistu</h5>
          </div>
        </div>
      </div>
    </section>
    <motion.div 
    className='pets-header'
    initial={{opacity: 0, y: -20}}
    animate={{opacity: 1, y: 0}}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    >
        <h1><i>IEŠKO NAMŲ</i> <div>&#128149;</div></h1>
        <button className="button" onClick={openModal}>
    noriu savanoriauti
  </button>
 

  {modalOpen && (
    <div className="modal">
      <VolunteerForm closeModal={closeModal} />
      <button className="close-modal" onClick={closeModal}>
        Uždaryti
      </button>
      </div>
  )}
        <Link className="button" to="/new-pet">Pridėti <FaHeartBroken /></Link>
    </motion.div>
    
    </>
    
  )
}

export default PetListHeader