import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { WorkGridItem } from '../components/WorkGridItem';

export const Work: React.FC = () => {
    return (
        <Container py={5}>
            <Heading as="h3" fontSize={20} mb={4}>
                Recent Works
            </Heading>

            <Box py={5}>
                <SimpleGrid columns={[1, 2, 2]} gap={10}>
                    <WorkGridItem
                        title="Taci's Beyti restaurant home page"
                        thumbnail={`${process.env.PUBLIC_URL}/work/tasty.png`}
                        id="tacisbeyti"
                    />
                    <WorkGridItem
                        title="Crypto marketplace teamplate"
                        thumbnail={`${process.env.PUBLIC_URL}/work/crypto.png`}
                        id="crypto"
                    />
                </SimpleGrid>
            </Box>
        </Container>
    );
};

export default Work;
