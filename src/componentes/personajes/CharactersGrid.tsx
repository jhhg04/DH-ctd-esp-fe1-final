import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './grilla-personajes.css';
import CharacterCard from './CharacterCard';
import { useSelector } from '../../store';
import Character from '../../types/character.types';
import { fetchCharactersThunk } from '../../actions/charactersActions';

/**
 * Character grid for the home page
 *
 * You will need to add the necessary functions to display and paginate the characters
 * @author John Herrera
 *
 * @returns a JSX element
 */

const CharactersGrid: FC = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(
      fetchCharactersThunk('https://rickandmortyapi.com/api/character/')
    );
  }, []);

  if (status === 'LOADING') return <div>Cargando personajes...</div>;
  if (status === 'FAILED') return <div>No se pudo cargar los personajes.</div>;
  if (!data || data?.results?.length === 0 || data.error?.length >= 1)
    return <>No hay personajes con ese nombre</>;

  return (
    <div className='grilla-personajes'>
      {data?.results?.map((character: Character) => {
        return (
          <CharacterCard
            key={'character_' + character.id}
            characterData={character}
          />
        );
      })}
    </div>
  );
};

export default CharactersGrid;
