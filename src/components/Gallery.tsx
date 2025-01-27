import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Facebook,
  Tag,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'community', name: 'Community' },
    { id: 'conservation', name: 'Conservation' },
    { id: 'education', name: 'Education' },
    { id: 'events', name: 'Events' },
  ];

  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      title: 'Community Gathering',
      description:
        'Local community members coming together to discuss environmental initiatives and share knowledge about sustainable practices.',
      category: 'community',
      date: 'March 15, 2024',
      location: 'Kampong Chhnang Province',
      photographer: 'Sarah Johnson',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      title: 'Cultural Exchange Program',
      description:
        'International volunteers working alongside local community members to learn about traditional ecological knowledge.',
      category: 'education',
      date: 'February 28, 2024',
      location: 'Siem Reap Province',
      photographer: 'David Chen',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      title: 'Mangrove Planting Initiative',
      description:
        'Community-led mangrove restoration project aimed at protecting coastal areas and supporting marine biodiversity.',
      category: 'conservation',
      date: 'March 1, 2024',
      location: 'Koh Kong Province',
      photographer: 'Maria Garcia',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      title: 'Youth Environmental Workshop',
      description:
        'Educational session teaching young people about environmental conservation and sustainable practices.',
      category: 'education',
      date: 'March 10, 2024',
      location: 'Phnom Penh',
      photographer: 'John Smith',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      title: 'Tree Planting Event',
      description:
        'Annual community tree planting event to restore local forests and promote environmental awareness.',
      category: 'events',
      date: 'March 5, 2024',
      location: 'Kampot Province',
      photographer: 'Emma Wilson',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      title: 'Community Clean-up Drive',
      description:
        'Local volunteers participating in a beach clean-up initiative to protect marine ecosystems.',
      category: 'community',
      date: 'February 25, 2024',
      location: 'Sihanoukville',
      photographer: 'Alex Thompson',
    },
  ];

  const filteredPhotos =
    selectedCategory === 'all'
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

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

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) =>
      prev === null ? null : prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) =>
      prev === null ? null : prev === photos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-4"
          >
            <ImageIcon className="w-12 h-12 text-eco-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Documenting our journey towards environmental conservation and
            community empowerment
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-eco-600 text-white'
                  : 'bg-eco-50 text-eco-600 hover:bg-eco-100'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  onClick={() => setSelectedImage(photo.id - 1)}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-eco-600" />
                  <span className="text-sm text-eco-600 capitalize">
                    {photo.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {photo.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {photo.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{photo.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{photo.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.a
            href="https://web.facebook.com/profile.php?id=100091407241732"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-eco-600 hover:bg-eco-700 text-white font-semibold rounded-lg transition-colors group"
          >
            <Facebook className="mr-2" size={20} />
            View More on Facebook lmao
            <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-7xl mx-auto px-4 w-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <img
                    src={photos[selectedImage].url}
                    alt={photos[selectedImage].title}
                    className="w-full max-h-[80vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {photos[selectedImage].title}
                    </h3>
                    <p className="text-gray-200 mb-2">
                      {photos[selectedImage].description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span>
                        Photo by: {photos[selectedImage].photographer}
                      </span>
                      <span>{photos[selectedImage].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Gallery;
