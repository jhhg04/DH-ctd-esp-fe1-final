interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  gender: string;
  species: string;
  origin: {
    name: string;
  };
  episode: string[];
}

export default Character;
