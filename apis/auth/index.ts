import axios from '@/utils/axios';
import { APIResponse, refreshToken, aramToken, aramProd, childToken } from '../index';
export const AUTH = {
  getRefreshToken: async () =>
    await axios.get<APIResponse<refreshToken>>('/v2/authenticate/token/issue', {
      params: {
        childId: localStorage.getItem('childId'),
      },
      headers: {
        'X-DEVICE-INFO': localStorage.getItem('xDeviceInfo'),
      },
    }),
  getAramAuth: async (id: string, pw: string) =>
    await axios.post<APIResponse<aramToken>>('https://api.arambookclub.com/auth/login', {
      userLoginId: id,
      userPassword: pw,
    }),
  getAramProd: async (token: string) =>
    await axios.get<APIResponse<aramProd[]>>('https://api.arambookclub.com/learning/management/product', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getAramChildAuth: async (token: string, lrngMemSeqno: number, pckgProdId: string, prodId: string) =>
    await axios.get<APIResponse<childToken>>('https://api.arambookclub.com/auth/child/token', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { lrngMemSeqno, pckgProdId, prodId },
    }),
};
