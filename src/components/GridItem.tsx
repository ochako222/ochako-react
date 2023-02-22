import { Box, LinkBox, Image, LinkOverlay, Text, Button, Link, Flex } from '@chakra-ui/react';
import React from 'react';
import { ref, get, set, push, remove } from 'firebase/database';
import { db } from '../firebase-config';

interface GridItemProps {
    href: string;
    thumbnail: string;
    title: string;
}

interface GridArticleItemProps {
    id: string;
    thumbnail: string;
    title: string;
    showControls?: boolean;
    onDelete?: (id: string) => void;
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

export const GridArticleItem = ({
    id,
    thumbnail,
    title,
    showControls,
    onDelete
}: GridArticleItemProps) => {
    const controls = () => (
        <Flex gap="5" justifyContent={'center'}>
            <Link href={`/articles/${id}/edit`}>
                <Button colorScheme="blue">Edit</Button>
            </Link>
            <Button onClick={() => onDelete(id)}> Delete </Button>
        </Flex>
    );

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
                <LinkOverlay
                    href={`articles/${id}/view`}
                    target="_blank"
                    style={{ color: 'inherit' }}
                >
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
            </LinkBox>
            {showControls ? controls() : ''}
        </Box>
    );
};
