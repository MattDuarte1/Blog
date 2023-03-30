import { INITIAL_STATE, InitialStateType } from '.';
import { Actions } from './actions';
import { IAction } from './type';

export const blogContextReducer = (
  /* istanbul ignore next */
  state = INITIAL_STATE,
  action: IAction,
): InitialStateType => {
  switch (action.type) {
    case Actions.setTheme:
      localStorage.setItem('theme', JSON.stringify(action.payload.theme));
      return { ...state, theme: action.payload.theme };
    case Actions.setDrawer:
      return { ...state, drawerIsOpen: !state.drawerIsOpen };

    case Actions.setCategorySelected:
      return {
        ...state,
        categorySelected:
          state.categorySelected === action.payload.categorySelected
            ? null
            : action.payload.categorySelected,
      };
    default:
      throw new Error();
  }
};
