import { Reducer } from '@reduxjs/toolkit';
import { CharactersActions } from '../actions/charactersActions';
import DataResult from '../types/data.types';

export type CharactersState = {
  data: DataResult;
  status: 'IDLE' | 'LOADING' | 'COMPLETED' | 'FAILED';
  errorMessage: string | null;
};

const initialState: CharactersState = {
  data: { info: { next: '', prev: '' }, results: [], error: '' },
  status: 'IDLE',
  errorMessage: null,
};

const charactersReducer: Reducer<CharactersState, CharactersActions> = (
  state = initialState,
  action
): CharactersState => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_PENDING':
      return {
        ...state,
        status: 'LOADING',
        data: { info: { next: '', prev: '' }, results: [], error: '' },
        errorMessage: null,
      };
    case 'FETCH_CHARACTERS_SUCCESS':
      return {
        ...state,
        status: 'COMPLETED',
        data: action.data,
      };
    case 'FETCH_CHARACTERS_FAILED':
      return {
        ...state,
        status: 'FAILED',
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

export default charactersReducer;
