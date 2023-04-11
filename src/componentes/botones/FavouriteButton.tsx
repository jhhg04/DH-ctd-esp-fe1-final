import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleFav } from '../../actions/favouritesAction';
import { useSelector } from '../../store';
import Character from '../../types/character.types';
import './boton-favorito.css';

/**
 * Button that indicates if an element is favorite or not, and gives the possibility to mark/unmark it
 *
 * You will need to type the properties if you use this component
 * @author John Herrera
 * @param {charater}
 * @returns a JSX element
 */

export interface FavouritesButtonProps {
  character: Character;
}

const FavouriteButton: FC<FavouritesButtonProps> = ({
  character,
}: FavouritesButtonProps) => {
  const mapa = useSelector((state) => state.favourites.favoritosMapa);
  const found = mapa.find((char) => char.id === character.id);
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const toggleFavorito = () => {
    dispatch(toggleFav(character));
    setIsFav(!isFav);
  };

  return (
    <div className='boton-favorito'>
      {found ? (
        <img
          src={'/imagenes/star-filled.png'}
          alt={'favorito'}
          onClick={toggleFavorito}
        />
      ) : (
        <img
          src={'/imagenes/star.png'}
          alt={'favorito'}
          onClick={toggleFavorito}
        />
      )}
    </div>
  );
};

export default FavouriteButton;
