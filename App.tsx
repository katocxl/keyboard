import React from 'react';
import Keyboard from './components/Keyboard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Keyboard />
    </div>
  );
};

export default App;