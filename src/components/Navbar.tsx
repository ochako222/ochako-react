import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from '@chakra-ui/react';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Navbar: React.FC = () => {
    return (
        <header>
            <Box as="nav" w="100%" css={{ backdropFilter: 'blur(10px)' }}>
                <Container display="flex" p={2} maxW="container.md">
                    <Flex align="center" mr={5}>
                        <Heading as="h1" size="lg" letterSpacing="tighter">
                            <div>Here Logo</div>
                        </Heading>
                    </Flex>
                    <Flex
                        justify="right"
                        gap="5"
                        direction={{ base: 'column', md: 'row' }}
                        display={{ base: 'none', md: 'flex' }}
                        width={{ base: 'full', md: 'auto' }}
                        alignItems="center"
                        flexGrow={2}
                        mt={{ base: 4, md: 0 }}
                    >
                        <Link p={2} bg="grassTeal" color="#202023" href="/works">
                            Works
                        </Link>
                        <Link p={2} bg="grassTeal" color="#202023" href="/posts">
                            Posts
                        </Link>
                        <Link
                            p={2}
                            bg="grassTeal"
                            color="#202023"
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4 }}
                            pl={2}
                            href="https://github.com/craftzdog/craftzdog-homepage"
                        >
                            <IoLogoGithub />
                            Source
                        </Link>
                    </Flex>

                    <Box
                        flex={1}
                        align="right"
                        ml={2}
                        display={{ base: 'inline-block', md: 'none' }}
                    >
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <Link href="/">
                                    <MenuItem as={Link}>About</MenuItem>
                                </Link>
                                <Link href="/works">
                                    <MenuItem as={Link}>Works</MenuItem>
                                </Link>
                                <Link href="/posts">
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </Link>
                                <MenuItem
                                    as={Link}
                                    href="https://github.com/craftzdog/craftzdog-homepage"
                                >
                                    View Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Container>
            </Box>
        </header>
    );
};

export default Navbar;
