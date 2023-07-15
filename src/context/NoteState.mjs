import axios from "axios";
import React, { useState } from "react";
import NoteContext from "./NoteContext";
import Input from "./Input"
const NoteState = (props) => {
  const s1 = {
    celcius: "100",
    description: "ento",
    name: "emo",
    Feels_like: "",
    humidity: ""
  };
console.log(Input)
  const [state, setState] = useState(s1);
  const name = props.name;
  console.log(props.name);
  const update = () => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${Input}&appid=d6e85595178e4ee92b71962005591fd5&units=metric`;
    axios
      .get(apiURL)
      .then((res) => {
        setState({
          ...state,
          celcius: res.data.main.temp,
          description: res.data.weather[0].description,
          name: res.data.name,
          Feels_like: res.data.main.feels_like,
          humidity: res.data.main.humidity
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
      <h1>{props.name}</h1>
      <h1>{props.name}</h1>
    </NoteContext.Provider>
  );
};

export default NoteState;
