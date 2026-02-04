import Head from 'next/head';
import NextImage from 'next/image';
import { PropsWithChildren } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { EnvVars } from 'env';
import { media } from 'utils/media';
import Container from './Container';
import SectionTitle from './SectionTitle';

export interface PageProps {
  title: string;
  description?: string;
  justifyDescription?: boolean;
  image?: string;
  imagePosition?: 'left' | 'right';
  animate?: boolean;
}

export default function Page({
  title,
  description,
  justifyDescription,
  image,
  imagePosition = 'right',
  children,
  animate = false,
}: PropsWithChildren<PageProps>) {
  return (
    <>
      <Head>
        <title>
          {title} | {EnvVars.SITE_NAME}
        </title>
        <meta name="description" content={description} />
      </Head>
      <Wrapper>
        <HeaderContainer>
          <Container>
            <HeaderContent hasImage={!!image} imagePosition={imagePosition}>
              {image && imagePosition === 'left' && (
                <ImageContainer animate={animate}>
                  <NextImage src={image} width={500} height={500} objectFit="contain" alt={title} />
                </ImageContainer>
              )}
              <TextContainer hasImage={!!image} imagePosition={imagePosition} animate={animate}>
                <Title>{title}</Title>
                {description && (
                  <Description justify={justifyDescription} hasImage={!!image} imagePosition={imagePosition}>
                    {description}
                  </Description>
                )}
              </TextContainer>
              {image && imagePosition === 'right' && (
                <ImageContainer animate={animate}>
                  <NextImage src={image} width={500} height={500} objectFit="contain" alt={title} />
                </ImageContainer>
              )}
            </HeaderContent>
          </Container>
        </HeaderContainer>
        <Container>
          <ChildrenWrapper animate={animate}>{children}</ChildrenWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  background: rgb(var(--background));
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--secondary));
  min-height: 4rem;
`;

const HeaderContent = styled.div<{ hasImage?: boolean; imagePosition?: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.hasImage ? 'space-between' : 'center')};
  gap: 4rem;
  padding: 5rem 0;

  ${media('<=tablet')} {
    flex-direction: column;
    text-align: center;
    padding: 5rem 0;
  }
`;

const TextContainer = styled.div<{ hasImage?: boolean; imagePosition?: 'left' | 'right'; animate?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.hasImage ? (p.imagePosition === 'left' ? 'flex-start' : 'flex-start') : 'center')};
  opacity: ${(p) => (p.animate ? 0 : 1)};
  animation: ${(p) => (p.animate ? css`${slideUp} 0.6s ease-out forwards` : 'none')};
  animation-delay: 0.1s;

  ${media('<=tablet')} {
    align-items: center;
  }
`;

const ImageContainer = styled.div<{ animate?: boolean }>`
  flex-shrink: 0;
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;
  opacity: ${(p) => (p.animate ? 0 : 1)};
  animation: ${(p) => (p.animate ? css`${slideUp} 0.6s ease-out forwards` : 'none')};
  animation-delay: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 2rem;
  text-align: inherit;
`;

const Description = styled.div<{ justify?: boolean; hasImage?: boolean; imagePosition?: 'left' | 'right' }>`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
  text-align: ${(p) => (p.justify ? 'justify' : p.hasImage ? 'left' : 'center')};
  max-width: ${(p) => (p.hasImage ? '100%' : '60%')};
  margin: ${(p) => (p.hasImage ? '0' : 'auto')};

  ${media('<=tablet')} {
    max-width: 100%;
    text-align: ${(p) => (p.justify ? 'justify' : 'center')};
  }
`;

const ChildrenWrapper = styled.div<{ animate?: boolean }>`
  margin-top: 10rem;
  margin-bottom: 10rem;
  opacity: ${(p) => (p.animate ? 0 : 1)};
  animation: ${(p) => (p.animate ? css`${slideUp} 0.6s ease-out forwards` : 'none')};
  animation-delay: 0.3s;
`;
