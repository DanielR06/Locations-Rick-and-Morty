import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Location from './components/Location/Location';
import ResidentInfo from './components/ResidentInfo/ResidentInfo';
import { getRandomNumber } from './utils/getRandomNumber';
const App = () => {
  // useStage de el Numero random que va a la Url, la informacion la localizacion obtenida para la api
  const [locationInfo, setLocationInfo] = useState(null);
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
  useEffect(() => {
    loadLocationInfo();
  },[]);

  return (
    <div className=" text-white w-screen h-full">
      <img src="https://i.ibb.co/WDSHdKy/background-R-M.png" alt="" />
      <section>{locationInfo && <Location {...locationInfo} />}</section>
      <section>
        {locationInfo &&
          locationInfo.residents.map((resident) => (
            <ResidentInfo key={resident} urlResident={resident} />
          ))}
      </section>
    </div>
  );
};

export default App;
