'use client';
// import { ReactEventHandler } from 'react';
import { useRef, useEffect } from 'react';
// Click 이벤트를 Hooks로 만들어 여러 요소 중 특정 요소에 클릭 이벤트
export const useClick = (onClickEvent: () => void) => {
  // onClickEvent가 함수인지 판별

  const element = useRef<HTMLElement>();
  // 각 요소들을 개별로 관리하기 위해 useRef Hooks를 사용

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClickEvent);
    }
    // ComponentDidMount로 요소에 클릭 이벤트 부여
    return () => {
      element.current!.removeEventListener('click', onClickEvent);
    };
    // ComponentWillUnMount로 요소에 클릭 이벤트 제거
  }, [onClickEvent]);

  return element;
};
