import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Location from './components/Location/Location';
import ResidentInfo from './components/ResidentInfo/ResidentInfo';
import { getRandomNumber } from './utils/getRandomNumber';
const App = () => {
  // useStage de el Numero random que va a la Url, la informacion la localizacion obtenida para la api
  const [locationInfo, setLocationInfo] = useState(null);
  const [residentInfo, setResidentInfo] = useState(null)
  //url base de la api Rick and Morty
  const baseUrl = `https://rickandmortyapi.com/api/`;

  const getLocationRandom = () => getRandomNumber(1, 126);

  const loadLocationInfo = async () => {
    try {
      const res = await axios.get(`${baseUrl}location/${getLocationRandom()}`);
      setLocationInfo(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getResident = async (urlCharacter) => {
    try {
      const res = await axios.get(urlCharacter);
      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadLocationInfo();
  }, []);

  return (
    <div className="h-screen text-white" style={{ backgroundColor: '#0A0D34' }}>
      <img src="https://i.ibb.co/WDSHdKy/background-R-M.png" alt="" />
      {locationInfo && <Location { ...locationInfo } />}
    </div>
  );
};

export default App;
