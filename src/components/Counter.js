'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f9f9f9', borderRadius: 8 }}>
      <p>Aktualna wartość: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
      >
        Zwiększ
      </button>
      <button 
        onClick={() => setCount(count - 1)}
        style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
      >
        Zmniejsz
      </button>
    </div>
  );
}