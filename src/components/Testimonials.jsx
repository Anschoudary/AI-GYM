import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
  {
    name: 'Jessica Miller',
    role: 'Pro Athlete',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    testimonial: 'The AI form tracker is a game-changer! It corrected a subtle mistake in my squat, and I\'ve seen more gains in the last month than in the previous six. Truly revolutionary.',
  },
  {
    name: 'Mark Johnson',
    role: 'Fitness Enthusiast',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    testimonial: 'I used to feel lost at the gym. The personalized plans keep me focused and motivated. It’s like having a world-class personal trainer in my pocket, 24/7.',
  },
  {
    name: 'Sarah Chen',
    role: 'Beginner',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    testimonial: 'As a beginner, I was intimidated by complex exercises. The AI coach guided me through every step with patience and precision. I feel more confident than ever!',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#121212] py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#dc2626] mb-2">
            What Our Members Say
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5]">
            Testimonials
          </h3>
          <div className="mt-4 w-24 h-1 bg-[#dc2626] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} data={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ data, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { name, role, avatar, testimonial } = data;

  return (
    <div
      ref={ref}
      className={`bg-[#0a0a0a] p-8 rounded-lg shadow-lg ${
        inView ? 'animate-fadeInOnScroll' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <FaQuoteLeft className="text-[#dc2626] text-3xl mb-4" />
      <p className="text-[#a3a3a3] italic mb-6">{testimonial}</p>
      <div className="flex items-center">
        <img src={avatar} alt={`${name}'s avatar`} className="w-12 h-12 rounded-full mr-4 border-2 border-[#dc2626]" />
        <div>
          <h4 className="font-bold text-[#f5f5f5]">{name}</h4>
          <p className="text-sm text-[#a3a3a3]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;