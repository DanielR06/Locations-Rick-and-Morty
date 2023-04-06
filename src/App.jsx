import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Location from './components/Location/Location';
import ResidentInfo from './components/ResidentInfo/ResidentInfo';
import Footer from './components/Footer';
import { getRandomNumber } from './utils/getRandomNumber';
const App = () => {
  // useStage de el Numero random que va a la Url, la informacion la localizacion obtenida para la api
  const [locationInfo, setLocationInfo] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);
  //url base de la api Rick and Morty
  const baseUrl = `https://rickandmortyapi.com/api/`;
  //Obtener el numero de la localizacion
  const getLocationRandom = () => getRandomNumber(1, 126);

  const loadLocationInfo = async (url) => {
    try {
      const res = await axios.get(url);
      setLocationInfo(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d{0,3}$/.test(inputValue)) {
      setInputValue(inputValue);
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${baseUrl}location/${inputValue}`;
    loadLocationInfo(url);
  };
  useEffect(() => {
    const randomUrl = `${baseUrl}location/${getLocationRandom()}`;
    loadLocationInfo(randomUrl);
  }, []);

  return (
    <div className="App">
      <img src="https://i.ibb.co/WDSHdKy/background-R-M.png" alt="" />
      <h1 className="text-center text-6xl m-4 colo">Wiki Rick and Morty</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe el numero de una ubicacion de 1 a 126"
          className="input__text"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
        <input type="submit" value="Search" className='btn_submit'></input>
      </form>
      {!isInputValid && (
        <p
          style={{
            color: 'red',
            fontSize: '0.8rem',
            marginTop: '5px',
            textAlign: 'center',
          }}
        >
          Ingrese un valor válido entre 1 y 126.
        </p>
      )}
      <section>{locationInfo && <Location {...locationInfo} />}</section>
      <section className="flex flex-wrap gap-10 justify-center mx-3">
        {locationInfo &&
          locationInfo.residents.map((resident) => (
            <ResidentInfo key={resident} urlResident={resident} />
          ))}
        {locationInfo && locationInfo.residents.length === 0 && (
          <p
            style={{
              color: 'gray',
              fontSize: '1rem',
              height: '150px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            No hay habitantes en esta ubicación.
          </p>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default App;
