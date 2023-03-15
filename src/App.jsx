import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Location from './components/Location/Location';
import { getRandomNumber } from './utils/getRandomNumber';
const App = () => {
  const [numberRandom, setNumberRandom] = useState(null)
  const [location, setLocation] = useState(null)


  

  const baseUrl = `https://rickandmortyapi.com/api/`


  const getLocation = async () => {
    try {
      
      
      const res = await axios.get(`${baseUrl}location/${numberRandom}`);
      setLocation(res.data)
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    setNumberRandom(getRandomNumber(1, 126))
  },[])

  useEffect(() => {
    if (numberRandom !== null) {
      getLocation();
    }
  }, [numberRandom])
  
  const locationName = location?.name;
  const locationType = location?.type;
  const locationDimension = location?.dimension;
  const locationResidentsArray = location?.residents;
  const locationResidents = locationResidentsArray?.length

  
  
  return (
    <div className="h-screen text-white" style={{backgroundColor:"#0A0D34"}}>
      <img src="https://i.ibb.co/WDSHdKy/background-R-M.png" alt="" />
      <Location name={locationName} type={locationType} dimension={locationDimension} residents={locationResidents}/>
      
    </div>
  );

};

export default App;
