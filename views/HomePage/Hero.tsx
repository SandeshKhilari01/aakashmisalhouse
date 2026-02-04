import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import VideoBackground from 'components/VideoBackground';
import LocationIcon from 'components/LocationIcon';
import PhoneIcon from 'components/PhoneIcon';
import { media } from 'utils/media';

export default function Hero() {
  // Restaurant contact information
  const PHONE_NUMBER = '+91 82087 42212';
  const LOCATION_URL = 'https://maps.app.goo.gl/eN5pvBV2grUAwVWaA';

  return (
    <HeroWrapper>
      <VideoBackground
        videoSrc="/hero-video.mp4"
        posterSrc="/hero-poster.jpg"
        overlayOpacity={0.5}
      />
      <Contents>
        <CustomOverTitle>Pure Veg Restaurant on Pune–Nashik Highway</CustomOverTitle>
        <Heading>Aakash Misal And Pure Veg Restaurant</Heading>
        <Description>
          Located in Rajgurunagar on the Pune–Nashik Highway, Aakash Misal is a well-known pure veg and vegan restaurant serving travelers, families, and food lovers who seek delicious, hygienic, and wholesome meals. Just a short drive from Pune, we are one of the most popular highway restaurants near Pune, offering authentic Maharashtrian flavors in a clean, family-friendly environment.
        </Description>
        <CustomButtonGroup>
          <NextLink href={LOCATION_URL} passHref>
            <DirectionsButton as="a" target="_blank" rel="noopener noreferrer">
              <span>Get Directions</span>
              <IconWrapper>
                <LocationIcon />
              </IconWrapper>
            </DirectionsButton>
          </NextLink>
          <NextLink href={`tel:${PHONE_NUMBER}`} passHref>
            <CallButton as="a">
              <span>Call Now</span>
              <IconWrapper>
                <PhoneIcon />
              </IconWrapper>
            </CallButton>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  position: relative;
  display: flex;
  padding: 5rem 0;
  max-width: none;
  height: 85vh;
  overflow: hidden;

  ${media('<=desktop')} {
    padding: 1rem 0;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const Contents = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  max-width: 60rem;
  padding: 0 2rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
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

  /* Reset the default span style from Button component if needed, or use specific class */
  span {
    margin-left: 0;
  }

  ${IconWrapper} {
    margin-left: 1rem; 
  }
`;

const CallButton = styled(Button)`
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

const ImageContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.9;
  line-height: 1.6;
  color: rgb(var(--textSecondary));
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  color: rgb(var(--textSecondary));
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
