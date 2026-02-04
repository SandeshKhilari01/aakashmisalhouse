import React, { useState } from 'react';
import styled from 'styled-components';
import NextImage from 'next/image';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Page from 'components/Page';
import 'swiper/css';
import 'swiper/css/autoplay';
import { media } from 'utils/media';

const GALLERY_IMAGES = [
  { imageUrl: '/grid-icons/asset-1.jpeg', title: 'Gallery Image 1' },
  { imageUrl: '/grid-icons/asset-2.jpeg', title: 'Gallery Image 2' },
  { imageUrl: '/grid-icons/asset-3.jpeg', title: 'Gallery Image 3' },
  { imageUrl: '/grid-icons/asset-4.jpeg', title: 'Gallery Image 4' },
  { imageUrl: '/grid-icons/asset-5.jpeg', title: 'Gallery Image 5' },
  { imageUrl: '/grid-icons/asset-6.jpeg', title: 'Gallery Image 6' },
  { imageUrl: '/grid-icons/asset-7.jpeg', title: 'Gallery Image 4' },
  { imageUrl: '/grid-icons/asset-8.jpeg', title: 'Gallery Image 5' },
  { imageUrl: '/grid-icons/asset-9.jpeg', title: 'Gallery Image 6' },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Page title="Gallery" description="Explore our restaurant gallery and beautiful moments.">
      <Wrapper>
        <MainImageWrapper>
          <NextImage
            src={GALLERY_IMAGES[activeIndex].imageUrl}
            alt={GALLERY_IMAGES[activeIndex].title}
            layout="fill"
            objectFit="contain"
          />
        </MainImageWrapper>
        <SwiperWrapper>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
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
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {GALLERY_IMAGES.map((image, idx) => (
              <SwiperSlide key={idx}>
                <ImageWrapper>
                  <NextImage src={image.imageUrl} layout="fill" objectFit="contain" alt={image.title} />
                </ImageWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 5rem;
  }
  padding: 5rem 0;
`;

const MainImageWrapper = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto 5rem auto;
  aspect-ratio: 4/3;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  background: white;

  ${media('<=tablet')} {
    width: 80%;
    margin-bottom: 3rem;
  }
`;

const SwiperWrapper = styled.div`
  .swiper-slide {
    height: auto;
    display: flex;
    justify-content: center;
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background: white;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  /* Target the Next.js Image component (wrapper or img) */
  & span, & img {
    transition: transform 0.5s ease !important;
  }

  &:hover {
    box-shadow: var(--shadow-lg);
    
    & span, & img {
      transform: scale(1.1);
    }
  }
`;
