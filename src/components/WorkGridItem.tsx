import { Box, LinkBox, Image, LinkOverlay, Text, Link } from '@chakra-ui/react';
import React from 'react';

interface WorkGridItemProps {
    id: string;
    thumbnail: string;
    title: string;
}

export const WorkGridItem = ({ id, thumbnail, title }: WorkGridItemProps) => (
    <Box w="100%" textAlign="center">
        <Link href={`/works/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    borderRadius="md"
                />
                <LinkOverlay href={`/works/${id}`} style={{ color: 'inherit' }}>
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
            </LinkBox>
        </Link>
    </Box>
);

export default WorkGridItem;
