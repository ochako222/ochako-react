import { Box, Button, Flex, Input, FormControl } from '@chakra-ui/react';
import React from 'react';
import { useFormik } from 'formik';
import TranslatedService from '../api/services/translated-service';

export const SearchInput: React.FC = () => {
    const translationService = TranslatedService.create();

    const formik = useFormik({
        initialValues: {
            word: ''
        },
        onSubmit: async (values) => {
            const profileEntity = await translationService.getTranslation(values.word);
            alert(profileEntity);
            // alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <section className="section__search">
            <div className="container">
                <Box py="4" color="black" minW="lg">
                    <form onSubmit={formik.handleSubmit}>
                        <Flex alignItems="center" gap="2">
                            <FormControl>
                                <Input
                                    id="word"
                                    name="word"
                                    onChange={formik.handleChange}
                                    value={formik.values.word}
                                    placeholder="type the word here..."
                                    size="md"
                                />
                            </FormControl>
                            <Button type="submit" colorScheme="blue" size="md">
                                Шукати
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </div>
        </section>
    );
};

export default SearchInput;

/* <section className="section__input">
            <div className="container">
                <Box py="4" color="black" minW="lg">
                    <Flex alignItems="center" gap="2">
                        <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                            <FormControl>
                                <Input
                                    id="word"
                                    name="word"
                                    onChange={formik.handleChange}
                                    value={formik.values.word}
                                    placeholder="type the word here..."
                                    size="md"
                                />
                            </FormControl>
                            <Button type="submit" colorScheme="blue" size="md">
                                Шукати
                            </Button>
                        </Form>
                    </Flex>
                </Box>
            </div>
        </section> */
