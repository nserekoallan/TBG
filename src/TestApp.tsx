import React from 'react';

const TestApp = () => {
  React.useEffect(() => {
    console.log('TestApp mounted!');
    console.log('Current location:', window.location.href);
  }, []);

  return (
    <div style={{ padding: '20px', background: 'purple', color: 'white', minHeight: '100vh' }}>
      <h1>TEST: Timothy Bulumba - Build Back Better</h1>
      <p>If you can see this purple background, React is working!</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default TestApp;