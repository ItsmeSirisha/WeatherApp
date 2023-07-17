import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../context/NoteContext";
import axios from "axios";

function Weatherinfo() {

  const{inputName,setInputName, setIsVisible, } = useContext(NoteContext);
const [error,setError]=useState(null);
const [errortwo,setErrorTwo]=useState(null);
const[data ,setData]=useState(false);
const errorMessage="city not found."
const newErrorMessage="city not entered."
  const [state, setState] = useState({
    celcius: "",
    description: "",
    name: "",
    country:"",
    Feels_like: "",
    humidity: "",
    image:"/images/cloudy.png"
  });

  useEffect(() => {

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputName}&appid=d6e85595178e4ee92b71962005591fd5&units=metric`;

    axios
    .get(apiURL)
    .then((res) => {
      
      let imagePath='/images/cloudy.png';
      if(res.data.weather[0].main=="Clouds"){
        imagePath="https://img.icons8.com/?size=1x&id=uEV36IijHymM&format=png"
      }else if(res.data.weather[0].main=="Clear"){
        imagePath="https://img.icons8.com/?size=1x&id=tqP4CSFqqdNr&format=png"
      }else if(res.data.weather[0].main=="Rain"){
        imagePath="https://img.icons8.com/?size=1x&id=VY9MLUH4ggfo&format=png"
      }else if(res.data.weather[0].main=="Strom"){
        imagePath="https://icons8.com/icon/64213/storm"
      }else if( res.data.weather[0].main=="Mist"){
        imagePath="https://img.icons8.com/?size=1x&id=113637&format=png"
      }
      else if(res.data.weather[0].main=="Fog"){
        imagePath="https://img.icons8.com/?size=1x&id=67558&format=png"
      }
    else if(res.data.weather[0].main=="Drizzle"){
      imagePath="https://img.icons8.com/?size=1x&id=39336&format=png"
    }else {
        imagePath="https://img.icons8.com/?size=1x&id=uEV36IijHymM&format=png"
      }
      if(res.data.cod==200){
        setData(true)
      }
      setState({
        ...state,
        celcius: res.data.main.temp,
        description: res.data.weather[0].description,
        name: res.data.name,
        country:res.data.sys.country,
        Feels_like: res.data.main.feels_like,
        humidity: res.data.main.humidity,
        image:imagePath
      });
    }).catch((err) =>{
      if(err.response.status==404){
        setError(errorMessage)
      }
      else if(err.response.status==400){
        setErrorTwo(newErrorMessage)
      }
      });    
  });

  function onClickBack(){
    setIsVisible(false);
    setInputName("");
  }

  return (
    <div className="container">
      <div className="card">
        {error && <div>{error}</div> }
        {errortwo && <div>{errortwo}</div> }
        {data && <div>
      <button align="left"  onClick={onClickBack} className="backButton"  >Back<h3 className="heading2">Weather App</h3>
</button>
       <br />
       <br />
        <hr />
        <br />
        <img src= {state.image} />
        <h1>{state.celcius}°C</h1>
        <h3>{state.description}</h3>
        <h3 > <img align="middle" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-location-outline-64.png" alt="" className="location" />{state.name},{state.country} </h3>
        <br />
        <hr />
        <div className="details">
          <div className="col">
            <div>
              <p align="left"> <img align="left" src="https://cdn0.iconfinder.com/data/icons/autumn-doodles/32/thermometer-autumn-humidity-fall-rain-temperature-measure-64.png" alt="" className="feelslike" /> {state.Feels_like}°C Feels_like </p>
            </div>
          </div>
          <div className="col">
            <div>
              <p align="left"><img align="left" src="https://cdn4.iconfinder.com/data/icons/weather-717/64/humidity-water-rain-weather-64.png" alt="" className="humidity" /> {state.humidity}% Humidity</p>
            </div>
          </div>
        </div></div> }
       
      </div>
    </div>
  );
}
export default Weatherinfo;
