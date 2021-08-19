import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    Tag,
    Container,
    Center,
    Button,
    Spinner
} from '@chakra-ui/react';


const ProductDetail = () => {

    let { id } = useParams();

    const [getDetail, setDetail] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setDetail(json))
    }, [])

    const { title, image, description, category, price } = getDetail;

    return (
        <Container maxW={'7xl'} p="12">
            {
                image ? <><Heading as="h1">Product Details Page</Heading>
                    <Box
                        marginTop={{ base: '1', sm: '5' }}
                        display="flex"
                        flexDirection={{ base: 'column', sm: 'row' }}
                        justifyContent="space-between">
                        <Box
                            display="flex"
                            flex="1"
                            marginRight="3"
                            position="relative"
                            alignItems="center">
                            <Box
                                width={{ base: '100%', sm: '85%' }}
                                zIndex="2"
                                marginLeft={{ base: '0', sm: '5%' }}
                                marginTop="5%">
                                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                    <Image
                                        borderRadius="lg"
                                        src={image}
                                        alt="some good alt text"
                                        objectFit="contain"
                                    />
                                </Link>
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            flex="1"
                            flexDirection="column"
                            justifyContent="center"
                            marginTop={{ base: '3', sm: '0' }}>
                            <HStack spacing={2}>

                                <Tag size={'md'} variant="solid" colorScheme="orange">
                                    {category}
                                </Tag>

                            </HStack>
                            <Heading marginTop="1">
                                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                    {title}
                                </Link>
                            </Heading>
                            <Text
                                as="p"
                                marginTop="2"
                                color={'black.700', 'black.200'}
                                fontSize="lg">
                                {description}
                            </Text>
                            <Box marginTop="12">
                                <Text
                                    as="span"
                                    marginTop="2"
                                    color={'black.700', 'black.200'}
                                    fontSize="3xl">
                                    ${price}
                                </Text>
                                <Button marginLeft="5" colorScheme="teal" size="lg">
                                    Add to cart
                                </Button>
                            </Box>
                        </Box>

                    </Box> </> : <Center >
                    <Box marginTop="48">
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="blue.500"
                            size="xl"
                            
                        />
                    </Box>
                </Center>
            }
        </Container>
    )
}

export default ProductDetail;