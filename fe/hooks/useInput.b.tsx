'use client';
// import { useState, useCallback, SetStateAction, Dispatch } from 'react';

// type ReturnType<T> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

// const useInput = <T extends string>(initialValue: T): ReturnType<T> => {
//   const [value, setValue] = useState<T>(initialValue);
//   const handler = useCallback((e: any) => {
//     setValue(e.target.value);
//   }, []);
//   return [value, handler, setValue];
// };

// export default useInput;
//----
// import { useState, useCallback } from 'react';

// function useInput(initialInput: any) {
//   const [input, setInput] = useState(initialInput);
//   const onChange = useCallback((e: any) => {
//     const { name, value } = e.target;
//     setInput((input: any) => ({ ...input, [name]: value }));
//   }, []);
//   const reset = useCallback(() => setInput(initialInput), [initialInput]);
//   return [input, onChange, reset];
// }

// export { useInput };
//----
// import { useState } from 'react';
// export function useInput(initialValue) {
//   const [inputValue, setInputValue] = useState(initialValue);

//   const handleChange = e => {
//     console.log(e);

//     setInputValue(e.target.value);
//   };
//   return [inputValue, handleChange];
// }
// //------
// import { useState } from 'react';

// const useInput = defaultValue => {
//   const [value, setValue] = useState(defaultValue);
//   const onChange = e => {
//     const { value } = { ...e.target };
//     setValue(value);
//   };

//   return { value, onChange };
// };
