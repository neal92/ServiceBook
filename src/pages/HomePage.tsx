import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Calendar, Check } from 'lucide-react';

function HomePage() {
  const plans = [
    {
      name: 'Basic Plan',
      price: 29,
      features: [
        'Up to 5 service bookings/month',
        'Basic analytics',
        'Email support',
        'Standard availability slots'
      ]
    },
    {
      name: 'Professional Plan',
      price: 79,
      features: [
        'Unlimited service bookings',
        'Advanced analytics',
        'Priority support',
        'Custom availability slots',
        'SMS notifications',
        'Custom branding'
      ]
    },
    {
      name: 'Enterprise Plan',
      price: 199,
      features: [
        'All Professional features',
        'Dedicated account manager',
        'API access',
        'Multiple staff accounts',
        'Custom integration support',
        'Service level agreement'
      ]
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Expert Business Consulting<br />at Your Fingertips
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book professional consulting services to help your business grow. 
            Get expert advice on strategy, marketing, and finance.
          </p>
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Consultants</h3>
              <p className="text-gray-600">
                Work with experienced professionals who understand your business needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Book appointments at times that work best for your schedule
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Calendar className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">
                Simple and straightforward online booking process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="block w-full text-center py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-blue-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Take the first step towards growing your business today
          </p>
          <Link 
            to="/services" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Available Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;