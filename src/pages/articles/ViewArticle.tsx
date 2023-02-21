import { Box, Container, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { ref, get } from 'firebase/database';
import { db } from '../../firebase-config';

export const ViewArticle = () => {
    const { id } = useParams();

    const [markdown, updateMarkdown] = useState('');
    const [title, updateTitle] = useState('');

    useEffect(() => {
        const setArticle = async () => {
            if (id) {
                const articlesRef = ref(db, `articles/${id}`);
                const snapshot = await get(articlesRef);

                updateMarkdown(snapshot.val().markdown);
                updateTitle(snapshot.val().title);
            }
        };

        setArticle();
    }, []);

    return (
        <Container py={5}>
            <Box>
                <Heading as="h3" fontSize={20} mb={4}>
                    {title}
                </Heading>
            </Box>

            <div className="container">
                <MDEditor.Markdown source={markdown} style={{ whiteSpace: 'pre-wrap' }} />
            </div>
        </Container>
    );
};

export default ViewArticle;
