import { renderTheme } from '@/styles/render-theme';
import Button from '.';
import { screen } from '@testing-library/react';

describe('<Button />', () => {
  it('Should render Button Component', () => {
    renderTheme(<Button text="clique aqui" type="button" />);

    expect(
      screen.getByRole('button', { name: /clique aqui/i }),
    ).toBeInTheDocument();
  });

  it('Should render Button Component when Onclick', () => {
    const onClickFunc = jest.fn();
    renderTheme(
      <Button text="clique aqui" onClick={onClickFunc} type="button" />,
    );

    expect(
      screen.getByRole('button', { name: /clique aqui/i }),
    ).toBeInTheDocument();
  });

  it('Should match snapshot button', () => {
    renderTheme(<Button text="clique aqui" type="button" />);

    expect(
      screen.getByRole('button', { name: /clique aqui/i }),
    ).toMatchInlineSnapshot();
  });
});
