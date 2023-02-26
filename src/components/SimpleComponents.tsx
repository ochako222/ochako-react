import { ChevronRightIcon } from '@chakra-ui/icons';
import { Badge, Box, Heading, Link, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

interface WorkPagePropsI {
    text: string;
}

export const Meta = ({ text }: WorkPagePropsI) => (
    <Badge colorScheme="green" mr={2}>
        {text}
    </Badge>
);

export const Title = ({ text }: WorkPagePropsI) => (
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
