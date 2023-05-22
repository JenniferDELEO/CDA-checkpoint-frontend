import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Continents from "./pages/Continents/Continents";
import Countries from "./pages/Countries/Countries";
import Country from "./pages/Countries/Country";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/continents/:code/countries" element={<Countries />} />
        <Route path="/countries/:code" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
