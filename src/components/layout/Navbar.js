import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#!">
          <img src="/jsx.png" style={{ width: 100 }} alt="" /> {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'default value',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
