import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostgrestError } from '@supabase/supabase-js';

interface State<T> {
  data: T[] | null;
  error: PostgrestError | null;
}
const supabase = createClientComponentClient<any>();

export default function useSupabase<T = unknown>(table: string): State<T> {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);
  async function fetchEvents(tableNm: string) {
    const { data, error } = await supabase.from(table).select();
    if (data && data.length > 0) {
      setData(data);
    } else {
      setError(error);
    }
    return data;
  }
  useEffect(() => {
    fetchEvents(table);
  }, [table]);

  return { data, error };
}
