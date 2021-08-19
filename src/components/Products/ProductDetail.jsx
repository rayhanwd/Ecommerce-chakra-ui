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
    useColorModeValue,
    Container,
    Button
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
            <Heading as="h1">Stories by Chakra Templates</Heading>
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
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)'
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
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
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg">
                        {description}
                    </Text>
                    <Box marginTop="12">
                        <Text
                            as="span"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="3xl">
                            ${price}
                        </Text>
                        <Button marginLeft="5" colorScheme="teal" size="lg">
                            Add to cart
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Container>
    )
}

export default ProductDetail;