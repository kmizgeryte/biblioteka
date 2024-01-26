import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PetLogsHeader from '../components/PetLogsPage/PetLogsHeader';

const PetLogsPage = () => {
  const { id } = useParams();
  const [gyvunas, setGyvunas] = useState(null);
  const [aprasymai, setAprasymai] = useState([]);

  useEffect(() => {
    // Užklausos gyvuno informacijai gauti
    fetch(`http://localhost:3010/gyvunai/${id}`)
      .then((response) => response.json())
      .then((gyvunasData) => setGyvunas(gyvunasData))
      .catch((error) => console.error('Klaida gaunant gyvuno informaciją:', error));

    // Užklausos aprašymų sąrašui gauti
    fetch(`http://localhost:3010/aprasymas?gyvunaiId=${id}`)
      .then((response) => response.json())
      .then((aprasymaiData) => setAprasymai(aprasymaiData))
      .catch((error) => console.error('Klaida gaunant aprašymus:', error));
  }, [id]);

  const handleDelete = async (aprasymoId) => {
    try {
      const response = await fetch(`http://localhost:3010/aprasymas/${aprasymoId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        
        setAprasymai((prevAprasymai) => prevAprasymai.filter((aprasymas) => aprasymas.id !== aprasymoId));
      } else {
        console.error('Klaida šalinant aprašymą:', response.status);
      }
    } catch (error) {
      console.error('Klaida šalinant aprašymą:', error.message);
    }
  };

  return (
    <div className='petLogPage'>
      <div>
      <PetLogsHeader vardas={gyvunas ? gyvunas.vardas : ''} id={id} />
        {/* <Logs logsData={logsData} /> */}
      </div>

    
      {gyvunas && (
       <>
       <h1 style={{ textAlign: 'center' }}>{gyvunas.vardas} 
        &#128149;</h1>
       <img
         src={gyvunas.img}
         alt={gyvunas.vardas}
         style={{ display: 'block', margin: '0 auto', width: '150px', height: 'auto',borderRadius: '20px',}}
       />
     </>
     
      )}
<div className="korteles">
  {aprasymai.length > 0 ? (
        aprasymai.map((aprasymas) => (
          <div className="kortele" style={{ position: 'relative', border: '3px solid #ccc', margin: '5px', padding: '7px', background: 'pink', maxWidth: '200px ', minHeight: '200px'}}  key={aprasymas.id} 
          
          >
            <p style={{padding: '7px'}}> <b> Info: </b> {aprasymas.info}</p>
            <p style={{padding: '7px', overflow: 'hidden', textOverflow: 'ellipsis',  }}> <b> Aprašymas: </b> {aprasymas.apibūdinimas}</p>

            <button style={{ border: '3px solid #ccc', margin: '5px', padding: '7px', background: 'aqua', width: '100px ', position: 'absolute',bottom: '0',left: '50%',transform: 'translateX(-50%)',marginBottom: '10px', }}
             onClick={() => handleDelete(aprasymas.id)}
             onMouseOver={(e) => (e.target.style.background = 'lightblue')}
             > Delete </button>
          </div>
        ))
      ) : (
        <p> Apgailestaujame. Dar nėra informacijos.</p>
      )}
</div>
      
    </div>
  );
};

export default PetLogsPage;
