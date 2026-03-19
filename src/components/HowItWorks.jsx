import React from 'react';

const Step = ({ number, title, description }) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    textAlign: 'center', 
    gap: '12px',
    flex: 1
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'var(--color-secondary)',
      color: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: '1.2rem'
    }}>
      {number}
    </div>
    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{title}</h3>
    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
      <div className="container">
        <h2 className="text-center" style={{ marginBottom: '40px' }}>Our Process</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '30px',
        }} className="steps-container">
          <Step 
            number="1" 
            title="Share your travel details" 
            description="Tell us your dream destinations, travel dates, and how we can help. We’ll take the stress out of planning so you can focus on the excitement of your trip."
          />
          <Step 
            number="2" 
            title="Customized Itinerary" 
            description="We’ll design a detailed, personal plan with a complete budget breakdown. You’ll know exactly what you’re spending, with no hidden costs or surprises."
          />
          <Step 
            number="3" 
            title="Book everything for you" 
            description="From flights and trains to boutique stays and unique local experiences, we handle every booking. You just pack your bags and get ready for the journey."
          />
          <Step 
            number="4" 
            title="Execute the plan perfectly" 
            description="Travel with a personal expert in your pocket. If a plan changes or you need help on the ground, just message us. We’re here to sort everything out instantly."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
