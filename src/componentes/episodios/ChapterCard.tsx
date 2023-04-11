import './tarjeta-episodio.css';

/**
 * Card for each episode within the character view.
 *
 * You will need to add the necessary properties to display the episode data
 * @author John Herrera
 * @param {void}
 *
 * @returns a JSX element
 */

export interface ChapterCardProps {
  name: string;
  airDate: string;
  episodio: string;
}

const ChapterCard = ({ name, airDate, episodio }: ChapterCardProps) => {
  return (
    <div className='tarjeta-episodio'>
      <h4>{name}</h4>
      <div>
        <span>{episodio}</span>
        <span>Lanzado el: {airDate}</span>
      </div>
    </div>
  );
};

export default ChapterCard;
