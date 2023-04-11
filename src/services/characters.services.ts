import Episode from '../types/episode.types';
import DataResult from '../types/data.types';

export const getCharactersAPI = async (name: string): Promise<DataResult> => {
  const response = await fetch(name);
  const data = response.json();
  return data;
};

export const getEpisodesAPI = async (episodes: string): Promise<Episode[]> => {
  const response = await fetch(
    'https://rickandmortyapi.com/api/episode/' + episodes
  );
  const data = await response.json();

  if (data.id) {
    let episodesAux: Episode[] = [];
    episodesAux.push(data);
    return episodesAux;
  } else return data;
};
