import { blogContextReducer } from './reducer';
import { InitialStateType } from '.';
import { theme } from '@/styles/theme';
import { IAction } from './type';
import { act, renderHook } from '@testing-library/react';
import { useBlogContext } from './hook';
import { ThemeProvider } from './provider';

describe('blogContextProvider', () => {
  it('should update drawerIsOpen when activeDrawer is called', () => {
    const { result } = renderHook(() => useBlogContext(), {
      wrapper: ThemeProvider,
    });
    const { activeDrawer } = result.current;

    act(() => {
      activeDrawer();
    });

    expect(result.current.state.drawerIsOpen).toBe(true);
  });

  it('should update categorySelected when changeCateogry is called', () => {
    const { result } = renderHook(() => useBlogContext(), {
      wrapper: ThemeProvider,
    });
    const { changeCategory } = result.current;

    act(() => {
      changeCategory('javascript');
    });

    expect(result.current.state.categorySelected).toEqual('javascript');
  });

  it('should update categorySelected to undefined when is the same as passed in parameter of changeCategory', () => {
    const { result } = renderHook(() => useBlogContext(), {
      wrapper: ThemeProvider,
    });
    const { changeCategory, state } = result.current;

    state.categorySelected = 'typescript';
    act(() => {
      changeCategory('typescript');
    });

    expect(result.current.state.categorySelected).toEqual(undefined);
  });

  it('should update the theme when changeTheme is called and mode param is not passed', () => {
    const { result } = renderHook(() => useBlogContext(), {
      wrapper: ThemeProvider,
    });
    const { changeTheme } = result.current;

    act(() => {
      changeTheme('');
    });

    expect(result.current.state.theme.name).toEqual('inverted');
  });

  it('should update the theme when changeTheme is called and mode param is default', () => {
    const { result } = renderHook(() => useBlogContext(), {
      wrapper: ThemeProvider,
    });
    const { changeTheme } = result.current;

    act(() => {
      changeTheme('default');
    });

    expect(result.current.state.theme.name).toEqual('default');
  });

  it('should update the theme when changeTheme is called and mode param not is default', () => {
    const { result } = renderHook(() => useBlogContext(), {
      wrapper: ThemeProvider,
    });
    const { changeTheme } = result.current;

    act(() => {
      changeTheme('inverted');
    });

    expect(result.current.state.theme.name).toEqual('inverted');
  });

  it('should throw an error for unknown action types in reducer.ts', () => {
    const initialState: InitialStateType = {
      theme: theme,
      drawerIsOpen: false,
      categorySelected: undefined,
    };
    const unknownAction = { type: 'UNKNOW' };
    expect(() =>
      blogContextReducer(initialState, unknownAction as IAction),
    ).toThrow();
  });
});
