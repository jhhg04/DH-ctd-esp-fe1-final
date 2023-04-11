import { Action, ActionCreator, ThunkAction } from '@reduxjs/toolkit';
import { getCharactersAPI } from '../services/characters.services';
import { IRootState } from '../store';
import DataResult from '../types/data.types';

interface FetchCharactersPendingAction extends Action {
  type: 'FETCH_CHARACTERS_PENDING';
  query: string;
}
interface FetchCharactersSuccessAction extends Action {
  type: 'FETCH_CHARACTERS_SUCCESS';
  data: DataResult;
}

interface FetchCharactersFailedAction extends Action {
  type: 'FETCH_CHARACTERS_FAILED';
  error: string;
}

const fetchCharactersPending: ActionCreator<FetchCharactersPendingAction> = (
  query: string
) => {
  return {
    type: 'FETCH_CHARACTERS_PENDING',
    query: query,
  };
};

const fetchCharactersSuccess: ActionCreator<FetchCharactersSuccessAction> = (
  data: DataResult
) => {
  return {
    type: 'FETCH_CHARACTERS_SUCCESS',
    data: data,
  };
};

const fetchCharactersFailure: ActionCreator<FetchCharactersFailedAction> = (
  error: string
) => {
  return {
    type: 'FETCH_CHARACTERS_FAILED',
    error: error,
  };
};

export type CharactersActions =
  | ReturnType<typeof fetchCharactersPending>
  | ReturnType<typeof fetchCharactersSuccess>
  | ReturnType<typeof fetchCharactersFailure>;

interface fetchCharactersThunkAction
  extends ThunkAction<void, IRootState, unknown, CharactersActions> {}

export const fetchCharactersThunk = (
  query: string
): fetchCharactersThunkAction => {
  return async (dispatch) => {
    dispatch(fetchCharactersPending(query));
    try {
      const data: DataResult = await getCharactersAPI(query);
      dispatch(fetchCharactersSuccess(data));
    } catch (e) {
      dispatch(fetchCharactersFailure(e));
    }
  };
};
