import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaBullseye, FaRobot, FaChartLine } from 'react-icons/fa'; // Example icons

// Data for the feature cards
const featuresData = [
  {
    icon: <FaBullseye size={40} className="text-[#dc2626]" />,
    title: 'Personalized Workout Plans',
    description: 'Our AI analyzes your goals and fitness level to create dynamic, custom-tailored workout routines that evolve with you.',
  },
  {
    icon: <FaRobot size={40} className="text-[#dc2626]" />,
    title: 'AI Form Tracking',
    description: 'Using your device\'s camera, our vision AI provides real-time feedback on your exercise form to maximize effectiveness and prevent injury.',
  },
  {
    icon: <FaChartLine size={40} className="text-[#dc2626]" />,
    title: 'Progress Analytics',
    description: 'Track your strength gains, measurements, and consistency with beautiful, easy-to-understand charts and progress reports.',
  },
];

const Features = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#dc2626] mb-2">
            Core Features
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5]">
            Why Choose AI Gym?
          </h3>
          <div className="mt-4 w-24 h-1 bg-[#dc2626] mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-component for individual feature cards to handle its own animation logic
const FeatureCard = ({ feature, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1,    // Trigger when 10% of the card is visible
  });

  const { icon, title, description } = feature;

  return (
    <div
      ref={ref}
      // Apply animation class when 'inView' is true
      className={`bg-[#121212] p-8 rounded-lg text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#dc2626]/20 ${
        inView ? 'animate-fadeInOnScroll' : 'opacity-0'
      }`}
      // Stagger the animation start time for a nice effect
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="text-xl font-bold text-[#f5f5f5] mb-2">{title}</h4>
      <p className="text-[#a3a3a3]">{description}</p>
    </div>
  );
};

export default Features;