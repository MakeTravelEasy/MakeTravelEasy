import React, { useState } from 'react';
import Button from './ui/Button';

const ContactForm = () => {
  const initialFormData = {
    fullName: '',
    email: '',
    countryCode: '+91', // Default
    phoneNumber: '', 
    // travelType removed
    visaStatus: 'No',
    destination: '',
    startDate: '', 
    endDate: '',   
    adults: '2',
    kids: '0',
    budget: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  // Get today's date for validation
  const today = new Date().toISOString().split('T')[0];

  const validate = (name, value) => {
    let error = '';
    
    if (name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value)) {
        error = 'Please enter a valid email (e.g., name@gmail.com)';
      }
    }
    
    if (name === 'phoneNumber') {
       if (value.length < 5) {
         error = 'Phone number is too short';
       }
    }

    if (name === 'countryCode') {
        if (!value.startsWith('+')) {
            error = 'Code must start with +';
        }
    }

    if (name === 'startDate') {
      if (value && value < today) {
        error = 'Date cannot be in the past';
      }
    }

    if (name === 'endDate') {
      if (value && value < today) {
        error = 'Date cannot be in the past';
      } else if (value && formData.startDate && value < formData.startDate) {
        error = 'End date cannot be before start date';
      }
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };
    
  const handleChange = (e) => {
    const { name, value } = e.target;

    // RESTRICTION LOGIC START
    // 1. Phone Logic
    if (name === 'phoneNumber') {
      const numericValue = value.replace(/[^0-9\s]/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
      validate(name, numericValue);
      return;
    }

    if (name === 'countryCode') {
        const codeValue = value.replace(/[^0-9+]/g, '');
        setFormData(prev => ({ ...prev, [name]: codeValue }));
        validate(name, codeValue);
        return;
    }

    // 2. Full Name: Allow only letters, spaces, and dots
    if (name === 'fullName') {
      const textValue = value.replace(/[^a-zA-Z\s.]/g, '');
      setFormData(prev => ({ ...prev, [name]: textValue }));
      return;
    }

    // 4. Destination: Letters, spaces, commas, dots, hyphens
    if (name === 'destination') {
      const destValue = value.replace(/[^a-zA-Z0-9\s,.-]/g, '');
      setFormData(prev => ({ ...prev, [name]: destValue }));
      return;
    }

    // 6. Budget: Numbers, commas, dots, hyphens, currency symbols (₹, $, £, €) and letters (k, L)
    if (name === 'budget') {
      const budgetValue = value.replace(/[^0-9\s.,\-\u20B9$£€kLc]/g, '');
      setFormData(prev => ({ ...prev, [name]: budgetValue }));
      return;
    }
    // RESTRICTION LOGIC END

    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change for email/phone/dates to give immediate feedback
    if (name === 'email' || name === 'startDate' || name === 'endDate') {
        validate(name, value);
    }
  };

  // Helper for error style
  const errorStyle = { color: '#ef4444', fontSize: '0.85rem', marginTop: '-4px', marginBottom: '12px' };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final validation check before submit
    const emailValid = validate('email', formData.email);
    const phoneValid = validate('phoneNumber', formData.phoneNumber);
    const codeValid = validate('countryCode', formData.countryCode);
    const startDateValid = validate('startDate', formData.startDate);
    const endDateValid = validate('endDate', formData.endDate);
    
    // Check for any errors or missing required fields
    const hasErrors = !!errors.email || !!errors.phoneNumber || !!errors.countryCode || !!errors.startDate || !!errors.endDate;
    const missingRequired = !formData.email || !formData.phoneNumber || !formData.countryCode;

    if (hasErrors || missingRequired) {
      // Force validation display
      if (!formData.email) validate('email', '');
      if (!formData.phoneNumber) validate('phoneNumber', '');
      if (!formData.countryCode) validate('countryCode', '');
      
      // Scroll to the top of the form so user sees the errors
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setStatus('submitting');
    
    // REPLACE WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtI1lYwiu2ASgUzz9ZIgcsQKzcJtuwSb8Yf9DiLPUPe2LGSw6n5rpHCg_3exf0dSQ/exec';

    try {
      const data = new FormData();
      
      // Map frontend state to Google Sheet headers
      data.append('Name', formData.fullName);
      data.append('Email', formData.email);
      
      // Combine Country Code and Phone Number
      const fullWhatsApp = `${formData.countryCode} ${formData.phoneNumber}`;
      data.append('Whatsapp', fullWhatsApp); 
      
      // Travel Type field removed
      data.append('Visa Status', formData.visaStatus);
      data.append('Destination', formData.destination);
      data.append('Adults', formData.adults);
      data.append('Kids', formData.kids);
      data.append('Budget', formData.budget);
      data.append('Message', formData.message);
      
      // Combine dates for the 'Dates' column in sheet
      const combinedDates = `${formData.startDate || 'Not set'} to ${formData.endDate || 'Not set'}`;
      data.append('Dates', combinedDates);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      });


      setStatus('success');
      setFormData(initialFormData);
      console.log('Form Submitted');

    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact-form" style={{ padding: '60px 20px', backgroundColor: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '40px', 
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>Thank you!</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
              We'll personally review your details and get back to you soon.
            </p>
            <Button onClick={() => setStatus('idle')} variant="outline">
              Send Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff', // Force white background for mobile
    color: '#1e293b', // Ensure dark text color
    fontSize: '1rem',
    fontFamily: 'inherit',
    marginBottom: '8px',
    outline: 'none',
    transition: 'border-color 0.2s',
    WebkitAppearance: 'none', // Reset iOS native styling
    appearance: 'none',
    opacity: 1, // Ensure full opacity on iOS
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
    backgroundPosition: 'right 1rem center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1.5em 1.5em',
    paddingRight: '2.5rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 500,
    fontSize: '0.9rem',
    color: 'var(--color-text-primary)'
  };

  return (
    <section id="contact-form" style={{ padding: '60px 20px', backgroundColor: '#F8FAFC' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ marginBottom: '8px' }}>Start Your Journey</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Share your travel details, and we'll help you plan the perfect trip.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          style={{ 
            backgroundColor: 'white', 
            padding: '32px', 
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          
          <div>
            <label htmlFor="fullName" style={labelStyle}>Full Name</label>
            <input 
              required
              type="text" 
              id="fullName" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '16px' }}></div>

          <div>
            <label htmlFor="email" style={labelStyle}>Email Address</label>
            <input 
              required
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => validate('email', formData.email)}
              placeholder="rahul@example.com"
              style={{...inputStyle, borderColor: errors.email ? '#ef4444' : '#cbd5e1'}}
            />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
            {!errors.email && <div style={{ marginBottom: '16px' }}></div>}
          </div>

          <div>
            <label style={labelStyle}>WhatsApp Number</label>
            <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '85px', flexShrink: 0 }}>
                     <select 
                        required
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        style={{...inputStyle, paddingRight: '8px', cursor: 'pointer'}}
                    >
                        <option value="+91">IN +91</option>
                        <option value="+1">US +1</option>
                        <option value="+44">UK +44</option>
                        <option value="+971">AE +971</option>
                        <option value="+65">SG +65</option>
                        <option value="+60">MY +60</option>
                        <option value="+61">AU +61</option>
                        <option value="+1">CA +1</option>
                        <option value="+49">DE +49</option>
                        <option value="+33">FR +33</option>
                        <option value="+966">SA +966</option>
                        <option value="+965">KW +965</option>
                        <option value="+974">QA +974</option>
                    </select>
                </div>
                <div style={{ flex: 1 }}>
                    <input 
                        required
                        type="tel" 
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onBlur={() => validate('phoneNumber', formData.phoneNumber)}
                        placeholder="98765 43210"
                        style={{...inputStyle, borderColor: errors.phoneNumber ? '#ef4444' : '#cbd5e1'}}
                    />
                </div>
            </div>
            
            {errors.countryCode && <div style={errorStyle}>{errors.countryCode}</div>}
            {errors.phoneNumber && <div style={errorStyle}>{errors.phoneNumber}</div>}
             {!errors.phoneNumber && !errors.countryCode && <div style={{ marginBottom: '16px' }}></div>}
          </div>

          <div style={{ marginBottom: '16px' }}>
              <label htmlFor="visaStatus" style={labelStyle}>Got Schengen/UK Visa?</label>
              <select 
                id="visaStatus" 
                name="visaStatus"
                value={formData.visaStatus}
                onChange={handleChange}
                style={selectStyle}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="adults" style={labelStyle}>Adults</label>
              <input 
                type="number" 
                id="adults" 
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                placeholder="2"
                min="1"
                style={inputStyle}
              />
            </div>
            
            <div style={{ flex: 1 }}>
              <label htmlFor="kids" style={labelStyle}>Kids</label>
              <input 
                type="number" 
                id="kids" 
                name="kids"
                value={formData.kids}
                onChange={handleChange}
                placeholder="0"
                min="0"
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label htmlFor="destination" style={labelStyle}>Destination(s)</label>
            <input 
              required
              type="text" 
              id="destination" 
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. Italy, Switzerland, or Not decided"
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '16px' }}></div>

          <div>
            <label style={labelStyle}>Travel Dates</label>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 140px' }}>
                 <label htmlFor="startDate" style={{...labelStyle, fontSize: '0.8rem', color: '#64748b'}}>From</label>
                 <input 
                  type="date" 
                  id="startDate" 
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  min={today} 
                  onClick={(e) => e.target.showPicker && e.target.showPicker()}
                  style={{...inputStyle, borderColor: errors.startDate ? '#ef4444' : '#cbd5e1'}}
                />
                {errors.startDate && <div style={errorStyle}>{errors.startDate}</div>}
              </div>
              <div style={{ flex: '1 1 140px' }}>
                <label htmlFor="endDate" style={{...labelStyle, fontSize: '0.8rem', color: '#64748b'}}>To</label>
                <input 
                  type="date" 
                  id="endDate" 
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  min={formData.startDate || today} 
                  onClick={(e) => e.target.showPicker && e.target.showPicker()}
                  style={{...inputStyle, borderColor: errors.endDate ? '#ef4444' : '#cbd5e1'}}
                />
                 {errors.endDate && <div style={errorStyle}>{errors.endDate}</div>}
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '16px' }}></div>

          <div>
            <label htmlFor="budget" style={labelStyle}>Budget Range (Optional)</label>
            <input 
              type="text" 
              id="budget" 
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g. ₹2-3 Lakhs"
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '16px' }}></div>

          <div>
            <label htmlFor="message" style={labelStyle}>Message / Special Requests</label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you need help with..."
              rows="4"
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}></div>

          {status === 'error' && (
            <div style={{ color: '#ef4444', textAlign: 'center', marginBottom: '12px' }}>
              Something went wrong. Please try again later.
            </div>
          )}
          
          {(!!errors.email || !!errors.phoneNumber || !!errors.countryCode || !!errors.startDate || !!errors.endDate) && (
             <div style={{ color: '#ef4444', textAlign: 'center', marginBottom: '12px', fontSize: '0.9rem' }}>
              Please fix the errors above before submitting.
            </div>
          )}

          <Button 
            fullWidth 
            type="submit" 
            disabled={status === 'submitting' || !!errors.email || !!errors.phoneNumber || !!errors.countryCode || !!errors.startDate || !!errors.endDate}
          >
            {status === 'submitting' ? 'Sending...' : 'Get Travel Guidance'}
          </Button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;
