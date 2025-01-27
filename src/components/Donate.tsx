import React from 'react';
import { Heart, QrCode, Smartphone, CreditCard, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Donate = () => {
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
    <section id="donate" className="py-20 bg-gradient-to-b from-eco-50 via-white to-eco-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Support Our Cause</h2>
          <p className="mt-4 text-xl text-gray-600">
            Your contribution helps us continue our mission
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Why Support Matters */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Why Your Support Matters</h3>
            
            <div className="space-y-6">
              <div className="bg-eco-50 rounded-lg p-6">
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🌱</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Plant and Maintain Mangrove Trees</h4>
                      <p>Help us restore vital coastal ecosystems</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Support Environmental Education</h4>
                      <p>Empower communities with knowledge and skills</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Empower Local Communities</h4>
                      <p>Create sustainable livelihoods through conservation</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Protect Vital Ecosystems</h4>
                      <p>Preserve biodiversity for future generations</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-earth-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-3">Your Impact</h4>
                <p className="text-gray-600">
                  Every contribution, regardless of size, helps us make a real difference in environmental conservation and community development. Join us in creating a sustainable future for Cambodia.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Payment Methods */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Payment Methods</h3>
            
            <div className="space-y-6">
              {/* Mobile Payment Section with QR Code */}
              <div className="border-2 border-eco-100 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Smartphone className="w-6 h-6 text-eco-600 mr-2" />
                  <h4 className="text-lg font-medium text-gray-900">Mobile Payment</h4>
                </div>
                
                {/* QR Code Placeholder */}
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 mb-4">
                  <QrCode className="w-48 h-48 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 text-center">
                    Scan QR code to make payment
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Account Name:</span>
                    <span className="font-medium text-gray-900">Your Organization Name</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Account Number:</span>
                    <span className="font-medium text-gray-900">XXXX-XXXX-XXXX</span>
                  </div>
                </div>
              </div>

              {/* Other Payment Methods */}
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CreditCard className="w-6 h-6 text-eco-600 mr-3" />
                  <div>
                    <h5 className="font-medium text-gray-900">Credit/Debit Card</h5>
                    <p className="text-sm text-gray-600">Coming soon</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Building2 className="w-6 h-6 text-eco-600 mr-3" />
                  <div>
                    <h5 className="font-medium text-gray-900">Bank Transfer</h5>
                    <p className="text-sm text-gray-600">Contact us for details</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-eco-600 hover:bg-eco-700"
            >
              <Heart className="mr-2" size={20} />
              Complete Donation
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Donate;