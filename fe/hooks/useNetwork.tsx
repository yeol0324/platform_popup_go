'use client';
import { useState, useEffect, EventHandler } from 'react';

export const useNetwork = (onChange: any) => {
  // navigator 객체로부터 온라인 여부를 받아옴
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  // 온라인 여부가 바뀔 때마다 실행되는 핸들러 함수
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setIsOnline(navigator.onLine);
  };
  useEffect(() => {
    // 온라인, 오프라인일 때 모두 업데이트
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);
  // 온라인 여부 반환
  return isOnline;
};
