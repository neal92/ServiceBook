import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign } from 'lucide-react';
import type { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="flex items-center justify-between text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-1" />
            <span>{service.duration} min</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-5 h-5 mr-1" />
            <span>${service.price}</span>
          </div>
        </div>
        
        <Link
          to={`/book/${service.id}`}
          className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;