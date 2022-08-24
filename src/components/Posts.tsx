import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { GridItem } from './GridItem';

export const Posts: React.FC = () => {
    return (
        <Container py={5}>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular posts
            </Heading>

            <Box py={5}>
                <SimpleGrid columns={[1, 2, 2]} gap={10}>
                    <GridItem
                        title="How to Improve E2E Testing for Web Apps with Playwright Automation"
                        thumbnail={`${process.env.PUBLIC_URL}/content/playwright.png`}
                        href="https://labs.eleks.com/2022/06/e2e-testing-playwright-automation.html"
                    />
                    <GridItem
                        title="Playwright vs Cypress: Which Framework to Choose For E2E Testing?"
                        thumbnail={`${process.env.PUBLIC_URL}/content/playwrightCypress.png`}
                        href="https://labs.eleks.com/2022/07/playwright-vs-cypress-e2e-testing.html"
                    />
                    <GridItem
                        title="Rendering Engines and Their Role in Automated Web Application Testing"
                        thumbnail={`${process.env.PUBLIC_URL}/content/rendering.png`}
                        href="https://labs.eleks.com/2022/07/rendering-engines-in-automated-web-application-testing.html"
                    />
                </SimpleGrid>
            </Box>
        </Container>
    );
};

export default Posts;
