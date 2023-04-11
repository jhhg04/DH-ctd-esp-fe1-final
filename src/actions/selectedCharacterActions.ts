import { Action, ActionCreator } from "@reduxjs/toolkit";
import Character from "../types/character.types";


interface SelectedCharacterAction extends Action {
  type: "SELECT_CHARACTER";
  selectedCharacter: Character;
}



export const selectedCharacterAction: ActionCreator<SelectedCharacterAction> = (
  selectedCharacter: Character
) => {
  return {
    type: "SELECT_CHARACTER",
    selectedCharacter: selectedCharacter
  };
};


export type SelectedCharacterActions = ReturnType<typeof selectedCharacterAction>
