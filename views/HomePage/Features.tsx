import React, { useState } from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';
import 'swiper/css';
import 'swiper/css/autoplay';
import NextImage from 'next/image';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur ',
  },
  {
    imageUrl: '/grid-icons/asset-2.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-3.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-4.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-5.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-6.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-7.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-8.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-9.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      <SwiperWrapper>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          slideToClickedSlide={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {FEATURES.map((singleFeature, idx) => (
            <SwiperSlide key={idx}>
              <BasicCard {...singleFeature} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </Container>
  );
}

const SwiperWrapper = styled.div`
  .swiper-slide {
    height: auto;
    display: flex;
    opacity: 0.5;
    transition: opacity 0.3s;
    transform: scale(0.9);
    transition: transform 0.3s;
  }

  .swiper-slide-active {
    opacity: 1;
    transform: scale(1);
    z-index: 10;
  }
  
  /* Ensure proper spacing for the cards inside swiper */
  & > div {
    padding-bottom: 3rem;
  }
`;
