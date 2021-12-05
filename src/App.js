import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Candidates from "./Components/Candidates";
import Detail from "./Components/Detail";
import Header from "./Components/Header";
import RejectList from "./Components/RejectList";
import ShortList from "./Components/ShortList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/shortlist" element={<ShortList />} />
        <Route path="/rejectlist" element={<RejectList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
