import { Box, LinkBox, Image, LinkOverlay, Text } from '@chakra-ui/react';
import React from 'react';

interface GridItemProps {
    href: string;
    thumbnail: string;
    title: string;
}

export const GridItem = ({ href, thumbnail, title }: GridItemProps) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
                borderRadius="md"
            />
            <LinkOverlay href={href} target="_blank" style={{ color: 'inherit' }}>
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
        </LinkBox>
    </Box>
);

export default GridItem;
