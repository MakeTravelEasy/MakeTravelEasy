import React from 'react';

const CountryTag = ({ flag, name }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    backgroundColor: 'white',
    borderRadius: '50px',
    border: '1px solid #e2e8f0',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    fontSize: '0.95rem'
  }}>
    <span>{flag}</span>
    <span>{name}</span>
  </div>
);

const Countries = () => {
  const countries = [
    { flag: '🇨🇭', name: 'Switzerland' },
    { flag: '🇫🇷', name: 'France' },
    { flag: '🇫🇮', name: 'Finland' },
    { flag: '🇮🇸', name: 'Iceland' },
    { flag: '🇳🇱', name: 'Netherlands' },
    { flag: '🇮🇹', name: 'Italy' },
    { flag: '🇭🇷', name: 'Croatia' },
    { flag: '🇵🇹', name: 'Portugal' },
    { flag: '🇪🇸', name: 'Spain' },
    { flag: '🇩🇪', name: 'Germany' },
    { flag: '🇬🇷', name: 'Greece' },
    { flag: '🇬🇧', name: 'United Kingdom' },
  ];

  return (
    <section style={{ padding: '40px 0', borderBottom: '1px solid #f1f5f9' }}>
      <div className="container" style={{ overflow: 'hidden' }}>
        <p className="text-center" style={{ 
          fontSize: '0.9rem', 
          textTransform: 'uppercase', 
          letterSpacing: '1px', 
          color: 'var(--color-text-secondary)',
          marginBottom: '20px',
          fontWeight: 600
        }}>
          Countries We've Traveled
        </p>
        
        <div style={{
          display: 'flex',
          gap: '12px',
          overflowX: 'auto',
          paddingBottom: '16px', // Hide scrollbar visual or allow space
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none',  // IE
          WebkitOverflowScrolling: 'touch',
          justifyContent: 'flex-start' // Align left on mobile
        }} className="no-scrollbar">
          {/* Duplicate for visual fullness if needed, but 8 is enough for scroll */}
          <div style={{ minWidth: '20px' }} aria-hidden="true"></div> {/* Spacer */}
          {countries.map((c, i) => (
            <CountryTag key={i} {...c} />
          ))}
          <div style={{ minWidth: '20px' }} aria-hidden="true"></div> {/* Spacer */}
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Countries;
