import React from 'react';
import Button from './ui/Button';

const PriceCard = ({ days, price, description }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    flex: 1,
    minWidth: '250px'
  }}>
    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>{days}</h3>
    <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
      {price}
    </div>
    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{description}</p>
  </div>
);

const Pricing = ({ onPlanClick }) => {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#F8FAFC' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '16px' }}>Transparent Pricing</h2>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            A single, transparent fee for complete peace of mind. No hidden commissions, ever.
            We focus entirely on lowering your total trip cost while maximizing your experience.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          marginBottom: '40px' 
        }}>
          <PriceCard 
            days="3–7 Days Trip" 
            price="₹15,000" 
            description="Perfect for short getaways and city breaks." 
          />
          <PriceCard 
            days="8–12 Days Trip" 
            price="₹20,000" 
            description="Ideal for exploring a region or two countries." 
          />
          <PriceCard 
            days="12–15 Days Trip" 
            price="₹25,000" 
            description="Comprehensive planning for extensive holidays." 
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button onClick={onPlanClick}>
            Start Your Journey
          </Button>
          <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
            Clients usually save much more than our fee by avoiding expensive mistakes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
