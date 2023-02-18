import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import { Work } from './pages/Work';
import { Tacis } from './pages/work/Tacis';
import { Crypto } from './pages/work/Crypto';
import { Articles } from './pages/Articles';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/works" element={<Work />} />
                    <Route path="/works/tacisbeyti" element={<Tacis />} />
                    <Route path="/works/crypto" element={<Crypto />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
