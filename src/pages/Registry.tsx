import React from 'react';

const registries = [
  {
    name: 'Amazon',
    url: 'https://www.amazon.com/wedding',
    logo: '/images/amazon-logo.png',
    description: 'Shop our Amazon registry for a wide selection of gifts.'
  },
  {
    name: 'Target',
    url: 'https://www.target.com/gift-registry',
    logo: '/images/target-logo.png',
    description: 'Find our Target registry for home and essentials.'
  },
  {
    name: 'Honeyfund',
    url: 'https://www.honeyfund.com',
    logo: '/images/honeyfund-logo.png',
    description: 'Contribute to our honeymoon fund and experiences.'
  }
];

const Registry = () => {
  return (
    <section className="py-20 min-h-screen relative">
      {/* Stationary flower background at the bottom, full width, dimmed */}
      <img
        src="/images/test_flowers.png"
        alt="flowers background"
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100vw',
          minWidth: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: 0.7,
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 max-w-3xl" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-coral mb-4">Gift Registry</h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            Your presence is the greatest gift! If you wish to bless us with something extra, here are our registries:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {registries.map((reg) => (
            <a
              key={reg.name}
              href={reg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-wedding-peach hover:shadow-xl transition-shadow duration-200"
            >
              {reg.logo && (
                <img src={reg.logo} alt={reg.name + ' logo'} className="w-20 h-20 object-contain mb-4" />
              )}
              <h3 className="font-serif text-2xl text-wedding-coral font-bold mb-2">{reg.name}</h3>
              <p className="text-gray-600 text-center text-base">{reg.description}</p>
            </a>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 border border-wedding-peach inline-block">
            <h3 className="font-serif text-xl font-semibold text-wedding-coral mb-4">Thank You!</h3>
            <p className="text-gray-700 mb-4">
              We are so grateful for your love and support as we start our life together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registry;
