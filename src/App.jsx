import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/logo.svg'
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
      <header className='header'>
        <img className='app-logo' src={logo} alt='dog logo' />
        <h2 className='app-title'>Dog wiki</h2>
      </header>
      <main>
        { loading
        ? (
            <p className='loading-message'>Loading</p>
          )
          : 
          (
            <>
              <Toolbar dogs={dogs} selectBreed={selectBreed} />
              <Main breed={breed} showInfo={showInfo}/>
            </>
          )
        }
      </main>
    </>
  )
}

export default App
