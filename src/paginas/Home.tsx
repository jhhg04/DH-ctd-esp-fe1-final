import { FC, useRef } from 'react';
import Filtros from '../componentes/personajes/Filters';
import CharactersGrid from '../componentes/personajes/CharactersGrid';
import Pagination from '../componentes/paginacion/Pagination';
import { useDispatch } from 'react-redux';
import { fetchCharactersThunk } from '../actions/charactersActions';

/**
 * This is the main page. Here you should see the filter panel along with the character grid.
 *
 *
 * @author John Herrera
 * @returns init page
 */
const Home: FC = () => {
  const dispatch = useDispatch();

  const clearFiltro = useRef<HTMLInputElement>(null);

  /**
   * Action on click that clears the input in the <Filters/> component and fires a dispatch with all characters.
   *
   * @author John Herrera
   *
   */

  const limpiarFiltro = () => {
    if (clearFiltro.current) {
      clearFiltro.current.value = '';
      dispatch(
        fetchCharactersThunk(`https://rickandmortyapi.com/api/character`)
      );
    }
  };

  return (
    <div className='container'>
      <div className='actions'>
        <h3>Catálogo de Personajes</h3>
        <button className='danger' onClick={limpiarFiltro}>
          Limpiar filtro
        </button>
      </div>
      <Filtros clearFiltro={clearFiltro} />
      <Pagination />
      <CharactersGrid />
    </div>
  );
};

export default Home;
