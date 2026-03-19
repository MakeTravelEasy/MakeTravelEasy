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
            title="Customized Itinerary" 
            description="We create a detailed plan with a complete budget breakdown. (You will exactly know how much you are going to spend in your trip)."
          />
          <Step 
            number="2" 
            title="End-to-End Booking" 
            description="We handle flights, trains, accommodation, experiences, and entry tickets."
          />
          <Step 
            number="3" 
            title="Book everything for you" 
            description="We handle every detail: transport, accommodation, unique experiences, and entry tickets. You just pack your bags."
          />
          <Step 
            number="4" 
            title="Execute the plan perfectly" 
            description="Travel with a personal expert in your pocket. Missed a train? Confused? Don't panic. Just message us, and we'll sort it out."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
