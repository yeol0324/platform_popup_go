// import './page.scss';
// import ClientPage from './page.client';
import { Suspense } from 'react';
import Image from 'next/image';
import Spinner from '@/components/Loading/Loading';
export default function List() {
  return (
    <div className="map-home">
      <Suspense fallback={<Spinner />}></Suspense>
    </div>
  );
}
