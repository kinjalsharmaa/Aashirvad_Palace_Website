import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedSocialLinks = ({ socials, className, textColor = 'text-white' }) => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [rotation, setRotation] = useState(0);

  return (
    <div className={`flex items-center justify-center gap-0 ${className || ''}`}>
      {socials.map((social, index) => (
        <div
          key={index}
          className={`relative cursor-pointer px-5 py-2 transition-opacity duration-200 ${
            hoveredSocial && hoveredSocial !== social.name
              ? 'opacity-50'
              : 'opacity-100'
          }`}
          onMouseEnter={() => {
            setHoveredSocial(social.name);
            setRotation(Math.random() * 20 - 10);
          }}
          onMouseLeave={() => setHoveredSocial(null)}
          onClick={social.onClick || (() => {})}
        >
          <span className={`block text-lg font-medium ${textColor}`}>{social.name}</span>
          <AnimatePresence>
            {hoveredSocial === social.name && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 flex h-full w-full items-center justify-center pointer-events-none"
              >
                <motion.img
                  key={social.name}
                  src={social.image}
                  alt={social.name}
                  className="w-16 h-16"
                  initial={{ y: -40, rotate: rotation, opacity: 0, filter: 'blur(2px)' }}
                  animate={{ y: -50, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -40, opacity: 0, filter: 'blur(2px)' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export { AnimatedSocialLinks };
