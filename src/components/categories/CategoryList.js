import React from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';

const CategoryList = ({ categories }) => {
  const showCategoryName = categoryName => {
    alert(`Category name: ${categoryName}`);
  };
  return (
    <div className="row">
      {categories.map((category, i) => (
        <CategoryItem
          category={category}
          key={i}
          showCategoryName={showCategoryName}
        >
          <img
            style={{ height: 200, objectFit: 'cover' }}
            src={category.image}
            alt=""
            className="card-img-top"
          />
        </CategoryItem>
      ))}
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryList;
