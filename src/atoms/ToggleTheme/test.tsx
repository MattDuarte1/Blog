import { fireEvent, screen } from '@testing-library/react';
import ToggleTheme from '.';
import { renderTheme } from '@/styles/render-theme';
import { theme } from '@/styles/theme';

describe('<ToggleTheme />', () => {
  beforeEach(() => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'inverted' }),
    );
  });

  afterEach(() => {
    localStorage.removeItem('theme');
  });

  it('Should render input default theme', () => {
    localStorage.removeItem('theme');
    renderTheme(<ToggleTheme />);
    const input = screen.getByRole('checkbox');

    expect(input).not.toBeChecked();
  });

  it('Should render input default theme when local storage default', () => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'default' }),
    );
    renderTheme(<ToggleTheme />);
    const input = screen.getByRole('checkbox');

    expect(input).not.toBeChecked();
  });

  it('Should render input inverted theme when local storage inverted', () => {
    renderTheme(<ToggleTheme />);
    const input = screen.getByRole('checkbox');
    expect(input).toBeChecked();
  });

  it('Should render input and toggle between theme when toggling input', () => {
    const { container } = renderTheme(<ToggleTheme />);

    const label = screen.getByLabelText('toggle change theme');
    const input = screen.getByRole('checkbox');

    fireEvent.click(label);
    expect(input).not.toBeChecked();

    fireEvent.click(label);
    expect(input).toBeChecked();

    expect(container).toMatchSnapshot();
  });
});
