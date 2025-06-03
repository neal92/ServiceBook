import React, { useState } from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import CategoryList from '../components/CategoryList';

function ServicesPage() {
  const categories = Array.from(new Set(services.map(service => service.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredServices = selectedCategory
    ? services.filter(service => service.category === selectedCategory)
    : services;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
      
      <CategoryList 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;