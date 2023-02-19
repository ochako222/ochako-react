import { Box, Button, Container, Heading, Spinner, SimpleGrid, Link } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { GridItem } from '../../components/GridItem';

export interface Article {
    id: string;
    title: string;
    markdown: string;
}

export const ArticlesList: React.FC = () => {
    const firebaseConfig = {
        apiKey: 'AIzaSyBNghR9OimZqPRsTCBuBwZaJCSOOKtjAR4',
        authDomain: 'alex-pomidoro.firebaseapp.com',
        databaseURL: 'https://alex-pomidoro-default-rtdb.europe-west1.firebasedatabase.app',
        projectId: 'alex-pomidoro',
        storageBucket: 'alex-pomidoro.appspot.com',
        messagingSenderId: '752885762949',
        appId: '1:752885762949:web:0d3c31a1301995112352ec'
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    const [articlesList, updateArticlesList] = useState<Article[]>();

    useEffect(() => {
        const setArticles = async () => {
            const userRef = ref(db, `articles`);
            const snapshot = await get(userRef);

            const articles: Article[] = [];

            for (const [key, value] of Object.entries(snapshot.val())) {
                articles.push({
                    id: key,
                    title: value?.title,
                    markdown: value?.markdown
                });
            }

            updateArticlesList(articles);
        };

        setArticles();
    }, []);

    const renderArticles = (arr: Article[]) =>
        arr.map((item: Article) => (
            <GridItem
                key={item.id}
                title={`${item.title}`}
                thumbnail={`${process.env.PUBLIC_URL}/content/playwright.png`}
                href={`/articles/${item.id}/edit`}
            />
        ));

    const articles = articlesList?.length ? renderArticles(articlesList) : <Spinner />;

    const showFoo = async () => {
        console.log(articlesList);
    };

    const createArticleElement = (
        <Link p={2} href="/articles/new" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Heading as="h1" size="md" letterSpacing="tighter">
                New Article
            </Heading>
        </Link>
    );

    return (
        <Container py={5}>
            <Box>
                <Heading as="h3" fontSize={20} mb={4}>
                    Articles
                </Heading>

                {createArticleElement}
            </Box>

            <Button onClick={showFoo}>Show state</Button>

            <Box py={5}>
                <SimpleGrid columns={[1, 2, 2]} gap={10}>
                    {articles}
                </SimpleGrid>
            </Box>
        </Container>
    );
};

export default ArticlesList;
