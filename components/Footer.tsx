import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-noir-black border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-2xl text-gray-700 mb-4">Подобранный волком</h2>
        <p className="text-gray-500 text-sm mb-8">
          Based on the character prompt "웬 늑대에게 주워졌다"
        </p>
        <div className="text-xs text-gray-600">
          <p>Designed for Roleplay Scenario Introduction</p>
          <p className="mt-2">© 2026 Black Danube Logistics S.A.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;