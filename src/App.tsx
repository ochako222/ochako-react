import { Container } from '@chakra-ui/react';
import React from 'react';
import { Translator } from './components/Translator';
import { SearchInput } from './components/SearchInput';

import './index.scss';

const App: React.FC = () => {
    const foo = 'hi';
    console.log(foo);

    return (
        <div>
            <Container centerContent>
                <SearchInput />
                <Translator />
            </Container>
        </div>
    );
};

export default App;
