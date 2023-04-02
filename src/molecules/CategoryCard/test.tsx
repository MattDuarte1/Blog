import CategoryCard, { CategoryCardProps } from '.';
import { renderTheme } from '@/styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '@/styles/theme';

describe('<CategoryCard />', () => {
  const handleSelectCategory = jest.fn();
  const Mockprops: CategoryCardProps = {
    id: '1',
    title: undefined,
    onClick: handleSelectCategory,
    categorySelected: null,
    image: {
      url: 'www.google.com',
      alt: 'javascript',
    },
  };
  it('Should render CategoryCard component when not selected', () => {
    renderTheme(<CategoryCard {...Mockprops} />);
    const category = screen.getByRole('article');

    expect(category).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /javascript/i }),
    ).toBeInTheDocument();

    // test styles of component default
    expect(category).toHaveStyle({
      'background-color': theme.colors.white,
      color: theme.colors.black,
      width: '220px',
      height: '280px',
      'padding-left': theme.spacings.large,
      cursor: 'pointer',
      display: 'flex',
      filter: 'drop-shadow(4px 6px 13px rgba(0,0,0,0.1))',
      'border-radius': '8px',
    });

    expect(category).toHaveStyleRule('width', '80%', {
      media: theme.media.lteSmall,
    });
  });

  it('Should render CategoryCard with backgroundColor {theme.colors.blue} when category is selected', () => {
    const newMockWithCategorySelected: CategoryCardProps = {
      ...Mockprops,
      categorySelected: 'javascript',
      title: 'javascript',
    };
    renderTheme(<CategoryCard {...newMockWithCategorySelected} />);

    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('article')).toHaveStyle({
      'background-color': theme.colors.blue,
      color: '#fff',
      width: '220px',
      height: '280px',
      'padding-left': theme.spacings.large,
      cursor: 'pointer',
      display: 'flex',
      filter: 'drop-shadow(4px 6px 13px rgba(0,0,0,0.1))',
      'border-radius': '8px',
    });
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<CategoryCard {...Mockprops} />);

    expect(container.firstElementChild).toMatchSnapshot();
  });
});
