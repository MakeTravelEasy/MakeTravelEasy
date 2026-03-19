import React from 'react';
import Button from './ui/Button';

const Hero = ({ onPlanClick }) => {
  return (
    <section style={{
      padding: '0 20px 60px',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px'
    }}>
      <h1 style={{
        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
        fontWeight: 700,
        color: 'var(--color-primary)',
        marginBottom: '16px'
      }}>
        We plan trips like we’d<br />plan for our own family.
      </h1>
      
      <p style={{
        fontSize: '1.125rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '32px',
        maxWidth: '600px',
        lineHeight: 1.6
      }}>
        Confused by too many options? Short on time? <br/>
        We craft personal, cost-efficient journeys with the same care and detail we put into our own family trips.
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button onClick={onPlanClick}>
          Plan My Trip
        </Button>
        <Button variant="text" onClick={() => window.open('https://wa.me/447767528725?text=Hi,%20I%20am%20interested%20in%20planning%20a%20trip', '_blank')}>
          Talk to Us
        </Button>
      </div>
    </section>
  );
};

export default Hero;
