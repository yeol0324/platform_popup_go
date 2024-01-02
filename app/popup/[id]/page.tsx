import { getAllPopups, getPopup } from '@/servieces/popups';
import { Map } from '@/components/Map';

export default async function PopupDetail({ params }: { params: { id: number } }) {
  const { data, error } = await getPopup(params.id);
  if (data == null) return <div>잘못된 접근입니다</div>;
  return (
    <div>
      <h1>{data[0].popup_name}</h1>
      <h5>{data[0].popup_sdtm + '~' + data[0].popup_edtm}</h5>
      <h5>{data[0].location}</h5>
      <div style={{ width: '100%', height: '400px' }}>
        <Map data={data} />
      </div>
    </div>
  );
}
