import React, { useEffect, useState } from 'react';
import './ResidentInfo.css';
import axios from 'axios';
const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setresidentInfo] = useState(null);

  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);
      console.log(res.data);
      setresidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadResidentInfo();
  }, []);

  return (
    <div className="mb-4">
      {residentInfo && (
        <div className="character__card">
          <div className="container__image">
            <p className={`status status-${residentInfo.status.toLowerCase()}`}>
              {residentInfo.status}
            </p>
            <img src={residentInfo.image} alt="" />
          </div>
          <h2>{residentInfo.name}</h2>
          <hr />
          <h3>RAZA</h3>
          <h2>{residentInfo.species}</h2>
          <h3>ORIGEN</h3>
          <h2>{residentInfo.origin.name}</h2>
          <h3>APARICION EN EPISODIOS</h3>
          <h2>{residentInfo.episode.length}</h2>
        </div>
      )}
    </div>
  );
};

export default ResidentInfo;
