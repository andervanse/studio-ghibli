import React, {useState} from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = () => {

    const [isActive, setActive] = useState(true);

    const onItemClick = (el) => {
        setActive(!isActive);
        const target = el.target.dataset.target;
        const $target = document.getElementById(target);
        const activeClass = 'is-active';

        if (isActive) {
            el.target.classList.add(activeClass);
            $target.classList.add(activeClass);
        } else {
            el.target.classList.remove(activeClass);
            $target.classList.remove(activeClass);
        }
    };

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href='#' role="button" onClick={onItemClick} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navMenu" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">HOME</Link>
                    <Link className="navbar-item" to="/movies">MOVIES</Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                       <Link className="navbar-item" to="/about">ABOUT</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu;