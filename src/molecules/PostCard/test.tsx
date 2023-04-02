import { screen } from '@testing-library/react';
import PostCard from '.';
import { renderTheme } from '@/styles/render-theme';
import { theme } from '@/styles/theme';
import mock from '@/organisms/PostSection/mock';

describe('<PostCard>', () => {
  it('Should render a PostCard component', () => {
    const { container } = renderTheme(
      <PostCard {...mock} onClick={jest.fn()} />,
    );

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
    expect(screen.getByRole('heading', { name: mock.title }));
    expect(postCard.querySelector('h4').innerHTML).toBe(
      mock.authorCompact.name,
    );
  });

  it('Should match snapshot component', () => {
    renderTheme(<PostCard {...mock} onClick={jest.fn()} />);

    expect(screen.getByRole('article')).toMatchSnapshot();
  });
});
