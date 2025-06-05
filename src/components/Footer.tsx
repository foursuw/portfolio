
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-raleway font-semibold text-xl mb-4">
            Bagadi Sarana Sai
          </h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Professional Electrical & Electronics Engineer creating innovative solutions 
            through technology and engineering excellence.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-300 hover:text-portfolio-accent transition-colors duration-300"
              >
                {platform}
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-600 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bagadi Sarana Sai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
