import styled from 'styled-components';
import { media } from 'utils/media';

interface MenuCardProps {
  title: string;
  items?: { name: string; price: string; description?: string }[];
  id?: string;
}

export default function MenuCard({ title, items = [], id }: MenuCardProps) {
  return (
    <Card id={id}>
      <Title>{title}</Title>
      <Content>
        {items.length > 0 ? (
          <ItemList>
            {items.map((item, idx) => (
              <Item key={idx}>
                <ItemHeader>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemHeader>
                {item.description && <ItemDescription>{item.description}</ItemDescription>}
              </Item>
            ))}
          </ItemList>
        ) : (
          <Placeholder>Menu items coming soon...</Placeholder>
        )}
      </Content>
    </Card>
  );
}

const Card = styled.div`
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-lg);
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(var(--primary), 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(var(--primary), 0.3);
  }
`;

const Title = styled.h3`
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
  padding: 2rem;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

const Content = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Ensure scrollbar stays inside if height constrained */
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 25rem; /* Approx height for 5 items */
  overflow-y: auto;
  padding-right: 1rem; /* Space for scrollbar */

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(var(--text), 0.05);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(var(--secondary), 0.5);
    border-radius: 3px;
    
    &:hover {
      background: rgba(var(--secondary), 0.8);
    }
  }
`;

const Item = styled.li`
  &:not(:last-child) {
    border-bottom: 1px dashed rgba(var(--text), 0.2);
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

const ItemName = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
  color: rgb(var(--text));
  margin: 0;
`;

const ItemPrice = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: rgb(var(--secondary));
`;

const ItemDescription = styled.p`
  font-size: 1.4rem;
  color: rgba(var(--text), 0.7);
  margin: 0;
  line-height: 1.4;
`;

const Placeholder = styled.div`
  text-align: center;
  color: rgba(var(--text), 0.5);
  font-style: italic;
  padding: 2rem;
  font-size: 1.6rem;
`;
