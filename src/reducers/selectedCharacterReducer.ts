import { Reducer } from "@reduxjs/toolkit";
import { SelectedCharacterActions } from "../actions/selectedCharacterActions";
import Character from "../types/character.types";

export type SelectedCharacterState = {

  selectedCharacter: Character | null;
};

const initialState: SelectedCharacterState = {
  
  selectedCharacter: null,
};

const selectedCharacterReducer: Reducer<SelectedCharacterState, SelectedCharacterActions> = (
  state = initialState,
  action
): SelectedCharacterState => {
  switch (action.type) {
    case "SELECT_CHARACTER":
      return {
        ...state,
        selectedCharacter: action.selectedCharacter
      };
    default:
      return state;
  }
};

export default selectedCharacterReducer;