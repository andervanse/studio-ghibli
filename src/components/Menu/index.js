import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <menu>
            <li><Link to="/">Home</Link></li> {" | "}
            <li><Link to="/movies">Movies</Link></li> {" | "}
            <li><Link to="/people">People</Link></li> {" | "}
            <li><Link to="/about">About</Link></li>
        </menu>
    )
}

export default Menu;