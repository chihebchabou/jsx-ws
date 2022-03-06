import React, { Fragment } from 'react';
import './App.css';
import stay from './stay.jpg';
import experience from './experience.jpg';
import adventure from './adventure.jpg';
import restaurant from './restaurant.jpg';

function App() {
  const categories = [
    {
      categoryName: 'Stays',
      description: 'Homes, Boutique & more',
      image: stay,
    },
    {
      categoryName: 'Experiences',
      description: 'Activities hosted by locals',
      image: experience,
    },
    {
      categoryName: 'Adventures',
      description: 'Hosted trips including lodging',
      image: adventure,
    },
    {
      categoryName: 'Restaurants',
      description: 'Popular spots to eat & drink',
      image: restaurant,
    },
  ];
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#!">
            <img src="/jsx.png" style={{ width: 100 }} alt="" />
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

      <div className="container pt-4">
        <div className="row">
          {categories.map(category => (
            <div className="col-md-3">
              <img
                style={{ height: 200, objectFit: 'cover' }}
                src={category.image}
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="text-primary">{category.categoryName}</h3>
                <p className="card-text">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
