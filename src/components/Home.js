import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import NoteContext from "../context/NoteContext";

export default function Home(props) {
  //  destructuring
  const { inputName, setInputName, setIsVisible } = useContext(NoteContext);

  const [currLocation, setCurrLocation] = useState({});
  const [cityname, setCityName] = useState({
    name: "",
  });
  // function to go to weatherinfo page when click on enter.
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setIsVisible(true);
    }
  }
  // Arrow function to get the latitude on longitude of our device location.
  const geoLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrLocation({ latitude, longitude });
    });
  };
  // using axios in useeffect to get the  current city from api
  useEffect(() => {
    geoLocation();
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${currLocation.latitude}&lon=${currLocation.longitude}&appid=cc254fbfd8bf9fedac7d44b9ffd836d6&units=metric`;
    axios
      .get(apiURL)
      .then((res) => {
        setCityName({
          ...cityname,
          name: res.data.name,
        });
      })
      .catch((err) => console.log(err));
  }, [currLocation.latitude,currLocation.longitude,cityname]);

  // calling geolocation only when the get device location button is pressed
  function getLocation() {
    geoLocation();
    setInputName(cityname.name);
  }

  return (
    <div>
      <div className='container'>
        <div className='card'>
          <h3 className='heading'>Weather App</h3>
          <br />
          <hr />
          <br />
          <input
            type='text'
            placeholder='Enter city name'
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
            onKeyDown={handleKeyDown}
            spellCheck='false'
            autoFocus
          />
          <p>or</p>
          <button
            className='loactionbutton'
            onClick={getLocation}
            onKeyDown={handleKeyDown}
          >
            Get Device Location
          </button>
          <br />
        </div>
      </div>
    </div>
  );
}
