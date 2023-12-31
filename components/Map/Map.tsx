'use client';
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { NaverMap, NaverMapMarker, NaverMapInfoWindow, Coordinates } from '@/types/map';
import { PopupData } from '@/types/popup';

type Props = {
  mapId?: string;
  initialZoom?: number;
  data: PopupData[];
};

// TODO: 네이버 로고
export const Map = ({ mapId = 'map', initialZoom = 14, data }: Props) => {
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
    console.log('실행?');

    //   getCoords().then(pos => {
    // if (pos === null) return;
    // const center =
    //   data.length === 1
    //     ? [Number(data[0].latitude), Number(data[0].longitude)]
    //     : [pos.coords.latitude, pos.coords.longitude];
    const mapOptions = {
      center: new window.naver.maps.LatLng(Number('37.5471777'), Number('127.0483195')),
      zoom: initialZoom,
      minZoom: 10,
      scaleControl: false,
      mapDataControl: false,
      zoomControl: false,
    };
    //새로운 네이버 맵 인스턴스 생성
    const map = new window.naver.maps.Map(mapId, mapOptions);
    data?.map((item: PopupData) => {
      markerRef.current.push(
        new naver.maps.Marker({
          position: new naver.maps.LatLng(Number(item?.latitude), Number(item?.longitude)),
          map: map,
          title: item.popup_name,
        })
      );
      const infoWindow = new naver.maps.InfoWindow({
        content: `<div key=${item.id}>${item.popup_name}<a href="/popup/${item.id}">상세페이지</a></div>`,
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
    // marker click event
    markerRef.current.forEach((element, i) => {
      naver.maps.Event.addListener(element, 'click', getClickHandler(i));
    });

    mapRef.current = map;

    //   });
  };
  //맵이 unmount되었을 때 맵 인스턴스 destory
  useEffect(() => {
    console.log(mapRef.current);
    console.log(mapRef.current === null);

    if (mapRef.current === null) initializeMap();
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
        onLoad={initializeMap}
      />
    </>
  );
};
