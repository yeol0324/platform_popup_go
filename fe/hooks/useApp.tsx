'use client';
//유니티 & 안드로이드 연동
import { useState, useEffect, useCallback } from 'react';

export const useApp = () => {
  const [windowState, setWindowState] = useState(false);
  const [connectBool, setConnectBool] = useState(false);
  useEffect(() => {
    setWindowState(true);
  }, []);
  if (!windowState) return;

  // 안드로이드
  const playerState = (code: string) => {
    if (code == 'pause') {
      document.querySelector('video')?.pause();
      document.querySelector('audio')?.pause();
      return;
    }
    if (code == 'play') {
      document.querySelector('video')?.play();
      document.querySelector('audio')?.play();
      return;
    }
  };

  // 유니티 (정보)
  const setDeviceInfo = (jsonString: any) => {
    localStorage.setItem('childName', jsonString.childName);
    localStorage.setItem('token', jsonString.token);
    localStorage.setItem('refreshToken', jsonString.refreshToken);
    localStorage.setItem('childId', jsonString.childId);
    localStorage.setItem('xDeviceInfo', jsonString.xDeviceInfo);
    if (
      localStorage.getItem('childName') &&
      localStorage.getItem('token') &&
      localStorage.getItem('refreshToken') &&
      localStorage.getItem('childId') &&
      localStorage.getItem('xDeviceInfo')
    ) {
      setConnectBool(true);
    } else {
      setConnectBool(false);
    }
  };

  // 유니티 (퀘스트)
  const setContentInfo = (jsonString: any) => {
    localStorage.setItem('contsId', jsonString.contsId);
    localStorage.setItem('contsNm', jsonString.contsNm);
    localStorage.setItem('contsUrl', jsonString.contsUrl);
    if (localStorage.getItem('contsId') && localStorage.getItem('contsNm') && localStorage.getItem('contsUrl')) {
      setConnectBool(true);
    } else {
      setConnectBool(false);
    }
  };

  return connectBool;
};
