import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import NoteContext from "../context/NoteContext";
import NoteState from "../context/NoteState";
function Contacts() {
  const navigate = useNavigate();
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
  }, [a]);
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <NoteState />
        <button onClick={navigateHome} className="loactionbutton">
          Back
        </button>

        <h1 className="heading">Weather App</h1>
        <hr />
        <h1>{a.state.celcius}°C</h1>
        <h2>{a.state.description}</h2>
        <h2>{a.state.name} </h2>
        <hr />
        <div className="details">
          <div className="col">
            <div>
              <p> {a.state.Feels_like}°C</p>
              <p>Feels like</p>
            </div>
          </div>
          <div className="col">
            <div>
              <p> {a.state.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contacts;
