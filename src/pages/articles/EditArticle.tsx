import { Button, Container, Heading, Input } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import { ref, get, set, push } from 'firebase/database';
import { db } from '../../firebase-config';
import { AuthContext } from '../../context/AuthContext';

export const EditArticle = () => {
    const { id } = useParams();
    const context = useContext(AuthContext);

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

    const controls = () => {
        <Container>
            <Button onClick={postMarkdown} colorScheme="blue">
                Post article
            </Button>

            <Input value={title} onChange={handleChange} />
        </Container>;
    };

    return (
        <>
            <Container py={'5'}>
                <Heading as="h3" fontSize={20} mb={4}>
                    {title}
                </Heading>
            </Container>

            {context.isLoggedIn ? controls() : ''}

            <Container>
                {context.isLoggedIn ? (
                    <MDEditor
                        value={markdown}
                        onChange={updateMarkdown}
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]]
                        }}
                    />
                ) : (
                    ''
                )}
                <MDEditor.Markdown source={markdown} style={{ whiteSpace: 'pre-wrap' }} />
            </Container>
        </>
    );
};

export default EditArticle;
