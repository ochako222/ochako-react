import { Card, CardBody, CardFooter } from '@chakra-ui/card';
import { Image, Stack, Heading, Divider, ButtonGroup, Button, LinkOverlay } from '@chakra-ui/react';

interface GridPostItemProps {
    id: string;
    thumbnail: string;
    title: string;
    isLoggedIn: boolean;
    onDelete: (id: string) => void;
}

export const BlogCard = ({ id, thumbnail, title, isLoggedIn, onDelete }: GridPostItemProps) => {
    const controls = () => (
        <CardFooter>
            <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue" onClick={() => onDelete(id)}>
                    Delete
                </Button>
            </ButtonGroup>
        </CardFooter>
    );

    return (
        <Card maxW="sm">
            <CardBody>
                <Image src={thumbnail} alt={title} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                    <LinkOverlay href={`posts/${id}`} style={{ color: 'inherit' }}>
                        <Heading size="md">{title}</Heading>
                    </LinkOverlay>
                </Stack>
            </CardBody>

            <Divider />
            {isLoggedIn ? controls() : ''}
        </Card>
    );
};
