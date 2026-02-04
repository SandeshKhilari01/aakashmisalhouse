import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Since 1972, Aakash Misal House has been a trusted destination for authentic Misal Pav and Pure Veg Maharashtrian food on the Pune–Nashik Highway."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-1.jpeg" title="The Best Reasturant on Pune-Nashik Highway." overTitle="About Akash Misal House and Pure Veg Restaurant">
            <p style={{ textAlign: 'justify' }}>
              Since 1972, Aakash Misal has been a trusted name for authentic Pure Veg food on the Pune–Nashik Highway. Known for our authentic Misal Pav, wholesome thalis, dosas, and traditional Maharashtrian dishes, we proudly serve travelers, families, and food lovers looking for hygienic and flavorful vegetarian food near Pune.
              We use fresh, locally sourced ingredients and maintain high standards of cleanliness, quality, and taste. With spacious seating, ample parking, and a family-friendly ambiance, Aakash Misal has become a trusted highway restaurant near Pune for those seeking delicious vegan and pure vegetarian meals.
              Whether you&apos;re on a road trip to Nashik or dining with family, we promise authentic taste, fast service, and a satisfying experience every time.{' '}
              <Link href="/about">To know more about us?</Link>
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <Testimonials />
          <FeaturesGallery />
          <Features />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 1rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 5rem;
  }

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
