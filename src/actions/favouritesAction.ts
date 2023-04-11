import { Action, ActionCreator } from "@reduxjs/toolkit";
import Character from "../types/character.types";

interface ToggleFavAction extends Action {
  type: "TOGGLE_FAV";
  character: Character;
}

interface CleanFavAction extends Action {
  type: "CLEAN_FAV";
}

export const toggleFav: ActionCreator<ToggleFavAction> = (
  character: Character
) => {
  return {
    type: "TOGGLE_FAV",
    character: character,
  };
};

export const cleanFav: ActionCreator<CleanFavAction> = () => {
  return {
    type: "CLEAN_FAV",
  };
};

export type FavouritesAction =
  | ReturnType<typeof toggleFav>
  | ReturnType<typeof cleanFav>;
