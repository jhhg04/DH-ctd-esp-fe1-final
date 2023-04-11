import { FC } from 'react';
import { Link } from 'react-router-dom';
import './encabezado.css';

/**
 * Header that contains the links to navigate between the pages
 *
 * Usage: `<Header />`
 * @author John Herrera
 * @param {void}
 * @returns {JSX.Element}
 */
const Header: FC = () => {
  return (
    <header>
      <div>
        <div>
          <h2>Examen Final de Frontend IV</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/favoritos'>Favoritos</Link>
            </li>
            <li>
              <Link to='/detalle'>Detalle</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
