import React from 'react';
import { Target, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600">
              Empowering communities through knowledge sharing and collaborative growth
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We strive to create a platform where voices can be heard, stories can be shared, 
              and communities can come together to make a positive impact on society.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to bridge cultural gaps and foster understanding, 
              our journey began with a simple blog and has grown into a vibrant community 
              of changemakers and storytellers.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Objectives</h3>
            <ul className="space-y-4">
              {[
                { icon: Target, text: 'Promote cultural exchange and understanding' },
                { icon: Heart, text: 'Support local community initiatives' },
                { icon: Users, text: 'Build a global network of changemakers' },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600 mt-1" />
                  <span className="ml-3 text-gray-600">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;