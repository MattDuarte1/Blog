import { renderTheme } from '../../styles/render-theme';
import { useSession } from 'next-auth/react';
import PostTemplate from '.';
import MockData from './mock';
import { act, screen } from '@testing-library/react';

jest.mock('next-auth/react');
const mockUserSession = useSession as jest.Mock;
mockUserSession.mockReturnValue({
  status: 'unauthenticated',
  data: null,
});

describe('<HomeTemplate>', () => {
  it('Should render a PostTemplate component', async () => {
    let container: HTMLElement;
    await act(async () => {
      const result = renderTheme(
        <PostTemplate {...MockData} views="28" dataFormat="06/04/2023" />,
      );

      container = result.container;
    });
    const { title, description } = MockData;
    const viewBox = container.querySelector('div[data-views]');

    const newMock = [title, description];
    expect(container.firstElementChild).toBeInTheDocument();
    newMock.forEach((prop) =>
      expect(screen.getByText(prop)).toBeInTheDocument(),
    );
    expect(screen.getByText(description)).toHaveStyle({
      color: '#fff',
    });
    expect(viewBox).toHaveAttribute('data-views', '28');
  });

  it('Should match snapshot PostTemplate', async () => {
    let container: HTMLElement;
    await act(async () => {
      const result = renderTheme(
        <PostTemplate {...MockData} views="28" dataFormat="06/04/2023" />,
      );

      container = result.container;
    });

    expect(container).toMatchSnapshot();
  });
});
