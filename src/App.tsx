import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';
import './markdownEditor.scss';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Tacis } from './pages/work/Tacis';
import { Crypto } from './pages/work/Crypto';

import { AuthContext, useAuth } from './context/AuthContext';
import EditPost from './pages/posts/EditPost';
import PostsList from './pages/posts/PostsList';

const App: React.FC = () => {
    const { userId, login, logout } = useAuth();

    const isLoggedIn = userId === process.env.REACT_APP_USER_ID;

    const auth = useMemo(() => ({ isLoggedIn, login, logout }), [isLoggedIn, login, logout]);

    return (
        <AuthContext.Provider value={auth}>
            <div>
                <Navbar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/posts" element={<PostsList />} />
                        <Route path="/posts/:id" element={<EditPost />} />
                        <Route path="/posts/new" element={<EditPost />} />
                        <Route path="/works" element={<Work />} />
                        <Route path="/works/tacisbeyti" element={<Tacis />} />
                        <Route path="/works/crypto" element={<Crypto />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
};

export default App;
