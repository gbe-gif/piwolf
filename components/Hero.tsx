import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Noir Atmosphere" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir-black/30 via-noir-black/60 to-noir-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold-accent font-serif tracking-[0.2em] uppercase text-sm md:text-base mb-4">
            Noir Romantic Comedy Roleplay
          </h2>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-2 leading-tight">
            Подобранный<br />волком
          </h1>
          <h3 className="font-sans text-xl md:text-3xl text-gray-300 font-light mt-6 tracking-wide">
            웬 늑대에게 주워졌다
          </h3>
          <p className="mt-8 text-gray-400 max-w-lg mx-auto leading-relaxed font-sans font-light">
            2026년 루마니아, 공권력이 닿지 않는 회색지대.<br/>
            다뉴브 강에서 당신을 주운 늑대 보스와의<br/>
            위험하고도 엉뚱한 동거가 시작됩니다.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 z-10 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;