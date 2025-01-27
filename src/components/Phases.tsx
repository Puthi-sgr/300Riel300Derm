import React from 'react';
import { ClipboardList, Coins, Sprout, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const Phases = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();

  const phases = [
    {
      number: "01",
      title: t('phases.planning.title'),
      icon: ClipboardList,
      description: t('phases.planning.description'),
      color: 'from-eco-400 to-eco-600',
    },
    {
      number: "02",
      title: t('phases.fundraising.title'),
      icon: Coins,
      description: t('phases.fundraising.description'),
      color: 'from-eco-500 to-eco-700',
    },
    {
      number: "03",
      title: t('phases.implementation.title'),
      icon: Sprout,
      description: t('phases.implementation.description'),
      color: 'from-eco-600 to-eco-800',
    },
    {
      number: "04",
      title: t('phases.monitoring.title'),
      icon: LineChart,
      description: t('phases.monitoring.description'),
      color: 'from-eco-700 to-eco-900',
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-eco-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('phases.title')}</h2>
          <p className="mt-4 text-xl text-gray-600">{t('phases.subtitle')}</p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="relative py-8 hidden md:block">
          {/* Timeline Line */}
          <motion.div 
            variants={lineVariants}
            className="absolute top-1/2 left-0 right-0 h-3 bg-gradient-to-r from-eco-400 to-eco-600 transform -translate-y-1/2 rounded-full shadow-lg origin-left"
            style={{
              boxShadow: '0 0 20px rgba(0, 89, 0, 0.2)',
            }}
          />
          
          {/* Connector Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-16 transform -translate-y-1/2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={inView ? { height: '4rem' } : { height: 0 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                className="absolute h-16 w-0.5 bg-eco-300"
                style={{ left: `${25 + i * 25}%`, transform: 'translateX(-50%)' }}
              />
            ))}
          </div>
          
          {/* Phases */}
          <div className="relative grid grid-cols-4 gap-4">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                variants={itemVariants}
                className="relative flex flex-col items-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Phase Number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                  className="absolute -top-8 text-4xl font-bold text-eco-200"
                >
                  {phase.number}
                </motion.div>

                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} 
                    flex items-center justify-center mb-6 border-4 border-white shadow-xl
                    transform hover:shadow-2xl transition-shadow duration-300`}
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 89, 0, 0.2)',
                  }}
                >
                  <phase.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={itemVariants}
                  className="text-center group"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eco-600 transition-colors">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  {/* Placeholder Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mt-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-eco-100"
                  >
                    <p className="text-sm text-gray-600">
                      Additional information about {phase.title.toLowerCase()} phase will be added here.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              variants={itemVariants}
              className="relative bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                {/* Phase Number */}
                <div className="text-3xl font-bold text-eco-200">
                  {phase.number}
                </div>
                
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${phase.color} 
                    flex items-center justify-center border-2 border-white shadow-lg`}
                >
                  <phase.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900">
                  {phase.title}
                </h3>
              </div>

              <div className="pl-20">
                <p className="text-gray-600 mb-4">
                  {phase.description}
                </p>
                
                {/* Placeholder Card */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="p-4 bg-eco-50 rounded-lg border border-eco-100"
                >
                  <p className="text-sm text-gray-600">
                    Additional information about {phase.title.toLowerCase()} phase will be added here.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Phases;