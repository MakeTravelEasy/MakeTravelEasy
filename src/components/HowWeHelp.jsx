import React from 'react';

const ServiceItem = ({ icon, title }) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9'
  }}>
    <span style={{ fontSize: '1.5rem' }}>{icon}</span>
    <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{title}</span>
  </div>
);

const HowWeHelp = () => {
  const services = [
    { icon: '🗺️', title: 'Smart Flight & Route Planning' },
    { icon: '🏨', title: 'Budget-Optimised Stays' },
    { icon: '📅', title: 'Day-wise Itinerary & Pacing' },
    { icon: '🚌', title: 'Local Transport & Cost Breakdown' },
    { icon: '🎒', title: 'Food, Packing & Practical Tips' },
    { icon: '💬', title: 'WhatsApp Support (Never Alone)' },
  ];

  return (
    <section style={{ padding: '60px 20px' }}>
      <div className="container">
        <h2 className="text-center" style={{ marginBottom: '40px' }}>How We Help</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '16px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
