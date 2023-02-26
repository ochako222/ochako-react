import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Center, Image, List, ListItem, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Title, Meta, WorkImage } from '../../components/SimpleComponents';

export const Tacis: React.FC = () => (
    <Container>
        <Center my={6}>
            <Image
                src={`${process.env.PUBLIC_URL}/work/tasty.png`}
                alt="icon"
                className="grid-item-thumbnail"
                placeholder="blur"
                borderRadius="md"
            />
        </Center>

        <Title text="tacisbeyti" />

        <Text>
            Taci&apos;s Beyti is a family restaurant in New Jersey. The family-owned restaurant
            opened in 1986 in New Jersey. Two years later, they moved to the location it has been
            for the last 22 years. The restaurant has about 72 seats and 22 tables and is able to
            accommodate big groups of people by pushing the tables together, resulting in a table
            fit for a king. For those who want to have parties, there is a private room located next
            to the restaurant.
        </Text>

        <List ml={4} my={4}>
            <ListItem>
                <Meta text="Stack" />
                <span>NextJS / TypeScript / Saas / Bootstrap</span>
            </ListItem>
            <ListItem>
                <Meta text="Last update" />
                <span>2021/12/03</span>
            </ListItem>
            <ListItem>
                <Meta text={'WEBSITE'} />
                <Link
                    href="https://tacisbeyti.com/"
                    style={{ color: '#319795', textDecoration: 'none' }}
                >
                    TACISBEYTI
                    <ExternalLinkIcon mx="2px" />
                </Link>
            </ListItem>
        </List>
        <WorkImage src={`${process.env.PUBLIC_URL}/work/tasty_home.png`} alt="tasty_home" />
    </Container>
);

export default Tacis;
