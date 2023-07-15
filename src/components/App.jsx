import React from "react";
import { Routes, Route } from "react-router-dom";

import Contacts from "./Contacts";
import Home from "./Home";
import NoteState from "../context/NoteState";

export default function App() {
  return (
    <div>
      <div>
        <NoteState>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </NoteState>
      </div>
    </div>
  );
}
