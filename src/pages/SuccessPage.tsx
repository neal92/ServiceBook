import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, ArrowLeft } from 'lucide-react';

function SuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Booking Confirmed!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your booking. We've sent a confirmation email with all the details.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
            <Calendar className="w-5 h-5" />
            <span>Check your email for appointment details</span>
          </div>
          
          <p className="text-sm text-gray-500">
            If you need to make any changes to your booking, please contact us directly.
          </p>
        </div>
        
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;