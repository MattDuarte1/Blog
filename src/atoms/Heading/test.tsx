import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Heading from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading>', () => {
  it('Should render a Heading component default values', () => {
    const { container } = renderTheme(<Heading>menu</Heading>);
    const heading = container.querySelector('h1');

    expect(heading?.tagName.toLowerCase()).toBe('h1');
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.huge);
    expect(heading).toHaveStyleRule('color', theme.colors.white);
    expect(heading).toHaveStyleRule('text-transform', 'none');
  });

  it('Should render with others color', () => {
    const { rerender } = renderTheme(<Heading color="black">menu</Heading>);
    const heading = screen.getByRole('heading', { name: 'menu' });

    expect(heading).toHaveStyle(`color: ${theme.colors.black}`);

    rerender(
      <ThemeProvider theme={theme}>
        <Heading color="blue">menu</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `color: ${theme.colors.blue}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading color="darkGrey">menu</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `color: ${theme.colors.darkGrey}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading color="lightGrey1">menu</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `color: ${theme.colors.lightGrey1}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading color="lightGrey2">menu</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `color: ${theme.colors.lightGrey2}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading color="grey">menu</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `color: ${theme.colors.grey}`,
    );
  });

  it('Should render a Heading with UpperCase Letter', () => {
    renderTheme(<Heading uppercase>menu</Heading>);

    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyleRule(
      'text-transform',
      'uppercase',
    );
  });

  it('Should render Heading when have with others sizes', () => {
    const { rerender } = renderTheme(<Heading size="xxsmall">menu</Heading>);
    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `font-size: ${theme.font.sizes.xxsmall}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xsmall">menu</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `font-size: ${theme.font.sizes.xsmall}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="small">menu</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `font-size: ${theme.font.sizes.small}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">menu</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `font-size: ${theme.font.sizes.medium}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="large">menu</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `font-size: ${theme.font.sizes.large}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xlarge">menu</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `font-size: ${theme.font.sizes.xlarge}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xxlarge">menu</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `font-size: ${theme.font.sizes.xxlarge}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">menu</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `font-size: ${theme.font.sizes.huge}`,
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xhuge">menu</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'menu' })).toHaveStyle(
      `font-size: ${theme.font.sizes.xhuge}`,
    );
  });

  it('Should match snapshot component', () => {
    renderTheme(<Heading>menu</Heading>);

    expect(screen.getByRole('heading', { name: 'menu' })).toMatchSnapshot();
  });
});
