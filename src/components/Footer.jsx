import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-white-400">
          © {new Date().getFullYear()} Gautam Priyadarshan Bal. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          
          <a href="https://www.linkedin.com/in/gautam-priyadarshan-b4b9971b9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="mailto:gautam@example.com" className="hover:text-blue-400 transition">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
