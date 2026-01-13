import React from 'react';
import { MAIN_CHARACTER } from '../constants';
import { Ruler, Activity, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const BasilSection: React.FC = () => {
  const { name, russianName, role, tags, description, physique, height, mbti, quote } = MAIN_CHARACTER;

  return (
    <section id="main-character" className="py-24 bg-noir-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-danube-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-12">
        
        {/* Landscape Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative shadow-2xl rounded-sm overflow-hidden border border-gray-800"
        >
          <div className="aspect-[16/9] w-full bg-black">
             <img 
              src="https://i.postimg.cc/SRXYkKsk/22.jpg" 
              alt="Basil" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
        </motion.div>

        {/* Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full space-y-8"
        >
          <div className="text-center md:text-left border-b border-gray-800 pb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-serif tracking-wide">{name}</h2>
            {russianName && (
               <p className="text-xl md:text-2xl text-gray-500 font-serif italic mb-3 opacity-70">
                 {russianName}
               </p>
            )}
            <p className="text-xl text-gold-accent font-display tracking-widest uppercase">{role}</p>
          </div>

          <blockquote className="border-l-4 border-gold-accent pl-6 py-2 bg-gradient-to-r from-gray-900/50 to-transparent">
            <p className="text-2xl md:text-3xl text-gray-300 font-serif italic leading-relaxed">
              "{quote}"
            </p>
          </blockquote>

          <p className="text-gray-400 leading-relaxed text-lg text-justify md:text-left">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-noir-black p-6 border border-gray-800 rounded-sm hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-2 text-gold-accent mb-2">
                <Ruler size={18} /> <span className="text-sm font-bold uppercase tracking-wider">Physique</span>
              </div>
              <p className="text-white text-lg font-medium">{height}</p>
              <p className="text-gray-500">{physique}</p>
            </div>
            
            <div className="bg-noir-black p-6 border border-gray-800 rounded-sm hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-2 text-gold-accent mb-2">
                <Activity size={18} /> <span className="text-sm font-bold uppercase tracking-wider">Type</span>
              </div>
              <p className="text-white text-lg font-medium">{mbti}</p>
              <p className="text-gray-500">{MAIN_CHARACTER.species}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {tags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-gray-900 text-gray-400 border border-gray-800 text-sm rounded-full flex items-center gap-2 hover:text-white transition-colors">
                <Tag size={14} /> {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BasilSection;