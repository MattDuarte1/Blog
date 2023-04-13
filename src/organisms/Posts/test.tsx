import Posts from '.';
import { renderTheme } from '@/styles/render-theme';
import PostsMocked from './mock';
import mockRouter from 'next-router-mock';
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { theme } from '@/styles/theme';

jest.mock('next/router', () => require('next-router-mock'));

describe('<PostSection>', () => {
  it('Should render a Posts component', async () => {
    let container: HTMLElement;
    await act(async () => {
      const result = renderTheme(<Posts data={PostsMocked} ref={null} />);

      container = result.container;
    });

    waitFor(() => {
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
  });

  it('Should navigate to post[id] when clicked in PostCard', async () => {
    await act(async () => {
      renderTheme(<Posts data={PostsMocked} />);
    });
    const firstPost = screen.getAllByRole('article')[1];

    fireEvent.click(firstPost);
    expect(mockRouter).toMatchObject({
      asPath: `/post/${firstPost.getAttribute('id')}`,
      pathname: `/post/${firstPost.getAttribute('id')}`,
    });
  });

  it('Should match snapshot component', async () => {
    let container: HTMLElement;
    await act(async () => {
      const result = renderTheme(<Posts data={PostsMocked} />);

      container = result.container;
    });

    waitFor(() => expect(container.firstElementChild).toMatchSnapshot());
  });
});
