'use client';
import React, { useState } from 'react';
type ReturnType = [
  string,
  { value: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void },
  () => void
];
function useInput(initialValue: string): ReturnType {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };
  const bind = {
    value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target?.value);
    },
  };
  return [value, bind, reset];
}

export default useInput;
