import axios from '@/utils/axios';
import { APIResponse, Category, CategoryDetail, ContentList } from '../index';
export const content = {
  getCategory: async (catgryCd: string) =>
    await axios.get<APIResponse<Category>>(`/v2/contents/catgry/list`, {
      params: { catgryCd },
    }),
  getContentList: async (catgryCd: string) =>
    await axios.get<APIResponse<ContentList>>(`/v2/contents/list`, {
      params: { catgryCd },
    }),
  getRandomContents: async (topCatgryCd: string, catgryCd: string, pageNo?: number, pageRow?: number) =>
    await axios.get<APIResponse<ContentList>>(`/v2/contents/random`, {
      params: { topCatgryCd, catgryCd, pageNo, pageRow },
    }),
  saveIas: async (contsId: string, stdLtm: number, contsLtm: number, questTp: string, stdTp: string) => {
    await axios.post<APIResponse<string>>(`/v2/ias/insert`, {
      contsId,
      stdLtm,
      contsLtm,
      questTp,
      stdTp,
    });
  },
  // 뮤직 박스 API
  getMusicBoxBtn: async () => await axios.get(`/v2/study/student/subjects?stdyStp=S1`),
  // 음악 리스트 호출 API
  getMusicList: async (stdyStp: string, subjectId: string, pageNo: number, pageRow: number) =>
    await axios.get(`/v2/study/student/options`, {
      params: { stdyStp: stdyStp, subjectId: subjectId, pageNo: pageNo, pageRow: pageRow },
    }),
  getCategoryDetail: async (category: string) =>
    await axios.get<APIResponse<CategoryDetail>>(`/v2/library/student/category/${category}/list`),
};
