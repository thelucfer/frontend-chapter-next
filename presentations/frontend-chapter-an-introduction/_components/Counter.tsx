'use client';

import { useEffect, useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 150);

    return () => clearInterval(interval);
  });

  return (
    <div
      style={{
        fontSize: '3rem',
        color: 'white',
        borderRadius: '1rem',
        paddingTop: '1rem',
      }}
    >
      {count}
    </div>
  );
};
