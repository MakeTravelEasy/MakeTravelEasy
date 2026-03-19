import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const StickyCTA = ({ onPlanClick, hideSticky }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 500px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || hideSticky) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',
      padding: '16px',
      backgroundColor: 'white',
      borderTop: '1px solid #e2e8f0',
      boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
      zIndex: 100,
      display: 'none' // Hidden by default, shown via media query below
    }} className="mobile-cta">
      <Button fullWidth onClick={onPlanClick}>
        Plan My Trip
      </Button>
      <style>{`
        @media (max-width: 768px) {
          .mobile-cta {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default StickyCTA;
