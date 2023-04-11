import { ChangeEvent, FC, RefObject } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharactersThunk } from '../../actions/charactersActions';
import './filtros.css';

/**
 * Card for each character within the character grid.
 *
 * You must add the necessary properties to display the data of the characters
 * @author John Herrera
 *
 * @returns a JSX element
 */

export interface FiltrosProps {
  clearFiltro: RefObject<HTMLInputElement>;
}

const Filtros: FC<FiltrosProps> = ({ clearFiltro }: FiltrosProps) => {
  const dispatch = useDispatch();

  /**
   * @author John Herrera
   *
   * From 3 letters filter by character name If it returns to 0, it shows all as before.
   * This action triggers the dispatch
   *
   * @param e input event
   *
   */

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const currentSearch = e.target.value;
    if (currentSearch?.length >= 3) {
      dispatch(
        fetchCharactersThunk(
          `https://rickandmortyapi.com/api/character/?name=${currentSearch}`
        )
      );
    }
    if (currentSearch?.length === 0) {
      dispatch(
        fetchCharactersThunk('https://rickandmortyapi.com/api/character/')
      );
    }
  };
  return (
    <div className='filtros'>
      <label htmlFor='nombre'>Filtrar por nombre:</label>
      <input
        type='text'
        ref={clearFiltro}
        placeholder='Rick, Morty, Beth, Alien, ...etc'
        name='nombre'
        onChange={onChange}
      />
    </div>
  );
};

export default Filtros;
