import React, { useState, useEffect } from 'react';
import Product from './Product';
import { Container, SimpleGrid, Stack, Box, Spinner, Center, Heading } from '@chakra-ui/react';
export default function Products() {

  const [getProduct, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json))
  }, [])

  return (
    <Container as={Stack} maxW={'6xl'} py={10}>
      <Heading marginBottom="6" Size="md" as="h6">Favly Mall</Heading>
      {
        !getProduct.length && <Center >
        <Box marginTop="24">
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
      <SimpleGrid
        templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 2fr', lg: '2fr 2fr 2fr 2fr' }}
        spacing={8}>
        {
          getProduct.map(pd => <Product item={pd} key={pd.id} />) 

        }
      </SimpleGrid>
    </Container>
  );
}