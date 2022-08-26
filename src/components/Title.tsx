import { Heading, Box, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';

interface TitleProps {
    text: string;
}

const Title = ({ text }: TitleProps) => (
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

export default Title;
