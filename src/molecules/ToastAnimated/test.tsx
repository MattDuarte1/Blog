import ToastAnimated, { showToast } from '.';
import { screen, waitFor } from '@testing-library/react';
import { renderTheme } from '@/styles/render-theme';

describe('<ToastAnimated />', () => {
  it('should render without crashing', () => {
    const { container } = renderTheme(<ToastAnimated />);
    expect(container.getElementsByClassName('Toastify')[0]).toBeInTheDocument();
  });

  it('should show a success toast when called', async () => {
    renderTheme(<ToastAnimated />);
    showToast({ type: 'success', message: 'Sucess' });

    await waitFor(
      () => expect(screen.getByText('Sucess')).toBeInTheDocument(),
      { timeout: 2000 },
    );
  });

  it('should show a warn toast when called', async () => {
    renderTheme(<ToastAnimated />);
    showToast({ type: 'warn', message: 'Warn' });

    await waitFor(() => expect(screen.getByText('Warn')).toBeInTheDocument(), {
      timeout: 2000,
    });
  });

  it('should show a error toast when called', async () => {
    renderTheme(<ToastAnimated />);
    showToast({ type: 'error', message: 'Error' });

    await waitFor(() => expect(screen.getByText('Error')).toBeInTheDocument(), {
      timeout: 2000,
    });
  });

  it('should match snapshot component', async () => {
    const { container } = renderTheme(<ToastAnimated />);

    expect(container.firstElementChild).toMatchInlineSnapshot(`
      <div
        class="Toastify"
      />
    `);
  });

  it('should match snapshot success toast', async () => {
    renderTheme(<ToastAnimated />);

    showToast({ type: 'success', message: 'Success Message' });

    await waitFor(
      () => {
        expect(screen.getByRole('alert')).toMatchSnapshot();
      },
      { timeout: 2000 },
    );
  });

  it('should match snapshot warn toast', async () => {
    renderTheme(<ToastAnimated />);

    showToast({ type: 'warn', message: 'Warn Message' });

    await waitFor(
      () => {
        expect(screen.getByRole('alert')).toMatchSnapshot();
      },
      { timeout: 2000 },
    );
  });

  it('should match snapshot error toast', async () => {
    renderTheme(<ToastAnimated />);

    showToast({ type: 'error', message: 'Error Message' });

    await waitFor(
      () => {
        expect(screen.getByRole('alert')).toMatchSnapshot();
      },
      { timeout: 2000 },
    );
  });
});
