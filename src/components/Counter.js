'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="border border-gray-600 p-4 rounded-lg bg-gray-900 text-white my-4 space-y-3">
      {isVisible && <p className="text-lg font-medium">Aktualna wartość: {count}</p>}

      <div className="flex gap-2">
        <button 
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white font-medium"
          onClick={() => setCount(count + step)}
        >
          Zwiększ o {step}
        </button>
        <button 
          className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-white font-medium"
          onClick={() => setCount(count - step)}
        >
          Zmniejsz o {step}
        </button>
      </div>

      <label className="flex items-center gap-2">
        Krok:
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="bg-gray-800 border border-gray-600 px-2 py-1 rounded text-white w-20 focus:outline-none focus:border-blue-500"
        />
      </label>

      <div>
        <button 
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded text-sm text-white"
          onClick={() => setIsVisible(!isVisible)}
        >
          Pokaż/ukryj licznik
        </button>
      </div>
    </div>
  );
}