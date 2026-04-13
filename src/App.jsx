import React, { useState, Component } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { Analytics } from "@vercel/analytics/react";

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) { return { hasError: true }; }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#050505] text-[#c5a358] p-6 text-center">
          <div>
            <h2 className="text-xl font-serif-stylish italic mb-4">Something went wrong.</h2>
            <button onClick={() => window.location.reload()} className="border border-[#c5a358] px-6 py-2 text-[10px] tracking-widest uppercase">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <ErrorBoundary>
      <div className={`${isDark ? 'bg-[#050505] text-white' : 'bg-[#fcfcfc] text-black'} transition-colors duration-500`}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        {/* Main content starts with top safe area for iOS */}
        <main className="pt-safe">
          <Profile isDark={isDark} />
        </main>
        <Analytics />
      </div>
    </ErrorBoundary>
  );
};

export default App;