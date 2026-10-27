'use client';

import { useState } from 'react';
import CounterDisplay from './CounterDisplay';
import CounterButtons from './CounterButtons';

export default function CounterDashboard() {
  const [count, setCount] = useState(0);

  return (
    <div className="border border-gray-600 p-4 rounded-lg bg-gray-900 text-white my-4 space-y-3">
      <CounterDisplay count={count} />
      <CounterButtons count={count} setCount={setCount} />
    </div>
  );
}