import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>contact@servicebook.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>123 Business Ave, Suite 100</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              ServiceBook provides professional consulting services to help businesses grow and succeed. 
              Book your consultation today and take the first step towards achieving your business goals.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ServiceBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer