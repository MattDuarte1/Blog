import Categories from '.';
import { fireEvent, render } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import MockData from './mock';
import { ThemeContext } from '@/contexts/Theme';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

const changeCategoryMock = jest.fn();

describe('<Categories />', () => {
  it('Should render Categories component ', () => {
    const { container } = renderTheme(<Categories data={MockData} />);

    const categories = container.querySelector('section');
    expect(categories).toBeInTheDocument();
    expect(categories).toHaveAttribute('id', 'categoria');
    expect(categories).toHaveStyle({
      padding: theme.spacings.xxlarge,
      'background-color': theme.colors.white,
      width: '100%',
      height: '100%',
    });
    expect(categories).toHaveStyleRule('padding', theme.spacings.medium, {
      media: theme.media.lteMedium,
    });
  });

  it('Should call changeCategory function when categorycard is clicked', () => {
    const BlogContextValueMock = {
      state: {
        drawerIsOpen: false,
        theme,
        categorySelected: '',
      },
      changeTheme: jest.fn(),
      activeDrawer: jest.fn(),
      changeCategory: changeCategoryMock,
    };
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={BlogContextValueMock}>
          <Categories data={MockData} />
        </ThemeContext.Provider>
        ,
      </ThemeProvider>,
    );
    const categoryCard = container.querySelector('article');
    expect(categoryCard).toBeInTheDocument();

    fireEvent.click(categoryCard);
    expect(changeCategoryMock).toHaveBeenCalled();
  });

  it('Should match snapshot categories component', () => {
    const { container } = renderTheme(<Categories data={MockData} />);

    expect(container.firstElementChild).toMatchSnapshot();
  });
});
