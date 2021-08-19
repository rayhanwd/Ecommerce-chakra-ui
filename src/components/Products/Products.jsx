import React, { useState, useEffect } from 'react';
import Product from './Product';
import { Container, SimpleGrid, Stack } from '@chakra-ui/react';
export default function Products() {

const [getProduct, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json))
  }, [])

  return (
    <Container as={Stack} maxW={'6xl'} py={10}>
      <SimpleGrid
        templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 2fr', lg: '2fr 2fr 2fr 2fr' }}
        spacing={8}>
      {
        getProduct.map(pd=>  <Product item={pd} key={pd.id}/>)
      }
      </SimpleGrid>
    </Container>
  );
}