import { Container } from '@chakra-ui/react';
import React from 'react';

import './index.scss';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Container centerContent>
                <Home />
            </Container>
        </div>
    );
};

export default App;
