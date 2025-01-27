import React from 'react';
import { Users, ArrowRight, Handshake, TreePine, Leaf, Sprout, Trees, Plane as Plant2, Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();

  const partners = [
    {
      name: 'Green Earth Foundation',
      icon: TreePine,
      description: 'Leading environmental conservation organization',
    },
    {
      name: 'EcoTech Innovations',
      icon: Leaf,
      description: 'Sustainable technology solutions',
    },
    {
      name: 'Nature First Alliance',
      icon: Trees,
      description: 'Biodiversity conservation network',
    },
    {
      name: 'Green Tech Solutions',
      icon: Plant2,
      description: 'Environmental technology innovator',
    },
    {
      name: 'Eco Education Institute',
      icon: Flower2,
      description: 'Environmental education leader',
    },
    {
      name: 'Sustainable Future Corp',
      icon: Sprout,
      description: 'Renewable energy solutions provider',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-eco-50 to-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-4"
          >
            <Users className="w-12 h-12 text-eco-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Together with our valued partners, we're making a lasting impact on environmental conservation
          </p>
        </motion.div>

        {/* Partners Grid - Horizontal Scrolling on Mobile */}
        <motion.div
          variants={containerVariants}
          className="relative mb-16"
        >
          <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-nowrap sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 min-w-max sm:min-w-0">
              {partners.map((partner) => (
                <motion.div
                  key={partner.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="w-72 sm:w-auto flex-shrink-0"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-eco-500 to-eco-600 p-3 shadow-lg">
                        <partner.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{partner.name}</h4>
                        <p className="text-sm text-gray-600">{partner.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mobile Scroll Indicator */}
          <div className="sm:hidden mt-4 flex justify-center">
            <div className="space-x-1">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="inline-block w-2 h-2 rounded-full bg-eco-200"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-eco-50 to-earth-50 rounded-2xl p-8 shadow-lg border border-eco-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Become a Partner
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our network of environmental champions and help us create lasting positive change for our planet
            </p>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 bg-eco-600 text-white rounded-lg font-semibold shadow-lg hover:bg-eco-700 transition-all duration-300"
            >
              <Handshake className="mr-2 w-5 h-5" />
              Partner With Us
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Sponsors;