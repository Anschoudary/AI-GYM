import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-6">
        <div className="bg-[#121212] p-8 md:p-12 rounded-lg shadow-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#f5f5f5]">Get In Touch</h1>
            <p className="text-lg text-[#a3a3a3] mt-2">We'd love to hear from you. Drop us a line!</p>
            <div className="mt-4 w-24 h-1 bg-[#dc2626] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0a0a0a] border-2 border-[#333] rounded-lg p-3 text-[#f5f5f5] focus:outline-none focus:border-[#dc2626] transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#0a0a0a] border-2 border-[#333] rounded-lg p-3 text-[#f5f5f5] focus:outline-none focus:border-[#dc2626] transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full bg-[#0a0a0a] border-2 border-[#333] rounded-lg p-3 text-[#f5f5f5] focus:outline-none focus:border-[#dc2626] transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wide transition-transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6 text-center md:text-left">
              <h4 className="text-2xl font-bold text-[#f5f5f5]">Contact Information</h4>
              <p className="text-[#a3a3a3]">
                Reach out through our form or contact us directly. We're here to help you on your fitness journey.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FiMail className="text-[#dc2626]" size={20} />
                <span className="text-[#f5f5f5]">contact@aigym.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FiPhone className="text-[#dc2626]" size={20} />
                <span className="text-[#f5f5f5]">(123) 456-7890</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FiMapPin className="text-[#dc2626]" size={20} />
                <span className="text-[#f5f5f5]">123 Fitness Ave, Workout City, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;