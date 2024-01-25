import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaHeartBroken } from "react-icons/fa";


const PetListHeader = () => {
  return (
    <>
    <section className="conteiner">
      <div className="cards row">
        <div className="card row">
          <div className="card-body">
            <div className="title2">
              <h3>Apie</h3>
            </div>
            <h5>prieglauda gyvuoja nuo 1982. Kiekviena diena padedame rasti uskriaustai likimo širdeliai namus, bet į mūsų rankas jų papuola vis daugiau</h5>
          </div>
        </div>

        <div className="card row">
          <div className="card-body">
            <div className="title2">
              <h3>Kontaktai</h3>
            </div>
            <h5>tel. nr. +37895205415.
              adresas: Liepų gatvė 15, Vilniaus rajonas, Žibučių kaimas. </h5>
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
              skirdami 2%
              banko pavedimu: LT84653739303847 swed </h5>
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
        <h1>IEŠKO NAMŲ</h1>
        <Link className="button" to="/new-pet">Pridėti <FaHeartBroken /></Link>
    </motion.div>
    
    </>
    
  )
}

export default PetListHeader