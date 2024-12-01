import React from 'react';

function Button({ children, onClick }) {
  return (
    <div onClick={onClick} className="app-button">
      {children}
    </div>
  );
}

export default Button;
