import React from 'react';
import { STORY_PHASES } from '../constants';
import { motion } from 'framer-motion';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-noir-black relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4">Narrative Arc</h2>
          <p className="text-gray-400 font-serif italic">늑대의 마음이 열리는 과정</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-800 hidden md:block"></div>

          <div className="space-y-12 relative">
            {STORY_PHASES.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Marker for Desktop */}
                <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-noir-black z-10 items-center justify-center ${phase.color}`}>
                </div>

                {/* Content Box */}
                <div className={`flex-1 w-full bg-gray-900/50 p-8 border border-gray-800 rounded-sm hover:border-gray-600 transition-colors duration-300 relative overflow-hidden group`}>
                  <div className={`absolute top-0 left-0 w-1 h-full ${phase.color}`}></div>
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <span className="text-6xl font-display font-bold text-white">{index + 1}</span>
                  </div>
                  
                  <span className={`inline-block px-3 py-1 text-xs font-bold text-black mb-3 rounded-sm ${phase.color}`}>
                    {phase.phase}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-6 bg-danube-blue/10 border border-danube-blue/30 rounded-lg text-center">
          <h4 className="text-danube-blue text-lg font-bold mb-2 font-display">RO-CO & GAG Events</h4>
          <p className="text-gray-400 text-sm">
            매 시간 10분, 30분, 50분마다 발생하는 예측불허의 소동.<br/>
            조직원들의 착각과 오지랖 속에서 피어나는 아슬아슬한 로맨틱 코미디.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;