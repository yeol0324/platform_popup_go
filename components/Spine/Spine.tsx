'use client';
import { SpinePlayer } from '@esotericsoftware/spine-player';
import { useEffect, useRef } from 'react';
export default function Spine() {
  const spineRef = useRef<SpinePlayer | null>(null);

  // const jsonUrl = 'https://esotericsoftware.com/files/examples/4.1/spineboy/export/spineboy-pro.json';
  // const atlasUrl = 'https://esotericsoftware.com/files/examples/4.1/spineboy/export/spineboy-pma.atlas';
  const jsonUrl = `${process.env.NEXT_PUBLIC_BASE_URL}images/spine/sa_root.json`;
  const atlasUrl = `${process.env.NEXT_PUBLIC_BASE_URL}images/spine/sa_root.atlas`;
  const config = {
    jsonUrl: jsonUrl,
    atlasUrl: atlasUrl,
    animation: '02',
    premultipliedAlpha: false,
    alpha: true, // 플레이어 반투명 활성화
    backgroundColor: '#00000000',
    showControls: false,
    preserveDrawingBuffer: false,
  };
  const initSpine = () => {
    spineRef.current = new SpinePlayer('player-container', config);
  };
  useEffect(() => {
    if (typeof window != 'undefined') initSpine();
    return () => {
      spineRef.current?.dispose();
    };
  }, []);
  return <div id="player-container"></div>;
}
