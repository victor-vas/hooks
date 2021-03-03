import React from 'react';

interface CategoriesProps {
  categories: string[];
  filterItems: (category: string) => void;
}

const Categories = ({ categories, filterItems }: CategoriesProps) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
