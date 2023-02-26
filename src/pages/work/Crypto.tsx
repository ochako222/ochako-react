import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Center, Image, List, ListItem, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Title, Meta, WorkImage } from '../../components/SimpleComponents';

export const Crypto: React.FC = () => (
    <Container>
        <Center my={6}>
            <Image
                src={`${process.env.PUBLIC_URL}/work/crypto.png`}
                alt="icon"
                className="grid-item-thumbnail"
                placeholder="blur"
                borderRadius="md"
            />
        </Center>

        <Title text="Crypto market" />

        <Text>
            A fully responsive HTML5 + CSS3 + Gulp Crypto market template, designed by Me. I used
            only native technologies without libraries except for Saas. Also, I used in the project
            my own build for Gulp
        </Text>

        <List ml={4} my={4}>
            <ListItem>
                <Meta text="Stack" />
                <span>Gulp / JS / Saas</span>
            </ListItem>
            <ListItem>
                <Meta text="Last update" />
                <span>2022/01/11</span>
            </ListItem>
            <ListItem>
                <Meta text="SOURCE" />
                <Link
                    href="https://github.com/achako2012/Unio"
                    style={{ color: '#319795', textDecoration: 'none' }}
                >
                    GitHub
                    <ExternalLinkIcon mx="2px" />
                </Link>
            </ListItem>
        </List>

        <WorkImage src={`${process.env.PUBLIC_URL}/work/crypto_home.png`} alt="tasty_home" />
    </Container>
);

export default Crypto;
