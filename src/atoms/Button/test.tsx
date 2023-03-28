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

  it('Should render Button Component when disabled', () => {
    renderTheme(<Button text="clique aqui" disabled type="button" />);

    const button = screen.getByRole('button');

    expect(getComputedStyle(button).cursor).toBe('not-allowed');
  });

  it('Should match snapshot button', () => {
    renderTheme(<Button text="clique aqui" type="button" />);

    expect(screen.getByRole('button', { name: /clique aqui/i }))
      .toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 20px 23px 19px;
        gap: 10px;
        border: none;
        cursor: pointer;
        min-width: 145px;
        height: 67px;
        font-weight: 700;
        color: #ffff;
        background: #6246EA;
        border-radius: 8px;
        -webkit-transition: filter 0.4s ease;
        transition: filter 0.4s ease;
      }

      .c0:hover {
        -webkit-filter: brightness(1.1);
        filter: brightness(1.1);
      }

      <button
        class="c0"
        type="button"
      >
        clique aqui
      </button>
    `);
  });
});
