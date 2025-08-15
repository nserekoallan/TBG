import React from 'react';

const SimpleTestPage = () => {
  return (
    <div style={{ padding: '20px', background: '#1a1a1a', color: 'white', minHeight: '100vh' }}>
      <h1>Timothy Bulumba - Build Back Better</h1>
      <p>If you can see this, React is working!</p>
      <p>Current URL: {window.location.href}</p>
      <p>Base path test: The app should be at /TBG/</p>
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => alert('JavaScript is working!')}
          style={{ padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Test JavaScript
        </button>
      </div>
    </div>
  );
};

export default SimpleTestPage;