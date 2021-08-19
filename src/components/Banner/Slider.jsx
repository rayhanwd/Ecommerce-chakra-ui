import React from 'react';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {Autoplay, Pagination} from 'swiper/core';
const bannerItem = [
  {
    id:1,
    image:'https://icms-image.slatic.net/images/ims-web/dd03ba11-b1c2-4a1f-8dd4-e3a8ab2ea159.jpg'
  },
  {
    id:2,
    image:'https://icms-image.slatic.net/images/ims-web/a62832a7-57bd-4b4c-ab2a-b41f10960bbc.jpg'
  },
  {
    id:3,
    image:'https://icms-image.slatic.net/images/ims-web/7afca76e-be03-43bc-9640-bd55c5d888b9.jpg'
  }
]
export default function Slider() {

  SwiperCore.use([Pagination, Autoplay]);

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false

        }}

      >
        {
          bannerItem.map(data =>
            <SwiperSlide key={data.id}>
              <Flex flex={1}>
                <Image
                  alt={'Login Image'}
                  objectFit={'cover'}
                  src={data.image}
                />
              </Flex>
            </SwiperSlide>
          )
        }

      </Swiper>
    </Stack>
  );
}