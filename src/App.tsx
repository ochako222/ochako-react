import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import { Work } from './pages/Work';
import { Tacis } from './pages/work/Tacis';
import { Crypto } from './pages/work/Crypto';
import { ArticlesList } from './pages/articles/ArticlesList';
import { EditArticle } from './pages/articles/NewArticle';
import { ViewArticle } from './pages/articles/ViewArticle';
import { AuthContext, useAuth } from './context/AuthContext';

const App: React.FC = () => {
    const { userEmail, login, logout } = useAuth();

    const isLoggedIn = !!userEmail;

    const auth = useMemo(() => ({ isLoggedIn, login, logout }), [isLoggedIn, login, logout]);

    return (
        <AuthContext.Provider value={auth}>
            <div>
                <Navbar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/articles" element={<ArticlesList />} />
                        <Route path="/articles/:id/edit" element={<EditArticle />} />
                        <Route path="/articles/new" element={<EditArticle />} />
                        <Route path="/articles/:id/view" element={<ViewArticle />} />
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
