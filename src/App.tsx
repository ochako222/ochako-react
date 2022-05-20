import { Button } from '@chakra-ui/react';
import React from 'react';
import { Translator } from './components/Translator';

import './index.scss';

const App: React.FC = () => {
    const foo = 'hi';
    console.log(foo);

    return (
        <div>
            <h1>Hello</h1>
            <Button colorScheme="blue" size="xs">
                Button
            </Button>
            <Translator />
        </div>
    );
};

export default App;
