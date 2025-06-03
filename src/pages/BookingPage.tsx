import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import BookingForm from '../components/BookingForm';

function BookingPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const service = serviceId 
    ? services.find(s => s.id === serviceId)
    : null;

  const handleBookingSubmit = (formData: any) => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', formData);
    navigate('/success');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {service ? `Book ${service.name}` : 'Book a Service'}
      </h1>

      <div className="max-w-2xl mx-auto">
        <BookingForm 
          service={service}
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          onSubmit={handleBookingSubmit}
        />
      </div>
    </div>
  );
}

export default BookingPage;