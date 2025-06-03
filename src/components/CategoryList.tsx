import React from 'react';

interface CategoryListProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

function CategoryList({ categories, selectedCategory, onSelectCategory }: CategoryListProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full ${
          selectedCategory === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All Services
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;