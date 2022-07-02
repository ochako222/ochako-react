import { Container } from '@chakra-ui/react';
import React from 'react';
import { Translator } from './components/Translator';
import { SearchInput } from './components/SearchInput';

import './index.scss';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Container centerContent>
                <SearchInput />
                <Translator />
            </Container>
        </div>
    );
};

export default App;
