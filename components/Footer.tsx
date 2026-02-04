import NextLink from 'next/link';
import NextImage from 'next/image';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { InstagramIcon } from './InstagramIcon';
import { MENU_CATEGORIES } from 'pages/menu';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Our Menu',
    items: MENU_CATEGORIES.map((category) => ({
      title: category.title,
      href: `/menu#${category.id}`,
    })),
  },
  {
    title: 'Knowledge',
    items: [
      { title: 'Contact', href: '/contact' },
      { title: 'FAQ', href: '/about#faq' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          <CompanyInfo>
            <LogoWrapper>
              <NextImage src="/logo.png" alt="Aakash Misal Logo" width={120} height={120} />
            </LogoWrapper>
            <ContactItem>
              <span>Address:</span> Near Khed Ghat, National Highway 50, Rajgurunagar, Maharashtra 410505
            </ContactItem>
            <ContactItem>
              <span>Phone:</span> <a href="tel:+918208742212">+91 82087 42212</a>
            </ContactItem>
            <ContactItem>
              <span>Email:</span> <a href="mailto:info@aakashmisal.com">info@aakashmisal.com</a>
            </ContactItem>

            <FollowUsHeader>Follow Us</FollowUsHeader>
            <ShareBar>
              <NextLink href="https://www.instagram.com/aakashmisalhouse" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <InstagramIcon size={40} round={true} />
                </a>
              </NextLink>
              <NextLink href="https://www.facebook.com/people/Akash-Misal-Pure-Veg-Restaurant/61558029940557/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <FacebookIcon size={40} round={true} />
                </a>
              </NextLink>
            </ShareBar>
          </CompanyInfo>

          <LinksWrapper>
            {footerItems.map((singleItem) => (
              <FooterList key={singleItem.title} {...singleItem} />
            ))}
          </LinksWrapper>
        </ListContainer>
        <BottomBar>
          <Copyright>&copy; Copyright 2026 Aakash Misal House. All rights reserved.</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 4rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const CompanyInfo = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  
  ${media('<=tablet')} {
    grid-column: span 1;
  }
`;

const LinksWrapper = styled.div`
  grid-column: 6 / -1;
  display: flex;
  justify-content: flex-end;
  align-self: end;
  align-items: flex-start;
  gap: 8rem;

  ${media('<=tablet')} {
    grid-column: span 1;
    align-self: start;
    justify-content: start;
    flex-direction: column;
    gap: 3rem;
    padding-top: 3rem;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 2rem;
  position: relative;
  width: 25rem; 
`;

const ContactItem = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: rgba(var(--textSecondary), 0.8);

  span {
    font-weight: bold;
    color: rgb(var(--textSecondary));
    margin-right: 0.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: rgb(var(--primary));
    }
  }
`;

const FollowUsHeader = styled.h4`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  display: flex;
  align-items: center;
  
  & > *:not(:first-child) {
    margin-left: 1.5rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.4rem;
  margin-top: 0.5rem;
  text-align: center;
  width: 100%;
  color: rgba(var(--textSecondary), 0.6);
`;

const BottomBar = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(var(--textSecondary), 0.1);
  padding-top: 2rem;
`;
