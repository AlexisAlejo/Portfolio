import React from 'react';

const ScrollDown: React.FC<{ target?: string }> = ({ target = '#next' }) => {
  return (
    <a href={target} aria-label="Scroll down" className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="scroll-indicator">
        <svg className="chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
  );
};

export default ScrollDown;
