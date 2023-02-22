import { Box, Button, Container, Heading, Spinner, SimpleGrid, Link } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { ref, get, remove } from 'firebase/database';
import { GridPostItem } from '../../components/GridItem';
import { db } from '../../firebase-config';
import { AuthContext } from '../../context/AuthContext';
import { Post } from '../../types';
import { BlogCard } from '../../components/BlogCard';

export const PostsList: React.FC = () => {
    const context = useContext(AuthContext);
    const [postsList, updatePostsList] = useState<Post[]>();

    const deletePost = (id: string) => {
        const fooRef = ref(db, `posts/${id}`);
        remove(fooRef);

        const newPostsLiist = postsList?.filter((el) => el.id !== id);
        updatePostsList(newPostsLiist);
    };

    useEffect(() => {
        const setPost = async () => {
            const postRef = ref(db, `posts`);
            const snapshot = await get(postRef);

            const posts: Post[] = [];

            for (const [key, value] of Object.entries(snapshot.val())) {
                posts.push({
                    id: key,
                    title: value?.title,
                    markdown: value?.markdown,
                    thumbnail: value?.thumbnail
                });
            }

            console.log('Foo');
            updatePostsList(posts);
        };

        setPost();
    }, []);

    const renderPosts = (arr: Post[]) =>
        arr.map((item: Post) => (
            <BlogCard
                key={item.id}
                title={`${item.title}`}
                thumbnail={item.thumbnail}
                id={item.id}
                isLoggedIn={context.isLoggedIn}
                onDelete={deletePost}
            />
        ));

    const posts = postsList?.length ? renderPosts(postsList) : <Spinner />;

    return (
        <Container py={5}>
            <Box>
                {context.isLoggedIn ? (
                    <Link href="/posts/new">
                        <Button colorScheme="blue">Add Topic</Button>
                    </Link>
                ) : (
                    <Heading as="h3" fontSize={20} mb={4}>
                        Posts
                    </Heading>
                )}
            </Box>

            <Box py={5}>
                <SimpleGrid columns={[1, 2, 2]} gap={10}>
                    {posts}
                </SimpleGrid>
            </Box>
        </Container>
    );
};

export default PostsList;
