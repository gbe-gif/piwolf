import React from 'react';
import { WORLD_ENTITIES } from '../constants';
import { MapPin, Building, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const WorldSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Location': return <MapPin className="text-gold-accent w-6 h-6" />;
      case 'Organization': return <Building className="text-blue-400 w-6 h-6" />;
      case 'Group': return <Users className="text-red-400 w-6 h-6" />;
      default: return <MapPin className="w-6 h-6" />;
    }
  };

  return (
    <section id="world" className="py-24 bg-noir-black relative overflow-hidden">
      {/* Background Map Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4">Worldview</h2>
          <p className="text-gray-400 font-serif italic">2026년 루마니아, 늑대들의 영역</p>
        </div>

        <div className="space-y-24">
          {WORLD_ENTITIES.map((entity, index) => (
            <motion.div 
              key={entity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2">
                 <div className="relative aspect-square w-full max-w-[400px] mx-auto overflow-hidden rounded-sm border border-gray-800 shadow-2xl group">
                    <img 
                      src={entity.imageUrl} 
                      alt={entity.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                 </div>
              </div>

              {/* Text Container */}
              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <div>
                  <div className={`flex items-center gap-3 mb-2 justify-center ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {getIcon(entity.type)}
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{entity.type}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{entity.name}</h3>
                  {entity.originalName && (
                    <p className="text-lg font-display text-gold-accent tracking-wider opacity-80">
                      {entity.originalName}
                    </p>
                  )}
                </div>
                
                <div className={`h-1 w-20 bg-gray-800 mx-auto ${index % 2 === 1 ? 'md:mr-0' : 'md:ml-0'}`}></div>

                <p className="text-gray-400 leading-relaxed text-lg">
                  {entity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Flavor Text */}
        <div className="mt-24 text-center border-t border-gray-900 pt-16">
            <p className="text-gray-600 font-serif italic text-lg">
              "이곳에서 인간과 수인은 공존하지만, 늑대의 영역엔 법이 통하지 않는다."
            </p>
        </div>
      </div>
    </section>
  );
};

export default WorldSection;