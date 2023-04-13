import { forwardRef } from 'react';
import * as Styled from './styles';
import { Icategory } from '@/interfaces/Category';

export interface CategoryCardProps extends Icategory {
  onClick: () => void;
  categorySelected?: string;
}

const CategoryCard = forwardRef<HTMLElement, CategoryCardProps>(
  ({ title, id, image, onClick, categorySelected, ...props }, ref) => {
    return (
      <Styled.Container
        onClick={onClick}
        aria-details={title}
        ref={ref}
        id={id}
        isActive={categorySelected === title}
        {...props}
      >
        <div>
          <img src={image.url} alt={image.alt} />
          <h1>{title}</h1>
        </div>
      </Styled.Container>
    );
  },
);

CategoryCard.displayName = 'CategoryCard component';

export default CategoryCard;
