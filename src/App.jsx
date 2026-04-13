// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? 'bg-[#050505]' : 'bg-[#fcfcfc]'}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Profile isDark={isDark} />
    </div>
  );
};

// CRITICAL: This line must match your import in main.jsx
export default App;