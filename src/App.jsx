import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import HowWeHelp from './components/HowWeHelp';
import Countries from './components/Countries';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import StickyCTA from './components/StickyCTA';

function App() {
  const [hideSticky, setHideSticky] = useState(false);

  useEffect(() => {
    const handleFocusIn = (e) => {
      // Check if focused element is an input within the contact form
      const isFormField = e.target.tagName === 'INPUT' || 
                         e.target.tagName === 'TEXTAREA' || 
                         e.target.tagName === 'SELECT';
      
      const isInForm = e.target.closest('#contact-form');
      
      if (isFormField && isInForm) {
        setHideSticky(true);
      }
    };

    const handleFocusOut = (e) => {
      // Small timeout to check if focus moved to another field in the same form
      setTimeout(() => {
        const activeElementInForm = document.activeElement.closest('#contact-form');
        if (!activeElementInForm) {
          setHideSticky(false);
        }
      }, 50);
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header hideSticky={hideSticky} />
      <Hero onPlanClick={scrollToForm} />
      <WhoWeAre />
      <HowWeHelp />
      <Countries />
      <HowItWorks />
      {/* <Pricing onPlanClick={scrollToForm} /> */}
      <Testimonials />
      <ContactForm />
      <StickyCTA onPlanClick={scrollToForm} hideSticky={hideSticky} />
      
      <footer style={{ 
        padding: '32px 20px', 
        textAlign: 'center', 
        fontSize: '0.9rem',
        color: 'var(--color-text-secondary)',
        borderTop: '1px solid #f1f5f9'
      }}>
        © {new Date().getFullYear()} Make Travel Easy. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
