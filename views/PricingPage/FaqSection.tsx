import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

interface FaqSectionProps {
  id?: string;
}

export default function FaqSection({ id }: FaqSectionProps) {
  return (
    <Wrapper id={id}>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="Is Aakash Misal a pure veg restaurant?">
        Yes, Aakash Misal is a 100% Pure Veg restaurant. We serve authentic Maharashtrian dishes, Misal Pav, thalis, dosas, and other vegetarian specialties prepared with fresh ingredients.
      </Accordion>
      <Accordion title="What is Aakash Misal famous for?">
        We are especially famous for our authentic Misal Pav, prepared using traditional recipes since 1972. Our flavorful curries, vegetarian thalis, and vegan options are also customer favorites.
      </Accordion>
      <Accordion title="Is your restaurant family-friendly?">
        Yes, we are a family-friendly restaurant on the Pune–Nashik Highway with spacious seating, a welcoming ambiance, and a dedicated kids play area for families traveling with children.
      </Accordion>
      <Accordion title="Is parking available at Aakash Misal?">
        Yes, we provide ample parking space, making it convenient for highway travelers, families, and large groups.
      </Accordion>
      <Accordion title="Is Aakash Misal a good stop for highway travelers?">
        Yes, we are one of the most trusted highway restaurants near Pune, offering fast service, clean facilities, and wholesome vegetarian meals ideal for road trips.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
