import React from 'react';
import { SUPPORTING_CHARACTERS } from '../constants';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const CrewSection: React.FC = () => {
  return (
    <section id="crew" className="py-24 bg-noir-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-2">The Crew</h2>
          <p className="text-gold-accent text-lg">검은 두나우와 주변 인물들</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPORTING_CHARACTERS.map((char, index) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-noir-black border border-gray-800 p-6 hover:border-gold-accent/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-800 to-transparent opacity-20 group-hover:from-gold-accent group-hover:opacity-10 transition-all"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{char.name}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{char.role}</p>
                </div>
                <div className="text-xs px-2 py-1 bg-gray-900 border border-gray-700 rounded text-gray-400">
                  {char.mbti}
                </div>
              </div>

              <div className="mb-4 flex gap-2 text-sm text-gray-400">
                 <span>{char.species}</span>
                 <span className="text-gray-700">|</span>
                 <span>{char.gender === 'Male' ? '남' : '여'}, {char.age}세</span>
              </div>

              <div className="h-px w-full bg-gray-800 mb-4 group-hover:bg-gold-accent/30 transition-colors"></div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[48px]">
                {char.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {char.tags.map(tag => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrewSection;