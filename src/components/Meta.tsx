import { Badge } from '@chakra-ui/react';
import React from 'react';

interface MetaProps {
    text: string;
}

const Meta = ({ text }: MetaProps) => (
    <Badge colorScheme="green" mr={2}>
        {text}
    </Badge>
);

export default Meta;
