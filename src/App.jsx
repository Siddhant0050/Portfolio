import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? 'bg-[#050505]' : 'bg-[#fcfcfc]'}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Profile isDark={isDark} />
      <Analytics />
    </div>
  );
};

export default App;