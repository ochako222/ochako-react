import { Box, Button, Container, Heading, Input } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set, push } from 'firebase/database';

export const EditArticle = () => {
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
            } else {
                updateMarkdown('');
                updateTitle('');
            }
        };

        setArticle();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateTitle(event.target.value);
    };

    const postMarkdown = () => {
        if (id) {
            set(ref(db, `articles/${id}`), {
                markdown,
                title
            });
        } else {
            const postListRef = ref(db, `articles/`);
            const newPostRef = push(postListRef);

            set(newPostRef, {
                markdown,
                title
            });
        }
    };

    return (
        <Container py={5}>
            <Box>
                <Heading as="h3" fontSize={20} mb={4}>
                    Articles Foo
                </Heading>
            </Box>

            <Button onClick={postMarkdown} colorScheme="blue">
                Post article
            </Button>

            <Input value={title} onChange={handleChange} />

            <div className="container">
                <MDEditor
                    value={markdown}
                    onChange={updateMarkdown}
                    previewOptions={{
                        rehypePlugins: [[rehypeSanitize]]
                    }}
                />
                <MDEditor.Markdown source={markdown} style={{ whiteSpace: 'pre-wrap' }} />
            </div>
        </Container>
    );
};

export default EditArticle;
