import { useState, useEffect } from 'react'
import './App.css'
import Toolbar from './components/Toolbar'
import Main from './components/Main'

function App() {
  const [dogs, setDogs] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [breed, setBreed] = useState({
    id: "",
    name: "",
    description: "",
    temperament: "",
    origin: ""
  });

  useEffect(() => {
    setLoading(true)
    const loadApiData = async () => {
      try {
        const response = await fetch("https://api.thedogapi.com/v1/breeds");
        const json = await response.json();
        setDogs(json)

      } catch (e) {
        throw new Error("Error al cargar la informacion");
      }
    };
    loadApiData()
    setLoading(false);
  }, []);

  function selectBreed (e) {
    if (dogs.length < 0 ) return null
    const findBreed = dogs.find(dog => dog.name === e.target.value)
    setBreed(findBreed)
    setShowInfo(true);
  };

  return (
    <>
      <h2 className='app-title'>Dog wiki</h2>
      { loading
      ? (
        <p>Loading</p>
      )
      : (
        <>
          <Toolbar dogs={dogs} selectBreed={selectBreed} />
          <Main breed={breed} showInfo={showInfo}/>
        </>
        )
      }
    </>
  )
}

export default App
