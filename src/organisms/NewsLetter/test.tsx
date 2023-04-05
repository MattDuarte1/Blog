import { fireEvent, screen, waitFor } from '@testing-library/react';
import Newsletter from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import ToastAnimated from '@/molecules/ToastAnimated';
import { ThemeProvider } from 'styled-components';

const mock = {
  id: '1',
  title: 'Inscreva-se para receber novidades',
  description: 'Inscreva-se para receber novidades da semana',
  image: {
    url: '/jpg',
    alt: 'icon newsletter',
  },
};

global.fetch = jest.fn();

const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('<Newsletter>', () => {
  it('Should render a Newsletter', () => {
    const { rerender, container } = renderTheme(<Newsletter data={mock} />);
    const newsLetter = container.firstElementChild;

    expect(newsLetter).toBeInTheDocument();
    expect(newsLetter).toHaveStyle({
      'background-color': theme.colors.lightGrey2,
    });
    expect(newsLetter.querySelector('h1').innerHTML).toBe(mock.title);
    expect(newsLetter.querySelector('span').innerHTML).toBe(mock.description);
    expect(newsLetter.querySelector('img')).toHaveAttribute(
      'alt',
      mock.image.alt,
    );
    expect(newsLetter.querySelector('img')).toHaveAttribute(
      'src',
      mock.image.url,
    );

    expect(container.querySelector('form')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');

    const newTheme = {
      ...theme,
      name: 'inverted',
    };

    // change color when name is inverted;
    rerender(
      <ThemeProvider theme={newTheme}>
        <Newsletter data={mock} />
      </ThemeProvider>,
    );

    expect(container.firstElementChild).toHaveStyle(
      `background-color: ${theme.colors.white}`,
    );
  });

  it('Should render warning toast when to send email ', async () => {
    const { container } = renderTheme(
      <>
        <ToastAnimated />
        <Newsletter data={mock} />,
      </>,
    );

    const input = container.querySelector('input');

    fireEvent.click(screen.getByRole('button', { name: /clique aqui/i }));
    await waitFor(
      () => expect(screen.getByText('Digite um email!')).toBeInTheDocument(),
      {
        timeout: 2000,
      },
    );

    input.value = 'test@gmail.c';
    fireEvent.click(screen.getByRole('button', { name: /clique aqui/i }));
    await waitFor(
      () =>
        expect(screen.getByText('Digite um email válido!')).toBeInTheDocument(),
      {
        timeout: 3000,
      },
    );
  });

  it('Should render success toast when to send email ', async () => {
    mockFetch.mockResolvedValueOnce({
      status: 200,
      json: () => Promise.resolve({ status: 200 }),
    } as any);

    const { container } = renderTheme(
      <>
        <ToastAnimated />
        <Newsletter data={mock} />,
      </>,
    );
    const input = container.querySelector('input');

    input.value = 'test@gmail.com';
    fireEvent.click(screen.getByRole('button', { name: /clique aqui/i }));
    await waitFor(() => expect(screen.getByText('Enviado com Sucesso!')), {
      timeout: 2000,
    });

    expect(screen.getByPlaceholderText('E-mail')).toHaveValue('');
  });

  it('Should render error toast when to send email ', async () => {
    mockFetch.mockRejectedValueOnce(null);
    const { container } = renderTheme(
      <>
        <ToastAnimated />
        <Newsletter data={mock} />,
      </>,
    );
    const input = container.querySelector('input');

    input.value = 'test@gmail.com';
    fireEvent.click(screen.getByRole('button', { name: /clique aqui/i }));
    await waitFor(
      () =>
        expect(
          screen.getByText('Desculpe, Ocorreu um Error!'),
        ).toBeInTheDocument(),
      {
        timeout: 2000,
      },
    );
  });

  it('Should match snapshot component', () => {
    const { container } = renderTheme(<Newsletter data={mock} />);

    expect(container.firstElementChild).toMatchSnapshot();
  });
});
