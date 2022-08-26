import { Image } from '@chakra-ui/react';
import React from 'react';

interface WorkImageProps {
    src: string;
    alt: string;
}

const WorkImage = ({ src, alt }: WorkImageProps) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export default WorkImage;
