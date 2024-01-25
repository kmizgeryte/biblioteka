// import { useEffect, useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// const NewLogPage = () => {
//   const { id } = useParams();
//   const [info, setInfo] = useState('');
//   const [apibudinimas, setApibudinimas] = useState('');
//   const [vardas, setVardas] = useState('');

//   const API = `http://localhost:3010/gyvunai/${id}/aprasymas`;
//   const navigate = useNavigate();

//   const fetchNameData = async () => {
//     try {
//       const resp = await fetch(`http://localhost:3010/gyvunai/${id}`);
//       if (!resp.ok) {
//         throw new Error('Gyvūno informacija nerasta');
//       }
//       const json = await resp.json();
//       setVardas(json.vardas);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchNameData();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const logData = {
//         info: info,
//         apibudinimas: apibudinimas,
//         gyvunaiId: id,
//       };

//       // if (!apibudinimas || !info) return alert('Užpildykite visus laukelius');

//       const resp = await fetch(API, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(logData),
//       });

//       if (resp.ok) {
//         navigate(`/logs/${id}`);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleChange = (e) => {
//         const { name, value } = e.target;
    
//         switch (name) {
//           case 'info':
//             setInfo(value);
//             break;
//           case 'aprasymas':
//             setApibudinimas(value);
//             break;
//           default:
//             break;
//         }
//       };

//   return (
//     <motion.div
//       className="form-container"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         type: 'spring',
//         stiffness: 260,
//         damping: 20,
//         delay: 0.3,
//       }}
//       >
//              <h1>Add {vardas} Log</h1>
//              <form onSubmit={handleSubmit}>
//                <label>Info</label>
//                <input
//                 onChange={handleChange}
//                 type="text"
//                 name="info"
//                 placeholder="pagrindine info"
//                 autoComplete="off"
//               />
      
//               <label>Aprašymas</label>
//               <textarea onChange={handleChange} name="apibūdinimas" placeholder="kas nutiko ar buvo padaryta"></textarea>
      
//               <div className="buttons">
//                 <button className="button">prideti</button>
//                 <Link to={`/logs/${id}`} className="button outline">
//                   Go back
//                 </Link>
//               </div>
//             </form>
//           </motion.div>
//         );
//       };
      
//       export default NewLogPage;
      
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const NewLogPage = () => {
  const { id } = useParams();
  const [info, setInfo] = useState('');
  const [apibūdinimas, setApibūdinimas] = useState('');
  const [vardas, setVardas] = useState('');
  const navigate = useNavigate();

  const API = `http://localhost:3010/aprasymas`;

  useEffect(() => {
    const fetchGyvunas = async () => {
      try {
        const response = await fetch(`http://localhost:3010/gyvunai/${id}`);
        if (!response.ok) {
          throw new Error('Gyvūno informacija nerasta');
        }
        const gyvunasData = await response.json();
        setVardas(gyvunasData.vardas);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchGyvunas();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const logData = {
        info: info,
        apibūdinimas: apibūdinimas,
        data: new Date().toISOString(),
        gyvunaiId: id,
      };

      if (!apibūdinimas || !info) {
        alert('Užpildykite visus laukelius');
        return;
      }

      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData),
      });

      if (response.ok) {
        navigate(`/logs/${id}`);
      } else {
        console.error('Klaida pridedant įrašą:', response.status);
      }
    } catch (error) {
      console.error('Klaida pridedant įrašą:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'info':
        setInfo(value);
        break;
      case 'apibūdinimas':
        setApibūdinimas(value);
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      }}
    >
      <h1>Pridėti {vardas} įrašą</h1>
      <form onSubmit={handleSubmit}>
        <label>Info</label>
        <input
          onChange={handleChange}
          type="text"
          name="info"
          placeholder="Pagrindinė informacija"
          autoComplete="off"
        />

        <label>Aprašymas</label>
        <textarea
          onChange={handleChange}
          name="apibūdinimas"
          placeholder="Kas nutiko ar buvo padaryta"
        ></textarea>

        <div className="buttons">
          <button className="button">Pridėti</button>
          <Link to={`/logs/${id}`} className="button outline">
            Grįžti atgal
          </Link>
        </div>
      </form>
    </motion.div>
  );
};

export default NewLogPage;
