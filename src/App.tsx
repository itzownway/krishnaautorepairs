import React, { useState } from 'react';
import { Bike, Wrench, Clock, Star, Phone, MapPin, ChevronRight, Instagram, Facebook, Twitter, Paintbrush, Droplets, Settings, Search, Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

type ServiceFormData = {
  date: Date;
  bikeNumber: string;
  email: string;
  phone: string;
  name: string;
};

type ServiceHistory = {
  date: string;
  service: string;
  cost: string;
};

function App() {
  const [showServiceLookup, setShowServiceLookup] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [lookupBikeNumber, setLookupBikeNumber] = useState('');
  const [serviceHistory, setServiceHistory] = useState<ServiceHistory[]>([]);
  const [formData, setFormData] = useState<ServiceFormData>({
    date: new Date(),
    bikeNumber: '',
    email: '',
    phone: '',
    name: '',
  });

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated service history data
    setServiceHistory([
      {
        date: '2024-02-15',
        service: 'General Checkup',
        cost: '$49',
      },
      {
        date: '2023-12-10',
        service: 'Engine Repair',
        cost: '$149',
      },
    ]);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully! You will receive a confirmation shortly.');
    setShowBookingForm(false);
    setFormData({
      date: new Date(),
      bikeNumber: '',
      email: '',
      phone: '',
      name: '',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80"
            alt="Bicycle in workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bike className="h-8 w-8 text-white" />
              <span className="text-white text-2xl font-bold">Krishna Auto Repairs</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-gray-300">Services</a>
              <a href="#about" className="text-white hover:text-gray-300">About</a>
              <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 pt-32">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Expert Bike Service <br />& Repairs
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Professional bicycle maintenance and repair services to keep your ride smooth and safe.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowServiceLookup(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg inline-flex items-center hover:bg-gray-100 transition"
            >
              <Search className="mr-2 h-5 w-5" />
              My Bike Service History
            </button>
            <button
              onClick={() => setShowBookingForm(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg inline-flex items-center hover:bg-blue-700 transition"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Service
            </button>
          </div>
        </div>
      </header>

      {/* Modal for Service Lookup */}
      {showServiceLookup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Service History Lookup</h2>
            <form onSubmit={handleLookup}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bike Number
                </label>
                <input
                  type="text"
                  value={lookupBikeNumber}
                  onChange={(e) => setLookupBikeNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowServiceLookup(false);
                    setLookupBikeNumber('');
                    setServiceHistory([]);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Look Up
                </button>
              </div>
            </form>
            {serviceHistory.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Service History</h3>
                <div className="space-y-3">
                  {serviceHistory.map((service, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <p className="font-medium">{service.service}</p>
                      <p className="text-sm text-gray-600">Date: {service.date}</p>
                      <p className="text-sm text-gray-600">Cost: {service.cost}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal for Booking Form */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Book a Service</h2>
            <form onSubmit={handleBookingSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Date
                  </label>
                  <DatePicker
                    selected={formData.date}
                    onChange={(date: Date) => setFormData({...formData, date})}
                    minDate={new Date()}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bike Number
                  </label>
                  <input
                    type="text"
                    value={formData.bikeNumber}
                    onChange={(e) => setFormData({...formData, bikeNumber: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowBookingForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Book Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Droplets className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Bike Wash</h3>
              <p className="text-gray-600 mb-4">
                Professional cleaning service to keep your bike spotless and maintain its components.
              </p>
              <p className="text-blue-600 font-semibold">From $29</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Wrench className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">General Checkup</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive inspection of all components to ensure optimal performance.
              </p>
              <p className="text-blue-600 font-semibold">From $49</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Settings className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Engine Repairing</h3>
              <p className="text-gray-600 mb-4">
                Expert engine maintenance and repair services for motorized bikes.
              </p>
              <p className="text-blue-600 font-semibold">From $99</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Paintbrush className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Coloring</h3>
              <p className="text-gray-600 mb-4">
                Professional paint jobs to give your bike a fresh new look.
              </p>
              <p className="text-blue-600 font-semibold">From $199</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Star className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Fibering</h3>
              <p className="text-gray-600 mb-4">
                Custom fiber work and repairs for enhanced durability and aesthetics.
              </p>
              <p className="text-blue-600 font-semibold">From $149</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Spare Parts</h3>
              <p className="text-gray-600 mb-4">
                Quality replacement parts and accessories for all bike models.
              </p>
              <p className="text-blue-600 font-semibold">Varies by Part</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&q=80"
                alt="Mechanic working on bike" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Expert Care for Your Bike</h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience, our certified mechanics provide the highest quality service for all types of bikes. We're passionate about cycling and committed to keeping your bike in perfect condition.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  Certified Mechanics
                </li>
                <li className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  Quick Turnaround
                </li>
                <li className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Wrench className="h-5 w-5 text-blue-600" />
                  </div>
                  Quality Parts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Book your service appointment or get in touch with any questions.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <span>123 Bike Street, Cycling City, CC 12345</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent h-32"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Bike className="h-8 w-8" />
              <span className="text-2xl font-bold">Krishna Auto Repairs</span>
            </div>
            <div className="text-center md:text-right">
              <p>© 2024 Krishna Auto Repairs. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;