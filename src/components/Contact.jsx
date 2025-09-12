import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="bg-[#121212] py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#dc2626] mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5]">
            Contact Us
          </h3>
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
              Have a question or want to partner with us? Reach out through our form or contact us directly. We're here to help you on your fitness journey.
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
    </section>
  );
};

export default Contact;