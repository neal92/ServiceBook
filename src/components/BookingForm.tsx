import React, { useState } from 'react';
import type { Service } from '../data/services';
import { format, isBefore, startOfToday, parse, addMinutes } from 'date-fns';

interface BookingFormProps {
  service: Service | null;
  selectedDate: Date | null;
  onDateSelect: (date: Date | null) => void;
  onSubmit: (data: any) => void;
}

function BookingForm({ service, selectedDate, onDateSelect, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      serviceId: service?.id,
      date: selectedDate,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getAvailableTimes = () => {
    const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
    const now = new Date();
    
    if (selectedDate && format(selectedDate, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd')) {
      return times.filter(time => {
        const [hours, minutes] = time.split(':').map(Number);
        const appointmentTime = new Date(selectedDate);
        appointmentTime.setHours(hours, minutes);
        return isBefore(now, appointmentTime);
      });
    }
    
    return times;
  };

  const availableTimes = getAvailableTimes();

  const minDate = format(startOfToday(), 'yyyy-MM-dd');

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service Selection */}
      {!service && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select a Service
          </label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Choose a service...</option>
          </select>
        </div>
      )}

      {/* Date Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select a Date
        </label>
        <input
          type="date"
          min={minDate}
          className="w-full p-2 border border-gray-300 rounded-md"
          value={selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''}
          onChange={(e) => onDateSelect(e.target.value ? new Date(e.target.value) : null)}
          required
        />
      </div>

      {/* Time Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select a Time
        </label>
        <div className="grid grid-cols-3 gap-2">
          {availableTimes.map(time => (
            <button
              key={time}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, time }))}
              className={`p-2 text-center border rounded-md transition-colors ${
                formData.time === time 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'border-gray-300 hover:bg-blue-50 hover:border-blue-500'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Confirm Booking
      </button>
    </form>
  );
}

export default BookingForm;