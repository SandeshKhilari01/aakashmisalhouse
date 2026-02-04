import NextImage from 'next/image';
import styled from 'styled-components';

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function BasicCard({ title, description, imageUrl }: BasicCardProps) {
  return (
    <Card>
      <NextImage src={imageUrl} width={400} height={300} alt={title} />
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 0.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

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

const Title = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
`;
