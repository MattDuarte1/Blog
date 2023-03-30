import { blogContextReducer } from './reducer';
import { Actions } from './actions';
import { InitialStateType, INITIAL_STATE } from '.';
import { theme } from '@/styles/theme';
import { IAction } from './type';

const initialState: InitialStateType = {
  theme: theme,
  drawerIsOpen: false,
  categorySelected: null,
};

describe('blogContextReducer', () => {
  it('should update drawerIsOpen in state', () => {
    const action = { type: Actions.setDrawer };
    const result = blogContextReducer(initialState, action);
    expect(result.drawerIsOpen).toBe(true);
  });

  it('should update categorySelected when setCategorySelected action is dispatched', () => {
    // if categorySelected !== Actions.setcategorySelected
    const action1 = {
      type: Actions.setCategorySelected,
      payload: { categorySelected: 'javascript' },
    };
    const newState1 = blogContextReducer(initialState, action1);
    expect(newState1.categorySelected).toBe('javascript');

    // if categorySelected === Actions.setcategorySelected return null
    initialState.categorySelected = 'typescript';
    const action2 = {
      type: Actions.setCategorySelected,
      payload: { categorySelected: 'typescript' },
    };
    const newState2 = blogContextReducer(initialState, action2);
    expect(newState2.categorySelected).toBe(null);
  });

  it('should throw an error for unknown action types', () => {
    const initialState = { ...INITIAL_STATE };
    const unknownAction = { type: 'UNKNOW' };
    expect(() =>
      blogContextReducer(initialState, unknownAction as IAction),
    ).toThrow();
  });
});
