import axios from '@/utils/axios';
import { APIResponse } from '../index';
import { SeedListResult } from './type';
export const seed = {
  getSeedListResult: async (rwrdClsTp: string) =>
    await axios.get<APIResponse<SeedListResult>>(`v2/reward/list`, {
      params: { rwrdClsTp },
    }),
};
