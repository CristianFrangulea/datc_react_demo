import React from 'react';
import { Link } from 'react-router-dom';

import accentureLogo from '../images/accenture-logo.png';

const Navigation = () => {

  const [active, setActive] = React.useState(false);

  const toggleMenu = () => {
    setActive(!active);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom text-center py-0">
      <Link to="/" className="navbar-brand main-link py-0">
        <img width="80px" className="img-fluid" src={accentureLogo} />
      </Link>
      <button className="navbar-toggler me-2 py-0 px-1" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + (active ? "show" : "")}>
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle main-link" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e) => e.preventDefault()}>
                   ALL COURSES 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#" onClick={(e) => e.preventDefault()}>
                        Java 
                      </a>
                      <ul className="dropdown-menu">
                          <li><Link className="dropdown-item" to="/course" >Core</Link></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Concurrency</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Exceptions</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>JUnit</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Streams</a></li>
                      </ul>
                    </li>

                    <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#" onClick={(e) => e.preventDefault()}>
                        React.js 
                      </a>
                      <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Props</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Service workers</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>State</a></li>
                      </ul>
                    </li>

                    <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#" onClick={(e) => e.preventDefault()}>
                        PHP 
                      </a>
                      <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>PHPUnit</a></li>
                          <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Symfony</a></li>
                      </ul>
                    </li>

                </ul>
            </li>
          <li className="nav-item">
            <Link to="/register" className="nav-item nav-link main-link">REGISTER</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-item nav-link main-link">PHOTO GALLERY</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-item nav-link main-link">BLOG</Link>
          </li>
          <li className="nav-item">
            <Link to="/help" className="nav-item nav-link main-link">HELP</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-item nav-link main-link">CONTACT US</Link>
          </li>
	      </ul>   
      </div>
    </nav>
  );
}

export default Navigation;
