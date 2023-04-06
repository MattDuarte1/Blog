import { screen } from '@testing-library/react';
import PostCard from '.';
import { renderTheme } from '@/styles/render-theme';
import { theme } from '@/styles/theme';
import mock from '@/organisms/Posts/mock';
import { act } from '@testing-library/react';
import { useFetch } from '@/lib/fetcher';
import { useRouter } from 'next-router-mock';

jest.mock('@/lib/fetcher');
const mockUseFetch = useFetch as jest.Mock;
mockUseFetch.mockReturnValue({
  data: null,
  error: null,
});

jest.mock('next-router-mock');
const mockUseRouter = useRouter as jest.Mock;
mockUseRouter.mockReturnValue({
  isPreview: false,
});

describe('<PostCard>', () => {
  it('Should render a PostCard component', async () => {
    let container;
    await act(async () => {
      const result = renderTheme(<PostCard {...mock[1]} onClick={jest.fn()} />);

      container = result.container;
    });

    const postCard = container.firstElementChild;
    expect(container.firstElementChild).toBeInTheDocument();
    expect(postCard).toHaveStyle({
      width: '300px',
      height: '425px',
      padding: '1.4rem',
      background: theme.colors.white,
      position: 'relative',
      'box-shadow': '4px 6px 13px rgba(0,0,0,0.1)',
      'border-radius': '12px',
      'text-align': 'start',
      cursor: 'pointer',
    });
    expect(screen.getByRole('heading', { name: mock[1].title }));
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(postCard.querySelector('h4').innerHTML).toBe(
      mock[1].authorCompact.name,
    );
  });

  it('Should render a PostCard component with image not alt', async () => {
    await act(async () => {
      renderTheme(<PostCard {...mock[7]} onClick={jest.fn()} />);
    });

    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('Should render a PostCard when useFetch is successful with is preview true', async () => {
    mockUseFetch.mockReturnValueOnce({
      data: { total: 10 },
      error: null,
    });
    mockUseRouter.mockReturnValueOnce({
      isPreview: true,
    });
    await act(async () => {
      renderTheme(<PostCard {...mock[1]} onClick={jest.fn()} />);
    });

    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('Should render a PostCard when useFetch is successful with is preview false', async () => {
    mockUseFetch.mockReturnValueOnce({
      data: { total: 20 },
      error: null,
    });
    await act(async () => {
      renderTheme(<PostCard {...mock[1]} onClick={jest.fn()} />);
    });

    expect(screen.getByText('20')).toBeInTheDocument();
  });

  it('Should match snapshot component', async () => {
    await act(async () => {
      renderTheme(<PostCard {...mock[1]} onClick={jest.fn()} />);
    });

    expect(screen.getByRole('article')).toMatchSnapshot();
  });
});
