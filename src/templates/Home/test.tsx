import { renderTheme } from '../../styles/render-theme';
import { useSession } from 'next-auth/react';
import HomeTemplate from '.';
import MockData from './mock';
import MockPosts from '@/organisms/Posts/mock';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next-auth/react');
const mockUserSession = useSession as jest.Mock;
mockUserSession.mockReturnValue({
  status: 'unauthenticated',
  data: null,
});

describe('<HomeTemplate>', () => {
  it('Should render a HomeTemplate component', () => {
    const { container } = renderTheme(
      <HomeTemplate
        data={MockData}
        postData={MockPosts}
        status="closed"
        statusMessage="messagem qualquer"
        error={null}
      />,
    );

    expect(container.firstElementChild).toBeInTheDocument();
  });

  it('Should match snapshot HomeTemplate component', () => {
    const { container } = renderTheme(
      <HomeTemplate
        data={MockData}
        postData={MockPosts}
        status="closed"
        statusMessage="messagem qualquer"
        error={null}
      />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });
});
