import React, { useEffect } from 'react';
import { Textarea } from '@chakra-ui/react';

import './Translator.scss';

export const Translator: React.FC = () => {
    const [word, setWord] = React.useState<string>();
    const [translate, setTranslate] = React.useState<string>();

    useEffect(() => {
        setWord('кіт');
        setTranslate('cat');
    }, []);

    return (
        <section className="section__translator">
            <div className="container">
                <div className="translator">
                    <Textarea placeholder={word} />
                    <Textarea placeholder={translate} />
                </div>
            </div>
        </section>
    );
};

export default Translator;
