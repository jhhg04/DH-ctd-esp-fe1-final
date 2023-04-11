import './Detalle.css';
import ChapterCard from '../componentes/episodios/ChapterCard';
import FavouriteButton from '../componentes/botones/FavouriteButton';
import { FC, useEffect, useState } from 'react';
import { useSelector } from '../store';
import { getEpisodesAPI } from '../services/characters.services';
import Episode from '../types/episode.types';

/**
 * This is the detail page. Here you can show the view on the selected character
 * along with the list of episodes in which he appears
 *
 * @author John Herrera
 * @returns detail page
 */
const PageDetail: FC = () => {
  const { selectedCharacter } = useSelector((state) => state.selectedCharacter);

  /**
   * Function that takes all the episodes the character was involved in and returns a string
   * with all the episode numbers separated by ",".
   *
   * @author John Herrera
   * @returns string returns a string with all episode numbers
   */
  const getEpisodes = () => {
    const episodeNumbers = selectedCharacter?.episode.map((e) => {
      const corte = e.lastIndexOf('/');
      return e.substring(corte + 1);
    });
    return episodeNumbers?.join(',');
  };

  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const episode = getEpisodes();
    if (episode) {
      getEpisodesAPI(episode).then((episodios) => setEpisodes(episodios));
    }
  }, []);

  if (!selectedCharacter)
    return (
      <div className={'detalle-header-texto'}>
        Seleccione su personaje favorito
      </div>
    );
  return (
    <div className='container'>
      <h3>{selectedCharacter?.name}</h3>
      <div className={'detalle'}>
        <div className={'detalle-header'}>
          <img src={selectedCharacter?.image} alt='Rick Sanchez' />
          <div className={'detalle-header-texto'}>
            <p>{selectedCharacter?.name}</p>
            <p>Planeta: {selectedCharacter?.origin?.name}</p>
            <p>Genero: {selectedCharacter?.gender}</p>
          </div>
          <FavouriteButton character={selectedCharacter} />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={'episodios-grilla'}>
        {episodes.map((e) => (
          <ChapterCard
            key={e.id}
            episodio={e.episode}
            airDate={e.air_date}
            name={e.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PageDetail;
