import styled from 'styled-components';
import NextImage from 'next/image';
import AutofitGrid from 'components/AutofitGrid';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
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

export default function AboutPage() {
  return (

    <Page
      title="About Akash Misal House and Pure Veg Restaurant"
      justifyDescription={true}
      image="/logo.png"
      imagePosition="left"
      description="Since 1972, Aakash Misal & Pure Veg Restaurant has been a trusted destination for authentic Maharashtrian flavors in Rajgurunagar on the Pune–Nashik Highway. What began as a passion for serving delicious, wholesome vegetarian food has grown into one of the most popular pure veg restaurants near Pune, welcoming generations of families, travelers, and food lovers.
Known especially for our signature Misal Pav, we take pride in preparing every dish using carefully selected ingredients, traditional recipes, and a perfectly balanced spice blend that delivers rich, satisfying taste in every bite. Along with our famous misal, our menu features a wide variety of pure vegetarian dishes including hearty thalis, flavorful curries, and fresh dosas — all prepared with a strong commitment to hygiene, quality, and freshness. We source our vegetables, grains, and spices from trusted suppliers to ensure every meal is both nourishing and delicious.
More than just a highway restaurant on the Pune–Nashik route, Aakash Misal & Pure Veg Restaurant is a family-friendly dining destination offering a spacious seating area, warm hospitality, and a relaxed ambiance. Whether you are stopping by during a road trip, planning a family outing, or searching for the best Misal in Rajgurunagar, we strive to make every visit memorable.
With a 4.3+ Google rating and over 15,000 customer reviews, we are proud to be recognized as a trusted name for pure vegetarian food on the Pune–Nashik Highway. At Aakash Misal, we don’t just serve food — we serve tradition, consistency, and a taste that keeps our guests coming back year after year."
      animate={true}
    >
      <Wrapper>
        <FaqSection id="faq" />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
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
