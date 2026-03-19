import React from 'react';
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
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header />
      <Hero onPlanClick={scrollToForm} />
      <WhoWeAre />
      <HowWeHelp />
      <Countries />
      <HowItWorks />
      <Pricing onPlanClick={scrollToForm} />
      <Testimonials />
      <ContactForm />
      <StickyCTA onPlanClick={scrollToForm} />
      
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
