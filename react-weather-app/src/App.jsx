import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityList from "./components/CityList";
import CityForecast from "./components/CityForecast";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/forecast/:cityName" element={<CityForecast />} />
      </Routes>
    </BrowserRouter>
  );
}