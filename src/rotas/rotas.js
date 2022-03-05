import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ChampionsPage from '../paginas/champion';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <ChampionsPage/> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;