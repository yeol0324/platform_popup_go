import { Map } from '@/components/Map/Map';
import { getAllPopups } from '@/servieces/popups';

export default async function List() {
  const { data, error } = await getAllPopups();

  return (
    <div className="map-home" style={{ width: '100%', height: ' 100%' }}>
      {data && <Map data={data} />}
    </div>
  );
}
