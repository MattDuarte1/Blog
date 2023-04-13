import { forwardRef, useRef } from 'react';
import { Icategory } from '@/interfaces/Category';
import Heading from '@/atoms/Heading';
import CategoryCard from '@/molecules/CategoryCard';
import * as Styled from './styles';
import { useBlogContext } from '@/contexts/Theme/hook';

type CategoriesProps = {
  data?: readonly Icategory[];
};

const Categories = forwardRef<HTMLDivElement, CategoriesProps>(
  ({ data, ...props }, ref) => {
    const {
      changeCategory,
      state: { categorySelected },
    } = useBlogContext();
    const categoryRef = useRef<HTMLDivElement>(null);

    return (
      <Styled.Container id="categoria" ref={ref} {...props}>
        <Styled.CategoryHeader>
          <Heading as="h1" size={'large'} color="black">
            Categorias
          </Heading>
        </Styled.CategoryHeader>
        <Styled.CategoryBody>
          {data?.map((item) => (
            <CategoryCard
              key={item.id}
              ref={categoryRef}
              id={item.id}
              title={item.title}
              image={item.image}
              categorySelected={categorySelected}
              onClick={() => changeCategory(item.title)}
            />
          ))}
        </Styled.CategoryBody>
      </Styled.Container>
    );
  },
);

Categories.displayName = 'Categories Section Component';

export default Categories;
