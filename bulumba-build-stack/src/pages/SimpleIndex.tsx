import { useState } from 'react';
import { Button } from '../components/ui/button';

const SimpleIndex = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-cyan-500 to-orange-500 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-white mb-4">
          Bulumba Build Back Better
        </h1>
        <p className="text-2xl text-white/90 mb-8">
          Timothy Bulumba for Guild President - Makerere University
        </p>
        
        <div className="bg-white rounded-lg p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Movement!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join us in building a better future for Makerere University students.
          </p>
          
          <div className="flex gap-4 mb-8">
            <Button 
              onClick={() => setCount(count + 1)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
            >
              Endorse Timothy ({count})
            </Button>
            
            <Button 
              onClick={() => window.open('https://wa.me/256703743491', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3"
            >
              Contact on WhatsApp
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Innovation</h3>
              <p>Bringing cutting-edge solutions to campus life</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Unity</h3>
              <p>Building bridges across all student communities</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Excellence</h3>
              <p>Striving for the best in everything we do</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleIndex;