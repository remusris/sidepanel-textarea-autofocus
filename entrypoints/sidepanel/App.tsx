import { useState, useEffect, useRef } from 'react';
import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <>
      <textarea 
        ref={textareaRef}
        className="card"
        style={{ 
          width: '100%', 
          height: '200px',
          padding: '12px',
          margin: '20px 0'
        }}
        placeholder="Start typing..."
      />      
    </>
  );
}

export default App;
