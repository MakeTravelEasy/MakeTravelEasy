import React from 'react';

const TestimonialCard = ({ text, author, location }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '16px',
    border: '1px solid #f1f5f9',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    flex: 1,
    minWidth: '300px'
  }}>
    <div style={{ color: 'var(--color-primary)', fontSize: '1.5rem', lineHeight: 1 }}>❝</div>
    <p style={{ 
      flex: 1, 
      color: 'var(--color-text-primary)',
      lineHeight: 1.6,
      fontStyle: 'italic'
    }}>
      {text}
    </p>
    <div>
      <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{author}</div>
      <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{location}</div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      text: "I feel truly lucky to have found them! They planned our entire 10-day Swiss adventure with detailed itineraries and stress-free execution. The service was personal, attentive, and honestly better than expensive agencies.",
      author: "Baanu Mohan",
      location: "Visited Switzerland"
    },
    {
      text: "Ishwarya’s deep knowledge of Europe was a lifesaver. Her tips on local transport and costs helped us navigate Greece and Italy confidently. Simple, honest advice that turned a good trip into an amazing one.",
      author: "Kavithaa Srinivasan",
      location: "Visited Greece & Italy"
    },
    {
      text: "We had a tight schedule covering Finland, Switzerland, and Paris in just six days. They crafted the perfect itinerary and found excellent budget hotels. It was seamless from start to finish—an incredible experience!",
      author: "Arun Prasath",
      location: "Visited Finland, France & Switzerland"
    }
  ];

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
      <div className="container">
        <h2 className="text-center" style={{ marginBottom: '40px' }}>What Travelers Say</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px',
        }}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
