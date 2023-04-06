import { fireEvent, screen } from '@testing-library/react';
import ToggleTheme from '.';
import { renderTheme } from '@/styles/render-theme';

describe('<ToggleTheme />', () => {
  it('Should render default theme when input not checked', () => {
    const checked = false;
    const handleChange = jest.fn();
    renderTheme(<ToggleTheme checked={checked} onChange={handleChange} />);
    const input = screen.getByRole('checkbox');

    expect(input).not.toBeChecked();
  });

  it('Should render inverted theme when input is checked', () => {
    const checked = true;
    const handleChange = jest.fn();
    renderTheme(<ToggleTheme checked={checked} onChange={handleChange} />);
    const input = screen.getByRole('checkbox');

    expect(input).toBeChecked();
  });

  it('Should call onChange when input is clicked', () => {
    const checked = true;
    const handleChange = jest.fn();
    renderTheme(<ToggleTheme checked={checked} onChange={handleChange} />);
    const input = screen.getByRole('checkbox');
    expect(input).toBeInTheDocument();

    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalled();
  });

  it('Should match snapshot component', () => {
    const { container } = renderTheme(
      <ToggleTheme checked={false} onChange={jest.fn()} />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });
});
