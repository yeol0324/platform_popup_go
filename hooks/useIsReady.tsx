'use client';
import { useState, useEffect } from 'react';

export const useIsReady = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const localData = localStorage.getItem('token');
    if (localData) setReady(true);
  }, []);
  return { ready: ready };
};
