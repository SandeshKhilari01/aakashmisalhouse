import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import LocationIcon from 'components/LocationIcon';
import PhoneIcon from 'components/PhoneIcon';
import { media } from 'utils/media';

export default function WaveCta() {
  // Restaurant contact information
  const PHONE_NUMBER = '+91 82087 42212';
  const LOCATION_URL = 'https://maps.app.goo.gl/eN5pvBV2grUAwVWaA';

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210" preserveAspectRatio="none">
        <path
          fill="#8B1538"
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <CtaWrapper>
        <Container>
          <Title>Ready to Experience Authentic Flavors?</Title>
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
              <OutlinedButton as="a">
                <span>Call Now</span>
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
              </OutlinedButton>
            </NextLink>
          </CustomButtonGroup>
        </Container>
      </CtaWrapper>
    </>
  );
}

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
  margin-top: -1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;

  ${media('<=tablet')} {
    padding-top: 8rem;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 4rem;
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

const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;
