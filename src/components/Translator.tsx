import React, { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

import './Translator.scss';

export const Translator: React.FC = () => {
    const [word, setWord] = React.useState<string>();
    // const [translate, setTranslate] = React.useState<string>();

    useEffect(() => {
        setWord('here translate...');
        // setTranslate('cat');
    }, []);

    return (
        <section className="section__translator">
            <div className="container">
                <Box p="4" minW="lg">
                    <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                        Modern, Chic Penthouse with Mountain, City & Sea Views
                        {word}
                    </Text>
                </Box>
            </div>
        </section>
    );
};

export default Translator;
