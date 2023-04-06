import { screen } from '@testing-library/react';
import { NotFoundPage } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<NotFoundPage />', () => {
  it('Should Render NotFoundPage Component', () => {
    renderTheme(<NotFoundPage />);

    expect(screen.getByRole('heading', { name: /Page Not Found/i }));
    expect(screen.getByRole('heading', { name: /404/i }));
  });

  it('Should match snapshot component', () => {
    const { container } = renderTheme(<NotFoundPage />);

    expect(container.firstElementChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #FFFFFE;
        height: 100vh;
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c1 {
        width: 100%;
        text-align: center;
        color: #2B2C34;
        font-size: 6.4rem;
        font-weight: 700;
      }

      .c2 {
        color: #2B2C34;
        font-size: 10.06rem;
      }

      @media (max-width:400px) {
        .c1 {
          font-size: 2.4rem;
        }
      }

      <div
        class="c0"
      >
        <h1
          class="c1"
        >
          Page Not Found
        </h1>
        <h1
          class="c1 c2"
        >
          404
        </h1>
      </div>
    `);
  });
});
