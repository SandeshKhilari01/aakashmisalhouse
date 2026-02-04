import NextLink from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import LocationIcon from 'components/LocationIcon';
import PhoneIcon from 'components/PhoneIcon';
import { media } from 'utils/media';

export default function Cta() {
  // Restaurant contact information
  const PHONE_NUMBER = '+91 82087 42212';
  const LOCATION_URL = 'https://maps.app.goo.gl/eN5pvBV2grUAwVWaA';

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
    <CtaWrapper>
      <Container>
        <Stack ref={sectionRef} className={isVisible ? 'visible' : ''}>
          <OverTitle>Visit Us Today</OverTitle>
          <SectionTitle>Experience Authentic Maharashtrian Flavors</SectionTitle>
          <Description>
            Stop by for a delicious meal on your journey. We're conveniently located on the Pune–Nashik Highway, ready to serve you with the best pure veg cuisine.
          </Description>
          <ButtonGroup>
            <NextLink href={LOCATION_URL} passHref>
              <DirectionsButton as="a" target="_blank" rel="noopener noreferrer">
                <span>Get Directions</span>
                <IconWrapper>
                  <LocationIcon />
                </IconWrapper>
              </DirectionsButton>
            </NextLink>
            <NextLink href={`tel:${PHONE_NUMBER}`} passHref>
              <OutlinedButton as="a">
                <span>Call Now</span>
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
              </OutlinedButton>
            </NextLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 1rem;
  font-size: 1.2em;
`;

const DirectionsButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(var(--brandOrange));
  border-color: #ffffff;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  box-shadow: 0 4px 14px 0 rgba(255, 107, 53, 0.39);
  border-radius: 10rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.23);
    background-color: rgb(var(--brandRed));
    border-color: rgb(var(--brandRed));
  }

  span {
    margin-left: 0;
  }

  ${IconWrapper} {
    margin-left: 1rem; 
  }
`;

const OutlinedButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
  font-weight: 600;
  font-size: 1.5rem;
  border-radius: 10rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  span {
    margin-left: 0;
  }

  ${IconWrapper} {
    margin-left: 1rem;
  }
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
