'use client';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import { NaverMap, NaverMapMarker, Coordinates } from '@/types/map';

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};
export const Map = ({ mapId = 'map', initialCenter = [37.5262411, 126.99289439], initialZoom = 13, onLoad }: Props) => {
  const mapRef = useRef<NaverMap | null>(null);
  const markerRef = useRef<NaverMapMarker | null>(null);

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
        minZoom: 9,
        scaleControl: false,
        mapDataControl: false,
        zoomControl: true,
      };
      //새로운 네이버 맵 인스턴스 생성
      const map = new window.naver.maps.Map(mapId, mapOptions);
      const popups = [
        { lat: pos.coords.latitude, long: pos.coords.longitude },
        { lat: 37.51257481796187, long: 127.10554161154047 },
        { lat: pos.coords.latitude - 3, long: pos.coords.longitude - 3 },
      ];

      popups.map((item: { lat: number; long: number }) => {
        markerRef.current = new naver.maps.Marker({
          position: new naver.maps.LatLng(item?.lat, item?.long),
          map: map,
        });
      });

      // // 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환합니다.
      // function getClickHandler(seq: number) {
      //   return function (e: any) {
      //     console.log(e);

      //     // var marker = markers[seq],
      //     //   infoWindow = infoWindows[seq];

      //     // if (infoWindow.getMap()) {
      //     //   infoWindow.close();
      //     // } else {
      //     //   infoWindow.open(map, marker);
      //     // }
      //   };
      // }

      // markerRef.current.map(marker => naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i)));

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
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} style={{ width: '500px', height: '500px' }} />
    </>
  );
};
