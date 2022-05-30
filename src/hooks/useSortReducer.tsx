import { useReducer } from 'react';
import { sortValues } from '@utils/constants';
import { useAppDispatch } from '../redux/hooks';
import { Sort } from '@utils/types';
import { fetchData } from 'postService/postSlice';

type ACTIONTYPE =
  | { type: 'CHANGE_OPTION'; payload: Sort }
  | { type: 'RESET_OPTION' };

interface Response {
  state: Sort;
  changeOption: (value: Sort) => void;
  refreshOption: () => void;
}

export const sortReducer = (state: Sort, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'CHANGE_OPTION':
      return action.payload;
    /* ... MORE OPTIONS ... */
    default:
      throw new Error();
  }
};

export const useSortReducer = ({ reducer = sortReducer } = {}): Response => {
  const [state, dispatch] = useReducer(reducer, sortValues.NEW);
  const appDispatch = useAppDispatch();

  const changeOption = (value: Sort) => {
    dispatch({ type: 'CHANGE_OPTION', payload: value });
    appDispatch(fetchData(state));
  };

  const refreshOption = () => appDispatch(fetchData(state));

  return {
    state,
    changeOption,
    refreshOption,
  };
};
