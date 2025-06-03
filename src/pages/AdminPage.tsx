import React, { useState } from 'react';
import { Calendar, Users, DollarSign, Settings, Plus } from 'lucide-react';
import { services } from '../data/services';

function AdminPage() {
  const [showNewServiceForm, setShowNewServiceForm] = useState(false);
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    duration: 60,
    price: 0,
    category: '',
  });
  const [bookings, setBookings] = useState([
    { id: 1, client: 'John Doe', service: 'Business Consultation', date: 'Nov 15, 2023' },
    { id: 2, client: 'Jane Smith', service: 'Marketing Strategy', date: 'Nov 16, 2023' },
    { id: 3, client: 'Mike Johnson', service: 'Financial Planning', date: 'Nov 17, 2023' },
    { id: 4, client: 'Sarah Williams', service: 'SEO Audit', date: 'Nov 18, 2023' },
  ]);
  const [showAllBookings, setShowAllBookings] = useState(false);

  const displayedBookings = showAllBookings ? bookings : bookings.slice(0, 3);

  const handleNewServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the new service data to your backend
    console.log('New service:', newService);
    setShowNewServiceForm(false);
    setNewService({
      name: '',
      description: '',
      duration: 60,
      price: 0,
      category: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Bookings</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Active Clients</p>
              <p className="text-2xl font-bold">18</p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Revenue</p>
              <p className="text-2xl font-bold">$3,240</p>
            </div>
            <DollarSign className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Services</p>
              <p className="text-2xl font-bold">{services.length}</p>
            </div>
            <Settings className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </div>
      
      {/* Recent Bookings */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-3">Client</th>
                  <th className="pb-3">Service</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {displayedBookings.map(booking => (
                  <tr key={booking.id} className="text-gray-600">
                    <td className="py-3">{booking.client}</td>
                    <td>{booking.service}</td>
                    <td>{booking.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!showAllBookings && bookings.length > 3 && (
              <button
                onClick={() => setShowAllBookings(true)}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                View More
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Services Management */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Manage Services</h2>
            <button
              onClick={() => setShowNewServiceForm(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add New Service
            </button>
          </div>

          {showNewServiceForm && (
            <form onSubmit={handleNewServiceSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Name
                </label>
                <input
                  type="text"
                  value={newService.name}
                  onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newService.description}
                  onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    value={newService.duration}
                    onChange={(e) => setNewService({ ...newService, duration: Number(e.target.value) })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    value={newService.price}
                    onChange={(e) => setNewService({ ...newService, price: Number(e.target.value) })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={newService.category}
                  onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowNewServiceForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Service
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;