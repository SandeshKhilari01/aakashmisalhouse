import NextImage from 'next/image';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';

export interface BasicSectionProps {
  imageUrl: string;
  title: string;
  overTitle: string;
  reversed?: boolean;
}

export default function BasicSection({ imageUrl, title, overTitle, reversed, children }: PropsWithChildren<BasicSectionProps>) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <BasicSectionWrapper reversed={reversed} ref={sectionRef}>
      <ImageContainer className={isVisible ? 'visible' : ''}>
        <NextImage src={imageUrl} alt={title} layout="fill" objectFit="cover" objectPosition="center top" />
      </ImageContainer>
      <ContentContainer className={isVisible ? 'visible' : ''}>
        <CustomOverTitle>{overTitle}</CustomOverTitle>
        <Title>{title}</Title>
        <RichText>{children}</RichText>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((14/16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease 0.2s, transform 1s ease 0.2s; /* Added delay for content */

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

type Props = Pick<BasicSectionProps, 'reversed'>;
const BasicSectionWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

  ${ImageContainer} {
    margin: ${(p: Props) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  }

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
