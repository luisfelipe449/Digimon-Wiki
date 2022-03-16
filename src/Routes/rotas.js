import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChampionsPage from "../Pages/champions";
import FreshPage from "../Pages/fresh";
import HomePage from "../Pages/home";
import InTrainingPage from "../Pages/intraining";
import MegaPage from "../Pages/mega";
import RookiePage from "../Pages/rookie";
import UltimatePage from "../Pages/ultimate";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/champions" element={<ChampionsPage />} />
      <Route path="/rookies" element={<RookiePage />} />
      <Route path="/fresh" element={<FreshPage />} />
      <Route path="/intraining" element={<InTrainingPage />} />
      <Route path="/ultimate" element={<UltimatePage />} />
      <Route path="/mega" element={<MegaPage />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
