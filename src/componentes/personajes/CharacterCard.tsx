import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { selectedCharacterAction } from '../../actions/selectedCharacterActions';
import Character from '../../types/character.types';
import FavouriteButton from './../botones/FavouriteButton';
import './tarjeta-personaje.css';
import { useNavigate } from 'react-router-dom';

export interface CharacterCardProps {
  characterData: Character;
}

/**
 * Card for each character within the character grid.
 *
 * You must add the necessary properties to display the data of the characters
 * @author John Herrera
 *
 * @returns a JSX element
 */
const CharacterCard: FC<CharacterCardProps> = ({
  characterData,
}: CharacterCardProps) => {
  const navigation = useNavigate();

  const dispatch = useDispatch();

  /**
   * When selecting a character, it redirects to the detail path of that character.
   *
   * @author John Herrera
   */
  const goDetail = () => {
    dispatch(selectedCharacterAction(characterData));
    navigation('/detalle/');
  };

  return (
    <div className='tarjeta-personaje'>
      <img
        src={characterData.image}
        alt='Rick Sanchez'
        onClick={goDetail}
        style={{ cursor: 'pointer' }}
      />
      <div className='tarjeta-personaje-body'>
        <span onClick={goDetail} style={{ cursor: 'pointer' }}>
          {characterData.name}
        </span>
        <FavouriteButton character={characterData} />
      </div>
    </div>
  );
};

export default CharacterCard;
