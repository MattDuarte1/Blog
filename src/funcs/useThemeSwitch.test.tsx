import { renderHook, act } from '@testing-library/react';
import useThemeSwitcher from './useThemeSwitch';
import { useBlogContext } from '@/contexts/Theme/hook';
import { theme } from '@/styles/theme';

jest.mock('@/contexts/Theme/hook');

describe('useThemeSwitcher', () => {
  const changeThemeSpy = jest.fn();
  (useBlogContext as jest.Mock).mockReturnValue({
    changeTheme: changeThemeSpy,
  });

  beforeEach(() => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'inverted' }),
    );
  });

  afterEach(() => {
    localStorage.removeItem('theme');
  });

  it('should update theme when change checked', () => {
    localStorage.removeItem('theme');
    const { result } = renderHook(() => useThemeSwitcher());

    expect(result.current.checked).toBe(false);

    act(() => {
      result.current.handleChange();
    });

    expect(result.current.checked).toBe(true);
    expect(changeThemeSpy).toHaveBeenCalledWith('inverted');
  });

  it('Should set checked to false if theme is "default" in localStorage', () => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'default' }),
    );

    const { result } = renderHook(() => useThemeSwitcher());

    expect(result.current.checked).toBe(false);
    expect(changeThemeSpy).toHaveBeenCalledWith('default');
  });

  it('Should set checked to true if theme is "inverted" in localStorage', () => {
    const { result } = renderHook(() => useThemeSwitcher());

    expect(result.current.checked).toBe(true);
    expect(changeThemeSpy).toHaveBeenCalledWith('inverted');
  });
});
