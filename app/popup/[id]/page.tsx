import { getAllPopups } from '@/servieces/popups';
import { PopupData } from '@/types/popup';

export default async function PopupDetail({ params }: { params: { id: string } }) {
  // PopupData
  const { data, error } = await getAllPopups();
  console.log(data);

  return (
    <div>
      {params.id}
      {data &&
        data?.map(d => {
          return <div>{d.id}</div>;
        })}
    </div>
  );
}
