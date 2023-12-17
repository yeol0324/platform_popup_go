// import './page.scss';
// import ClientPage from './page.client';
import { Suspense } from 'react';
import Image from 'next/image';
import Spinner from '@/components/Loading/Loading';
import { Map } from '@/components/Map';
export default function List() {
  return (
    <div className="map-home">
      <Suspense fallback={<Spinner />}></Suspense>
      <Map></Map>
    </div>
  );
}
