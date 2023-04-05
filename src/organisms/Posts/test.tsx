import Posts from '.';
import { renderTheme } from '@/styles/render-theme';
import PostsMocked from './mock';
import mockRouter from 'next-router-mock';
import { fireEvent, screen } from '@testing-library/react';
import { theme } from '@/styles/theme';

jest.mock('next/router', () => require('next-router-mock'));

describe('<PostSection>', () => {
  it('Should render a Posts component', () => {
    const { container } = renderTheme(<Posts data={PostsMocked} />);

    expect(container.firstElementChild).toBeInTheDocument();
    expect(container.firstElementChild).toHaveAttribute('id', 'posts');
    expect(container.firstElementChild).toHaveStyle({
      padding: '4.4rem',
      'background-color': theme.colors.white,
    });
    expect(container.firstElementChild).toHaveStyleRule('padding', '3.5rem', {
      media: theme.media.lteSmall,
    });
  });

  it('Should navigate to post[id] when clicked in PostCard', () => {
    renderTheme(<Posts data={PostsMocked} />);
    const firstPost = screen.getAllByRole('article')[1];

    fireEvent.click(firstPost);
    expect(mockRouter).toMatchObject({
      asPath: `/post/${firstPost.getAttribute('id')}`,
      pathname: `/post/${firstPost.getAttribute('id')}`,
    });
  });

  it('Should match snapshot component', () => {
    const { container } = renderTheme(<Posts data={PostsMocked} />);

    expect(container.firstElementChild).toMatchInlineSnapshot(`
      .c1 {
        font-family: 'Plus Jakarta Sans','sans-serif';
        font-style: normal;
        font-weight: 700;
        line-height: 1.2;
        text-transform: capitalize;
        font-size: 3.576rem;
        text-transform: none;
        color: #2B2C34;
      }

      .c4 {
        font-family: 'Plus Jakarta Sans','sans-serif';
        font-style: normal;
        font-weight: 700;
        line-height: 1.2;
        text-transform: capitalize;
        font-size: 1.617rem;
        text-transform: none;
        color: #2B2C34;
      }

      .c10 {
        font-family: 'Plus Jakarta Sans','sans-serif';
        font-style: normal;
        font-weight: 700;
        line-height: 1.2;
        text-transform: capitalize;
        font-size: 2.156rem;
        text-transform: none;
        color: #2B2C34;
      }

      .c3 {
        width: 300px;
        height: 425px;
        padding: 1.4rem;
        background: #FFFFFE;
        position: relative;
        box-shadow: 4px 6px 13px rgba(0,0,0,0.1);
        border-radius: 12px;
        text-align: start;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        cursor: pointer;
      }

      .c3 > h1 {
        margin-left: 1rem;
      }

      .c3 img {
        margin-bottom: 2rem;
      }

      .c3:hover {
        -webkit-transform: scale(1.02);
        -ms-transform: scale(1.02);
        transform: scale(1.02);
        -webkit-filter: drop-shadow(0 1.5px 2px rgba(0,0,0,0.2));
        filter: drop-shadow(0 1.5px 2px rgba(0,0,0,0.2));
      }

      .c5 {
        position: absolute;
        padding: 0 1.4rem;
        width: 100%;
        height: 57px;
        left: 0px;
        top: 348px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        color: #2B2C34;
      }

      .c6 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 90%;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 0px;
        gap: 15px;
        color: #2B2C34;
      }

      .c7 {
        overflow: hidden;
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }

      .c8 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        padding: 2px;
        gap: 4.2px;
        width: 184px;
        height: 46.2px;
      }

      .c9 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-flow: column nowrap;
        -ms-flex-flow: column nowrap;
        flex-flow: column nowrap;
      }

      .c9 > svg {
        color: #2B2C34;
        font-size: 2.4rem;
      }

      .c9 > h1 {
        display: inline;
      }

      .c0 {
        padding: 4.4rem;
        background-color: #FFFFFE;
      }

      .c2 {
        margin-top: 1.4rem;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(26rem,2fr));
        gap: 3.576rem;
      }

      @media (max-width:400px) {
        .c1 {
          font-size: 2.4rem;
        }
      }

      @media (max-width:400px) {
        .c6 > img {
          width: 47px;
          height: 47px;
        }
      }

      @media (max-width:400px) {
        .c0 {
          padding: 3.5rem;
        }
      }

      @media (max-width:1065px) {
        .c2 {
          grid-template-columns: repeat(auto-fill,minmax(27rem,1fr));
        }
      }

      @media (max-width:705px) {
        .c2 {
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          grid-template-columns: 0fr;
        }
      }

      <div
        class="c0"
        id="posts"
      >
        <h1
          class="c1"
        >
          Todos os Posts
        </h1>
        <div
          class="c2"
        >
          <article
            class="c3"
            id="92631209"
          >
            <img
              alt="javascript svg"
              data-nimg="1"
              decoding="async"
              height="198"
              loading="lazy"
              src="https://www.datocms-assets.com/90479/1674241447-javascript1.svg"
              srcset="https://www.datocms-assets.com/90479/1674241447-javascript1.svg 1x, https://www.datocms-assets.com/90479/1674241447-javascript1.svg 2x"
              style="color: transparent;"
              width="260"
            />
            <h1
              class="c4"
              color="black"
            >
              VOCÊ CONHECE JAVASCRIPT ?
            </h1>
            <div
              class="c5"
            >
              <div
                class="c6"
              >
                <div
                  class="c7"
                >
                  <img
                    alt="author image"
                    data-nimg="1"
                    decoding="async"
                    height="50"
                    src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75"
                    srcset="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75 2x"
                    style="color: transparent;"
                    width="50"
                  />
                </div>
                <div
                  class="c8"
                >
                  <h4>
                    Mateus Duarte
                  </h4>
                  <p>
                    03/02/2023
                  </p>
                </div>
              </div>
              <div
                class="c9"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                  />
                </svg>
                <h1
                  class="c10"
                >
                  0
                </h1>
              </div>
            </div>
          </article>
          <article
            class="c3"
            id="95380751"
          >
            <img
              alt="vuejs svg"
              data-nimg="1"
              decoding="async"
              height="198"
              loading="lazy"
              src="https://www.datocms-assets.com/90479/1674243496-vuejs.svg"
              srcset="https://www.datocms-assets.com/90479/1674243496-vuejs.svg 1x, https://www.datocms-assets.com/90479/1674243496-vuejs.svg 2x"
              style="color: transparent;"
              width="260"
            />
            <h1
              class="c4"
              color="black"
            >
              Vue JS: O que é, como funciona ?
            </h1>
            <div
              class="c5"
            >
              <div
                class="c6"
              >
                <div
                  class="c7"
                >
                  <img
                    alt="author image"
                    data-nimg="1"
                    decoding="async"
                    height="50"
                    src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75"
                    srcset="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75 2x"
                    style="color: transparent;"
                    width="50"
                  />
                </div>
                <div
                  class="c8"
                >
                  <h4>
                    Mateus Duarte
                  </h4>
                  <p>
                    03/02/2023
                  </p>
                </div>
              </div>
              <div
                class="c9"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                  />
                </svg>
                <h1
                  class="c10"
                >
                  0
                </h1>
              </div>
            </div>
          </article>
          <article
            class="c3"
            id="95380702"
          >
            <img
              alt="react svg"
              data-nimg="1"
              decoding="async"
              height="198"
              loading="lazy"
              src="https://www.datocms-assets.com/90479/1674241456-react.svg"
              srcset="https://www.datocms-assets.com/90479/1674241456-react.svg 1x, https://www.datocms-assets.com/90479/1674241456-react.svg 2x"
              style="color: transparent;"
              width="260"
            />
            <h1
              class="c4"
              color="black"
            >
              React Hooks: o que é e como funciona ?
            </h1>
            <div
              class="c5"
            >
              <div
                class="c6"
              >
                <div
                  class="c7"
                >
                  <img
                    alt="author image"
                    data-nimg="1"
                    decoding="async"
                    height="50"
                    src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75"
                    srcset="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75 2x"
                    style="color: transparent;"
                    width="50"
                  />
                </div>
                <div
                  class="c8"
                >
                  <h4>
                    Mateus Duarte
                  </h4>
                  <p>
                    03/02/2023
                  </p>
                </div>
              </div>
              <div
                class="c9"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                  />
                </svg>
                <h1
                  class="c10"
                >
                  0
                </h1>
              </div>
            </div>
          </article>
          <article
            class="c3"
            id="95380585"
          >
            <img
              alt="tailwind svg"
              data-nimg="1"
              decoding="async"
              height="198"
              loading="lazy"
              src="https://www.datocms-assets.com/90479/1674241443-css2.svg"
              srcset="https://www.datocms-assets.com/90479/1674241443-css2.svg 1x, https://www.datocms-assets.com/90479/1674241443-css2.svg 2x"
              style="color: transparent;"
              width="260"
            />
            <h1
              class="c4"
              color="black"
            >
              O que é Tailwind Css ?
            </h1>
            <div
              class="c5"
            >
              <div
                class="c6"
              >
                <div
                  class="c7"
                >
                  <img
                    alt="author image"
                    data-nimg="1"
                    decoding="async"
                    height="50"
                    src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75"
                    srcset="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75 2x"
                    style="color: transparent;"
                    width="50"
                  />
                </div>
                <div
                  class="c8"
                >
                  <h4>
                    Mateus Duarte
                  </h4>
                  <p>
                    03/02/2023
                  </p>
                </div>
              </div>
              <div
                class="c9"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                  />
                </svg>
                <h1
                  class="c10"
                >
                  0
                </h1>
              </div>
            </div>
          </article>
          <article
            class="c3"
            id="95380505"
          >
            <img
              alt="javascript svg"
              data-nimg="1"
              decoding="async"
              height="198"
              loading="lazy"
              src="https://www.datocms-assets.com/90479/1674241454-javascript4.svg"
              srcset="https://www.datocms-assets.com/90479/1674241454-javascript4.svg 1x, https://www.datocms-assets.com/90479/1674241454-javascript4.svg 2x"
              style="color: transparent;"
              width="260"
            />
            <h1
              class="c4"
              color="black"
            >
              Como usar Array no Javascript
            </h1>
            <div
              class="c5"
            >
              <div
                class="c6"
              >
                <div
                  class="c7"
                >
                  <img
                    alt="author image"
                    data-nimg="1"
                    decoding="async"
                    height="50"
                    src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75"
                    srcset="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75 2x"
                    style="color: transparent;"
                    width="50"
                  />
                </div>
                <div
                  class="c8"
                >
                  <h4>
                    Mateus Duarte
                  </h4>
                  <p>
                    03/02/2023
                  </p>
                </div>
              </div>
              <div
                class="c9"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                  />
                </svg>
                <h1
                  class="c10"
                >
                  0
                </h1>
              </div>
            </div>
          </article>
          <article
            class="c3"
            id="92632737"
          >
            <img
              alt="typescript svg"
              data-nimg="1"
              decoding="async"
              height="198"
              loading="lazy"
              src="https://www.datocms-assets.com/90479/1674241450-javascript2.svg"
              srcset="https://www.datocms-assets.com/90479/1674241450-javascript2.svg 1x, https://www.datocms-assets.com/90479/1674241450-javascript2.svg 2x"
              style="color: transparent;"
              width="260"
            />
            <h1
              class="c4"
              color="black"
            >
              Você conhece Typescript ?
            </h1>
            <div
              class="c5"
            >
              <div
                class="c6"
              >
                <div
                  class="c7"
                >
                  <img
                    alt="author image"
                    data-nimg="1"
                    decoding="async"
                    height="50"
                    src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75"
                    srcset="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75 2x"
                    style="color: transparent;"
                    width="50"
                  />
                </div>
                <div
                  class="c8"
                >
                  <h4>
                    Mateus Duarte
                  </h4>
                  <p>
                    03/02/2023
                  </p>
                </div>
              </div>
              <div
                class="c9"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                  />
                </svg>
                <h1
                  class="c10"
                >
                  0
                </h1>
              </div>
            </div>
          </article>
          <article
            class="c3"
            id="103560046"
          >
            <img
              alt="css svg"
              data-nimg="1"
              decoding="async"
              height="198"
              loading="lazy"
              src="https://www.datocms-assets.com/90479/1674241443-css2.svg"
              srcset="https://www.datocms-assets.com/90479/1674241443-css2.svg 1x, https://www.datocms-assets.com/90479/1674241443-css2.svg 2x"
              style="color: transparent;"
              width="260"
            />
            <h1
              class="c4"
              color="black"
            >
              HTML5
            </h1>
            <div
              class="c5"
            >
              <div
                class="c6"
              >
                <div
                  class="c7"
                >
                  <img
                    alt="author image"
                    data-nimg="1"
                    decoding="async"
                    height="50"
                    src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75"
                    srcset="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75 2x"
                    style="color: transparent;"
                    width="50"
                  />
                </div>
                <div
                  class="c8"
                >
                  <h4>
                    Mateus Duarte
                  </h4>
                  <p>
                    03/02/2023
                  </p>
                </div>
              </div>
              <div
                class="c9"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                  />
                </svg>
                <h1
                  class="c10"
                >
                  0
                </h1>
              </div>
            </div>
          </article>
          <article
            class="c3"
            id="92697360"
          >
            <img
              alt="html svg"
              data-nimg="1"
              decoding="async"
              height="198"
              loading="lazy"
              src="https://www.datocms-assets.com/90479/1674241439-css.svg"
              srcset="https://www.datocms-assets.com/90479/1674241439-css.svg 1x, https://www.datocms-assets.com/90479/1674241439-css.svg 2x"
              style="color: transparent;"
              width="260"
            />
            <h1
              class="c4"
              color="black"
            >
              o que é HTML5 ?
            </h1>
            <div
              class="c5"
            >
              <div
                class="c6"
              >
                <div
                  class="c7"
                >
                  <img
                    alt="author image"
                    data-nimg="1"
                    decoding="async"
                    height="50"
                    src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75"
                    srcset="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F90479%2F1673505399-67812250_126640048653747_8066872119595701241_n.jpg&w=128&q=75 2x"
                    style="color: transparent;"
                    width="50"
                  />
                </div>
                <div
                  class="c8"
                >
                  <h4>
                    Mateus Duarte
                  </h4>
                  <p>
                    03/02/2023
                  </p>
                </div>
              </div>
              <div
                class="c9"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                  />
                </svg>
                <h1
                  class="c10"
                >
                  0
                </h1>
              </div>
            </div>
          </article>
        </div>
      </div>
    `);
  });
});
