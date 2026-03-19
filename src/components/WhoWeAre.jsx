import React from 'react';
import coupleImage from '../assets/couple_winter.jpg';

const WhoWeAre = () => {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#F8FAFC' }}>
      <div className="container" style={{ 
        maxWidth: '800px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '32px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '200px',
          height: '200px',
          backgroundColor: '#ddd',
          borderRadius: '50%',
          backgroundImage: `url(${coupleImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }} aria-label="Photo of the couple" />
        
        <div>
          <h2 style={{ marginBottom: '16px' }}>Who We Are</h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--color-text-secondary)',
            marginBottom: '16px'
          }}>
            After travelling across <strong>15+ European and UK countries</strong>, we understand exactly what makes a trip special.
          </p>
          <p style={{
             color: 'var(--color-text-secondary)',
             marginBottom: '16px',
             lineHeight: 1.7
          }}>
            We don’t just plan trips. We carefully design cost-efficient, stress-free journeys, exactly as we would for our own family.
          </p>
          <p style={{ 
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7
          }}>
            Many travelers feel overwhelmed by endless options and the fear of overspending. 
            We take that burden away. From finding the perfect route to discovering budget-friendly stays, we handle it all. 
            And here is our promise: <strong>we never take commissions</strong>. We work solely for you, to reduce your costs and stress, often saving you far more than our fee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
