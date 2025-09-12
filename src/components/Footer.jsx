import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-t-[#222] text-[#a3a3a3] py-8 px-6">
      <div className="container mx-auto text-center">
        <a href="#" className="text-3xl font-bold text-[#dc2626] uppercase tracking-wider mb-4 inline-block">
          AI<span className="text-[#f5f5f5]">Gym</span>
        </a>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-[#dc2626] transition-colors"><FaFacebookF size={20} /></a>
          <a href="#" className="hover:text-[#dc2626] transition-colors"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-[#dc2626] transition-colors"><FaInstagram size={20} /></a>
          <a href="#" className="hover:text-[#dc2626] transition-colors"><FaLinkedinIn size={20} /></a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AI Gym. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;