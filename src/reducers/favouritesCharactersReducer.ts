import { Reducer } from '@reduxjs/toolkit';
import { FavouritesAction } from '../actions/favouritesAction';
import Character from '../types/character.types';

export interface FavCharactersState {
  favoritosMapa: Character[];
}

const initialState: FavCharactersState = {
  favoritosMapa: [],
};

const favouritesCharactersReducer: Reducer<
  FavCharactersState,
  FavouritesAction
> = (state = initialState, action): FavCharactersState => {
  switch (action.type) {
    case 'TOGGLE_FAV':
      let map = state.favoritosMapa;

      const found = map.find((char) => char.id === action.character.id);
      if (found) {
        map = state.favoritosMapa.filter(
          (char) => char.id !== action.character.id
        );
      } else {
        map.push(action.character);
      }
      return { ...state, favoritosMapa: map };

    case 'CLEAN_FAV':
      return { ...state, favoritosMapa: [] };
    default:
      return state;
  }
};
export default favouritesCharactersReducer;
