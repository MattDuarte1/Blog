import { screen } from '@testing-library/react';
import Hero from '.';
import { renderTheme } from '@/styles/render-theme';
import { theme } from '@/styles/theme';
import mockHero from './mock';
import React from 'react';

describe('<Hero />', () => {
  it('Should render correctly hero section', async () => {
    const { container } = renderTheme(<Hero data={mockHero} />);
    const description = container.querySelector('p');
    const imagem = screen.getByRole('img');

    expect(description).toBeInTheDocument();
    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveStyle({
      width: mockHero.image.custom.width,
      height: mockHero.image.custom.height,
    });
  });

  it('Should render correctly hero section with breakpoints screen is lteMedium', () => {
    const { container } = renderTheme(<Hero data={mockHero} />);
    const description = container.querySelector('p');

    // description
    expect(description).toHaveStyleRule('margin-top', '40px', {
      media: theme.media.lteMedium,
    });
    expect(description).toHaveStyleRule('font-size', theme.font.sizes.small, {
      media: theme.media.lteMedium,
    });
    expect(description).toHaveStyleRule('line-height', 'normal', {
      media: theme.media.lteMedium,
    });
  });

  it('Should render correctly hero section with breakpoints screen is ltSmall', () => {
    const { container } = renderTheme(<Hero data={mockHero} />);
    const description = container.querySelector('p');

    // description
    expect(description).toHaveStyleRule('margin-top', '20px', {
      media: theme.media.lteSmall,
    });

    expect(description).toHaveStyleRule('font-size', theme.font.sizes.xsmall, {
      media: theme.media.lteSmall,
    });

    expect(description).toHaveStyleRule('line-height', 'normal', {
      media: theme.media.lteSmall,
    });
  });

  it('Should match snapshot component', () => {
    const { container } = renderTheme(<Hero data={mockHero} />);

    expect(container).toMatchSnapshot();
  });
});
