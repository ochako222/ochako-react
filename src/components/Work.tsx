import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';

interface TitleProps {
    text: string;
}

export const Title = ({ text }: TitleProps) => (
    <Box>
        <Link href="/works" style={{ color: '#319795', textDecoration: 'none' }}>
            Works
        </Link>
        <span>
            {' '}
            <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {text}
        </Heading>
    </Box>
);

interface WorkImageProps {
    src: string;
    alt: string;
}

export const WorkImage = ({ src, alt }: WorkImageProps) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

interface MetaProps {
    text: string;
}

export const Meta = ({ text }: MetaProps) => (
    <Badge colorScheme="green" mr={2}>
        {text}
    </Badge>
);
