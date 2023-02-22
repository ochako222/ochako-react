import { Box, LinkBox, Image, LinkOverlay, Text, Button } from '@chakra-ui/react';
import React from 'react';

interface GridItemProps {
    href: string;
    thumbnail: string;
    title: string;
}

interface GridPostItemProps {
    id: string;
    thumbnail: string;
    title: string;
    isLoggedIn: boolean;
    onDelete: (id: string) => void;
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

export const GridPostItem = ({ id, thumbnail, title, isLoggedIn, onDelete }: GridPostItemProps) => {
    const controls = () => <Button onClick={() => onDelete(id)}> Delete </Button>;

    return (
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
                <LinkOverlay href={`topics/${id}`} style={{ color: 'inherit' }}>
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
            </LinkBox>
            {isLoggedIn ? controls() : ''}
        </Box>
    );
};
