import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteState from "../context/NoteState";
function Home(props) {
  const navigate = useNavigate();
  const [inputname, setInputName] = useState("hindupur");
  const navigateToContacts = () => {
    navigate("/contacts");
  };
  function cityName(e) {
    setInputName(e.target.value);
  }

  return (
    <div className="container">
      <div className="card">
        <NoteState name={inputname} />
        <h1>my name is {inputname}</h1>
        <h1 className="heading">Weather App</h1>
        <hr />
        <input
          style={{ backgroundColor: "#81acab" }}
          type="text"
          onChange={cityName}
        />
        <p>or</p>
        <button className="loactionbutton">Get Device Location</button>
        <br />
        <button onClick={navigateToContacts} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
export default Home;
