import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Typewriter from 'components/Typewriter';

import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import Separator from 'components/Separator';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    content: `Nice food and ambience located near Rajgurunagar, the hotel is now a very well known and crowded place on the Pune - Nashik Road. Misal and Batata Wadaa are specially very tasty. Dosa and sandwithes are good. The portions are enough for 1 person and depends on the hunger you have. Very nicely maintained place with clean washrooms and surroundings. Ample parking space and managed by security.`,
    author: {
      name: 'आनंद ठाकुर',
      title: 'Local Guide Level 8',
      avatarUrl: '/testimonials/author-photo-1.jpeg',
    },
  },
  {
    content: `We stopped by Akash Misal House on the way to Shirdi and had a great experience. The misal was delicious and met our expectations, the masala dosa was authentic, and the vada pav was tasty without being too oily. The place is spacious with a nice ambiance and ample parking. Service is quick, and prices are reasonable. Highly recommend for anyone traveling to Nashik or Shirdi - definitely worth a visit!`,
    author: {
      name: 'Prajkta',
      title: 'Local Guide Level 7',
      avatarUrl: '/testimonials/author-photo-2.jpeg',
    },
  },
  {
    content: `This amazing place to take stop while traveling. Firstly taste of food is very good. Till now tried many items and all of them tasted amazing. Secondly good ambience and amazing management. Inspite of huge rush, we completed our food within 45 mins due to good management. Thirdly they have kids bathroom, change room and kids wash basin as well which suggests they have taken care of things considering all ages of traveller. This becomes very helpful when u r traveling with kids. Overall very good experience and hope so this maintained henceforth as well.`,
    author: {
      name: 'Piyush Kankariya',
      title: 'Local Guide Level 7',
      avatarUrl: '/testimonials/author-photo-3.jpeg',
    },
  },
];

export default function Testimonials() {
  return (
    <div>
      <Separator />
      <TestimonialsWrapper>
        <Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={1} autoplay={{ delay: 8000 }} centeredSlides navigation loop>
          {TESTIMONIALS.map((singleTestimonial, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard>
                <Content>
                  “<Typewriter text={singleTestimonial.content} />”
                </Content>
                <AuthorContainer>
                  <AuthorImageContainer>
                    <NextImage src={singleTestimonial.author.avatarUrl} alt={singleTestimonial.author.name} width={48} height={48} />
                  </AuthorImageContainer>
                  <AuthorContent>
                    <AuthorName>{singleTestimonial.author.name}</AuthorName>
                    <AuthorTitle>{singleTestimonial.author.title}</AuthorTitle>
                  </AuthorContent>
                </AuthorContainer>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsWrapper>
      <Separator />
    </div>
  );
}

const TestimonialsWrapper = styled(Container)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--secondary));

    ${media('<=desktop')} {
      display: none;
    }
  }

  .swiper-button-prev {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;
  max-width: 60%;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
`;

const AuthorTitle = styled.p`
  font-weight: bold;
`;

const AuthorName = styled.p`
  font-weight: normal;
`;

const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;
