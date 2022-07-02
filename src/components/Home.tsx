import { Box, chakra, Image, Container, Heading, Link, Button } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';

const ProfileImage = chakra(Image, {
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Paragraph = styled.p`
    text-align: justify;
`;

export const Home: React.FC = () => {
    return (
        <Container py={5}>
            <Box
                border="1px"
                borderColor="gray.400"
                borderRadius="lg"
                mb={6}
                py={3}
                textAlign="center"
            >
                Hello, I&apos;m software developer!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Oleksandr Chako
                    </Heading>
                    <p>
                        I&apos;m a full-stack developer with a passion for building modern and
                        flexible digital services. I can manage all things with planning, designing
                        and building applications, all the way to solving real-life problems with
                        code. When I&apos;m not pushing pixels, you&apos;ll find me cooking,
                        reading, or walking out in the park
                    </p>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="170px"
                        h="170px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src={`${process.env.PUBLIC_URL}/img/photo.jpg`}
                            alt="Profile image"
                            borderRadius="full"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                </Box>
            </Box>

            <Box align="center" my={4}>
                <Link href="/works">
                    <Button colorScheme="teal">Download CV</Button>
                </Link>
            </Box>

            <Box py={5}>
                <Heading as="h4" size="md" variant="section-title">
                    Things I&apos;m doing...
                </Heading>
                <Paragraph>
                    Takuya is a freelance and a full-stack developer based in Osaka with a passion
                    for building digital services/stuff he wants. He has a knack for all things
                    launching products, from planning and designing all the way to solving real-life
                    problems with code. When not online, he loves hanging out with his camera.
                    Currently, he is living off of his own product called &quot; has more than 100k
                    subscribers.
                </Paragraph>
            </Box>
        </Container>
    );
};

export default Home;
