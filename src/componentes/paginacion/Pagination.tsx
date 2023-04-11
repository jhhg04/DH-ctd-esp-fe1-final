import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharactersThunk } from '../../actions/charactersActions';
import { useSelector } from '../../store';
import './paginacion.css';
/**
 * Component that contains the buttons to paginate
 *
 * You must add the necessary properties for it to work correctly
 *
 * @author John Herrera
 * @returns a JSX element
 */
const Pagination: FC = () => {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const goPrev = () => {
    if (data.info.prev !== undefined) {
      dispatch(fetchCharactersThunk(data.info.prev));
    }
  };

  const goNext = () => {
    if (data.info.next !== undefined) {
      dispatch(fetchCharactersThunk(data.info.next));
    }
  };

  return (
    <div className='paginacion'>
      <button
        disabled={data?.info?.prev === null || undefined}
        className={'primary'}
        onClick={goPrev}
      >
        Anterior
      </button>
      <button
        disabled={data?.info?.next === null || undefined}
        className={'primary'}
        onClick={goNext}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
