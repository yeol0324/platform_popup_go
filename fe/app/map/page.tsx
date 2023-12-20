// import './page.scss';
// import ClientPage from './page.client';
import { Map } from '@/components/Map';

export default async function List() {
  return (
    <div className="map-home">
      <div>
        <Map />
      </div>
    </div>
  );
}
