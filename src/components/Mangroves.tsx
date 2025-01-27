import React from 'react';
import { Trees as Tree, Waves, Fish, Factory, ThermometerSun, Shield, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const Mangroves = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();

  const facts = [
    {
      icon: Tree,
      title: 'Natural Barrier',
      description: 'Mangroves reduce wave energy by up to 66% in the first 100m of forest width.',
      percentage: 66,
    },
    {
      icon: Fish,
      title: 'Marine Nursery',
      description: 'Supporting over 70% of tropical coastal fish species in their juvenile stages.',
      percentage: 70,
    },
    {
      icon: ThermometerSun,
      title: 'Carbon Storage',
      description: 'Storing up to 3-5 times more carbon per hectare than tropical forests.',
      percentage: 80,
    },
  ];

  const threats = [
    {
      icon: Factory,
      title: 'Deforestation',
      description: 'Coastal development and aquaculture threaten mangrove ecosystems.',
    },
    {
      icon: Waves,
      title: 'Climate Change',
      description: 'Rising sea levels and changing temperatures impact mangrove survival.',
    },
    {
      icon: Shield,
      title: 'Conservation',
      description: 'Local initiatives work to protect and restore mangrove forests.',
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

  return (
    <section className="py-20 bg-gradient-to-b from-eco-50 via-white to-eco-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {t('mangroves.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('mangroves.subtitle')}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={itemVariants}
          className="relative h-[400px] mb-16 rounded-2xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1624963759505-923493f6cd3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Mangrove forest in Cambodia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">{t('mangroves.hero.title')}</h3>
              <p className="text-lg">{t('mangroves.hero.subtitle')}</p>
            </div>
          </div>
        </motion.div>

        {/* Key Facts */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">{t('mangroves.impact.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-32 mb-6">
                  {/* Icon positioned above the percentage */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <fact.icon className="w-12 h-12 text-eco-600" />
                  </div>
                  
                  {/* Percentage circle below the icon */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <svg className="w-20 h-20" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E6EFE6"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={inView ? { pathLength: fact.percentage / 100 } : { pathLength: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#4D8B4D"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <text
                        x="18"
                        y="20.35"
                        className="text-2xl font-bold"
                        textAnchor="middle"
                        fill="#4D8B4D"
                      >
                        {fact.percentage}%
                      </text>
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {fact.title}
                </h4>
                <p className="text-gray-600 text-center">
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Threats and Conservation */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Challenges & Conservation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <motion.div
                key={threat.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                  <threat.icon className="w-8 h-8 text-eco-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{threat.title}</h4>
                <p className="text-gray-600">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-eco-600 to-earth-600 opacity-10 rounded-3xl" />
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-eco-100">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-eco-50 flex items-center justify-center"
              >
                <Heart className="w-8 h-8 text-eco-600" />
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('mangroves.cta.text')}
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Every $10 helps protect 100 square meters of mangrove forest for one year.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-eco-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-eco-700 transition-all duration-300 group"
                >
                  <Heart className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  {t('mangroves.cta.button')}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-earth-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-earth-700 transition-all duration-300 group"
                >
                  <Tree className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  Learn More
                </motion.button>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Shield className="w-4 h-4 mr-2 text-eco-600" />
                  Protected Areas
                </div>
                <div className="flex items-center justify-center">
                  <Tree className="w-4 h-4 mr-2 text-eco-600" />
                  Sustainable Management
                </div>
                <div className="flex items-center justify-center">
                  <Users className="w-4 h-4 mr-2 text-eco-600" />
                  Community Support
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Mangroves;