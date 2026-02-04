import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Page from 'components/Page';
import MenuCard from 'components/MenuCard';
import { media } from 'utils/media';

import { kebabCase } from 'lodash';

export const MENU_CATEGORIES = [
  {
    title: "Maharashtrian Snacks",
    id: "maharashtrian-snacks",
    items: [
      { name: 'Akash Special Misal', price: '₹100' },
      { name: 'Vada Pav (1 Plate)', price: '₹50' },
      { name: 'Vada Sample', price: '₹95' },
      { name: 'Sabudana Wada', price: '₹100' },
      { name: 'French Fries', price: '₹120' },
      { name: 'Kanda Bhaji', price: '₹100' },
      { name: 'Batata Bhaji', price: '₹100' },
      { name: 'Upma', price: '₹80' },
      { name: 'Sheera', price: '₹100' },
      { name: 'Kanda Pohe', price: '₹80' },
      { name: 'Gol Bhaji', price: '₹100' },
      { name: 'Special Usal Pav', price: '₹80' },
    ]
  },
  {
    title: "Akash Special Sandwich",
    id: "akash-special-sandwich",
    items: [
      { name: 'Veg Sandwich', price: '₹90' },
      { name: 'Veg Cheese Sandwich', price: '₹110' },
      { name: 'Veg Grilled Sandwich', price: '₹130' },
      { name: 'Veg Cheese Grilled Sandwich', price: '₹160' },
      { name: 'Bread Butter', price: '₹90' },
      { name: 'Toast Butter', price: '₹90' },
    ]
  },
  {
    title: "Special South Indian",
    id: "special-south-indian",
    items: [
      { name: 'Masala Dosa Ghee', price: '₹130' },
      { name: 'Mysore Masala Dosa Ghee', price: '₹150' },
      { name: 'Palak Cheese Cut Dosa Ghee', price: '₹180' },
      { name: 'Masala Idli Ghee', price: '₹140' },
      { name: 'Onion Utappa Ghee', price: '₹130' },
    ]
  }
];

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return MENU_CATEGORIES;

    const lowerTerm = searchTerm.toLowerCase();

    return MENU_CATEGORIES.map(category => {
      // Filter items within the category
      const filteredItems = category.items.filter(item =>
        item.name.toLowerCase().includes(lowerTerm)
      );

      // Return the category with filtered items, only if it has matching items
      // OR if the category title itself matches (then show all items? or just keep category? Let's assume user searches for dishes principally)
      // Let's filter items. If category has 0 items left, we filter out the category later.
      return {
        ...category,
        items: filteredItems
      };
    }).filter(category => category.items.length > 0);
  }, [searchTerm]);

  return (
    <Page title="Our Menu" description="Explore our delicious authentic Maharashtrian cuisine and specials.">
      <Wrapper>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search for a dish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        <MenuGrid>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, idx) => (
              <MenuCard
                key={idx}
                title={category.title}
                items={category.items}
                id={category.id}
              />
            ))
          ) : (
            <NoResults>No dishes found matching &quot;{searchTerm}&quot;</NoResults>
          )}
        </MenuGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  padding-bottom: 0.1rem;
  margin-top: -5rem;
  & > :last-child {
    margin-bottom: 3rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  padding: 0 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 50rem;
  padding: 1.5rem 2.5rem;
  font-size: 1.8rem;
  border-radius: 5rem;
  border: 2px solid rgba(var(--primary), 0.2);
  background: rgb(var(--cardBackground));
  color: rgb(var(--text));
  outline: none;
  transition: all 0.2s;
  box-shadow: var(--shadow-sm);

  &:focus {
    border-color: rgb(var(--primary));
    box-shadow: var(--shadow-md);
  }

  &::placeholder {
    color: rgba(var(--text), 0.5);
  }
`;

const NoResults = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 2rem;
  color: rgba(var(--text), 0.6);
  padding: 5rem;
`;

const MenuGrid = styled(AutofitGrid)`
  --card-min-width: 35rem;
  grid-gap: 4rem;
`;
