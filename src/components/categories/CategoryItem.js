import React from 'react';
import PropTypes from 'prop-types';

const CategoryItem = ({ category, showCategoryName, children }) => {
  const handleClick = () => {
    showCategoryName(category.categoryName);
  };
  return (
    <div className="col-md-3">
      <div className="card">
        {children}
        <div className="card-body">
          <h3 className="text-primary">{category.categoryName}</h3>
          <p className="card-text">{category.description}</p>
          <a href="#" className="btn btn-primary" onClick={handleClick}>
            click me
          </a>
        </div>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
  showCategoryName: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default CategoryItem;
