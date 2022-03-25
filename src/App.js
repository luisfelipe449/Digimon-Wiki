import React from "react";
import "./App.css";

import Rotas from "./Routes/rotas";
import PageStructure from "./components/PageStructure";
import Footer from "./components/Footer";

export default function App() {

 

  return (
    <>
      <PageStructure />
      <Rotas />
      <Footer />
    </>
  );
}
