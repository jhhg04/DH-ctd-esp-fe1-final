import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { cleanFav } from '../actions/favouritesAction';
import CharacterCard from '../componentes/personajes/CharacterCard';
import { useSelector } from '../store';
import Character from '../types/character.types';
import '../componentes/personajes/grilla-personajes.css';
/**
 * This is the favorites page. Here you should see all the characters marked as favorites
 *
 * @author John Herrera
 *
 * @returns la pagina de favoritos
 */

const Favourites: FC = () => {
  const dispatch = useDispatch();
  const { favoritosMapa } = useSelector((state) => state.favourites);

  /**
   * Function that clears the entire favorites array and leaves it empty.
   *
   * @author John Herrera
   *
   */
  const limpiarTodo = () => {
    dispatch(cleanFav());
  };

  return (
    <div className='container'>
      <div className='actions'>
        <h3>Personajes Favoritos</h3>
        <button className='danger' onClick={limpiarTodo}>
          LIMPIAR FAVORITOS
        </button>
      </div>
      <div className='grilla-personajes'>
        {!favoritosMapa[0] && (
          <div>No hay personajes seleccionados como favoritos</div>
        )}
        {favoritosMapa.map((character: Character) => {
          return (
            <CharacterCard
              key={'character_' + character.id}
              characterData={character}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
