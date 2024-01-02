import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostgrestError } from '@supabase/supabase-js';
import { PopupData } from '@/types/popup';

const supabase = createClientComponentClient<any>();
export async function getAllPopups() {
  const { data, error } = await supabase.from('TB_POPUP_STORE').select('*').returns<PopupData[]>();
  return { data, error };
}
export async function getPopup(id: number) {
  const { data, error } = await supabase.from('TB_POPUP_STORE').select('*').eq('id', id).returns<[PopupData]>();
  return { data, error };
}
