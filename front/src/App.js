import './App.css'
import Cards from './components/Cards/Cards'
import Nav from "./components/Nav";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import style from './components/Form/Form.module.css';
import Footer from './components/Footer/Footer';

function App () {
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const location = useLocation()
  const navigate = useNavigate()

  const username = "agusbus95@gmail.com";
  const password = "123456789"

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate("/home")
    }
  }
  
  useEffect(() => {
    !access && navigate('/') 
  }, [access])

  const onSearch = (character) => {
    
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className='app' style={{ padding: '15px' }}>
    <div className='contentWrap'>
      {location.pathname === '/' ? (
        <>
          <Form login={login} />
          <button onClick={() => setShowHelp(!showHelp)} className={style.helpBtn}>
            <i className="fas fa-info"></i>
          </button>
          {showHelp && (
            <div className={style.helpText}>
              <p>
              <strong>Sign in with</strong><br></br> username: "<b>agusbus95@gmail.com</b>" <br></br>
              password: "<b>123456789</b>".
              </p>
            </div>
          )}
        </>
      ) : (
        <Nav onSearch={onSearch} />
      )}
      <Routes>
        <Route path='favorites' element={<Favorites />}/>
        <Route path='home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='about' element={<About/>} />
        <Route path='detail/:detailId' element={<Detail/>} />
      </Routes>
      </div>
        <Footer />
    </div>
  )
  
}

export default App



