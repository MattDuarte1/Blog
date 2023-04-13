import { renderTheme } from '../../styles/render-theme';
import { useSession } from 'next-auth/react';
import HomeTemplate from '.';
import MockData from './mock';
import MockPosts from '@/organisms/Posts/mock';
import { act, waitFor } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next-auth/react');
const mockUserSession = useSession as jest.Mock;
mockUserSession.mockReturnValue({
  status: 'unauthenticated',
  data: null,
});

describe('<HomeTemplate>', () => {
  it('Should render a HomeTemplate component', async () => {
    let container: HTMLElement;
    await act(async () => {
      const result = renderTheme(
        <HomeTemplate
          data={MockData}
          postData={MockPosts}
          status="closed"
          statusMessage="messagem qualquer"
        />,
      );

      container = result.container;
    });

    waitFor(() => expect(container.firstElementChild).toBeInTheDocument());
  });

  it('Should match snapshot HomeTemplate component', async () => {
    let container: HTMLElement;
    await act(async () => {
      const result = renderTheme(
        <HomeTemplate
          data={MockData}
          postData={MockPosts}
          status="closed"
          statusMessage="messagem qualquer"
        />,
      );

      container = result.container;
    });

    waitFor(() => expect(container.firstElementChild).toMatchSnapshot());
  });
});
