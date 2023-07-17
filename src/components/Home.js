import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import NoteContext from "../context/NoteContext";

export default function Home(props) {

  const{inputName, setInputName, setIsVisible, } = useContext(NoteContext);  
  const [currLocation,setCurrLocation]=useState({});
  const [cityname, setCityName] = useState({
    name: "",
  });
  function handleKeyDown(event) {
    if(event.key === 'Enter') {
      setIsVisible(true);
    }
  };
  const geoLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude,longitude}=position.coords;
      setCurrLocation({latitude,longitude});
    });
  }
 useEffect(() => {
    geoLocation();
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${currLocation.latitude}&lon=${currLocation.longitude}&appid=d6e85595178e4ee92b71962005591fd5&units=metric`;
    axios
    .get(apiURL)
    .then((res) => {
      setCityName({
        ...cityname,
        name: res.data.name,
      });
    }).catch((err) => console.log(err));  
  }, [currLocation.latitude]);
  
function getLocation(){
  geoLocation();
    setInputName(cityname.name)
  }

  
  return (
    <div>
      <div className="container">
        <div className="card">
          <h3 className="heading">Weather App</h3>
          <br />
          <hr/>
          <br />
          <input
            type="text"
            placeholder="Enter city name"
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            autoFocus
          /> 
          <p>or</p>
          <button className="loactionbutton" onClick={getLocation}  onKeyDown={handleKeyDown}>Get Device Location</button>
          <br />
        </div>
      </div>
    </div>
  );
}
