import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChampionsPage from '../paginas/champions';
import FreshPage from '../paginas/fresh';
import HomePage from '../paginas/home';
import InTrainingPage from '../paginas/intraining';
import MegaPage from '../paginas/mega';
import RookiePage from '../paginas/rookie';
import UltimatePage from '../paginas/ultimate';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <HomePage/> } />
            <Route path = 'champions' element={<ChampionsPage/>}/>
            <Route path = 'rookies' element={<RookiePage/>}/>
            <Route path = 'fresh' element={<FreshPage/>}/>
            <Route path = 'intraining' element={<InTrainingPage/>}/>
            <Route path = 'ultimate' element={<UltimatePage/>}/>
            <Route path = 'mega' element={<MegaPage/>}/>
        </Routes>
    </BrowserRouter>
);

export default Rotas;