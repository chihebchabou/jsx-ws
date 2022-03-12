import React, { Fragment } from 'react';
import './App.css';
import stay from './stay.jpg';
import experience from './experience.jpg';
import adventure from './adventure.jpg';
import restaurant from './restaurant.jpg';
import Navbar from './components/layout/Navbar';
import CategoryList from './components/categories/CategoryList';

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

  const numbers = [1, 2, 3];
  return (
    <Fragment>
      <Navbar title="Navbar" />
      <div className="container pt-4">
        <CategoryList categories={categories} />
      </div>
    </Fragment>
  );
}

export default App;
