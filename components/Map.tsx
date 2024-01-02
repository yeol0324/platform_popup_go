'use client';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import { NaverMap, NaverMapMarker, NaverMapInfoWindow, Coordinates } from '@/types/map';
import Box from './Box';
type Props = {
  mapId?: string;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};
// TODO: 네이버 로고
export const Map = ({ mapId = 'map', initialZoom = 14, onLoad }: Props) => {
  const mapRef = useRef<NaverMap | null>(null);
  const markerRef = useRef<NaverMapMarker[]>([]);
  const infoWindowRef = useRef<NaverMapInfoWindow[]>([]);

  const getCoords = async () => {
    if (typeof window == 'undefined') return null;
    const pos: GeolocationPosition = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return pos;
  };
  const initializeMap = () => {
    getCoords().then(pos => {
      if (pos === null) return;
      const mapOptions = {
        center: new window.naver.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        zoom: initialZoom,
        minZoom: 10,
        scaleControl: false,
        mapDataControl: false,
        zoomControl: false,
      };
      const popups = [
        { lat: pos.coords.latitude, long: pos.coords.longitude, name: '현재위치', id: 'd0101' },
        { lat: 37.51257481796187, long: 127.10554161154047, name: '롯데월드', id: 'd0102' },
      ];
      //새로운 네이버 맵 인스턴스 생성
      const map = new window.naver.maps.Map(mapId, mapOptions);

      popups.map((item: { lat: number; long: number; name: string; id: string }) => {
        markerRef.current.push(
          new naver.maps.Marker({
            position: new naver.maps.LatLng(item?.lat, item?.long),
            map: map,
            title: item.name,
          })
        );
        const infoWindow = new naver.maps.InfoWindow({
          content: `<div key=${item.id}>${item.name}<a href="/popup/${item.id}">상세페이지</a></div>`,
        });
        infoWindowRef.current.push(infoWindow);
      });
      function getClickHandler(seq: number) {
        return function (e: NaverMapMarker) {
          var marker = markerRef.current[seq];
          if (infoWindowRef.current[seq].getMap()) {
            infoWindowRef.current[seq].close();
          } else {
            infoWindowRef.current[seq].open(map, marker);
          }
        };
      }
      // add marker click event
      markerRef.current.forEach((element, i) => {
        naver.maps.Event.addListener(element, 'click', getClickHandler(i));
      });

      mapRef.current = map;

      if (onLoad) {
        onLoad(map);
      }
    });
  }; //맵이 unmount되었을 때 맵 인스턴스 destory하기
  //

  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <div id={mapId} style={{ width: '100%', height: '100%' }} />
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_CLIENT_ID}`}
        onReady={initializeMap}
      />
    </>
  );
};
