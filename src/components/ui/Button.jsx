import React from 'react';

const Button = ({ children, variant = 'primary', onClick, fullWidth = false, className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[var(--color-primary)] text-white hover:opacity-90 focus:ring-[var(--color-primary)]',
    secondary: 'bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-opacity-80 focus:ring-[var(--color-secondary)]',
    outline: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)] focus:ring-[var(--color-primary)]',
    text: 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)] underline-offset-4 hover:underline px-0',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const styleMap = {
     // ... (styleMap content) ...
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'var(--color-secondary)',
      color: 'var(--color-primary)',
    },
    outline: {
      border: '2px solid var(--color-primary)',
      color: 'var(--color-primary)',
      background: 'transparent'
    },
    text: {
      background: 'transparent',
      color: 'var(--color-text-primary)',
      padding: 0
    }
  };

  const isDisabled = props.disabled;

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      style={{
        ...styleMap[variant],
        padding: variant === 'text' ? '0' : '12px 24px',
        borderRadius: '8px',
        fontWeight: 600,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        fontSize: '1rem',
        border: variant === 'outline' ? '2px solid var(--color-primary)' : 'none',
        width: fullWidth ? '100%' : 'auto',
        opacity: isDisabled ? 0.6 : 1,
        ...props.style // Allow overriding
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
