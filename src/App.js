import React from "react";
import "./App.css";

import Rotas from "./rotas/rotas";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {

 

  return (
    <>
      <NavBar />
      <Rotas />
      <Footer />
    </>
  );
}
