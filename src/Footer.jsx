import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4 md:mb-0 first-letter:text-[35px]">
            Santhosh .
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400">
            <p className="flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Durga Santhosh
            </p>
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>Thank you for visiting my portfolio. Let's build something amazing together!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;