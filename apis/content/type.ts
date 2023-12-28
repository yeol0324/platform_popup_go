export interface Category {
  catgryCd: string;
  catgryList: {
    catgryCd: string;
    catgryOrds: number;
    catgryNm: string;
    catgryThumbUrl: string;
    subCatgryList: SubCategory[];
  }[];
  catgryNm: string;
  catgryThumbUrl: string;
}
export interface SubCategory {
  aniSongTp: string;
  catgryCd: string;
  catgryNm: string;
  catgryOrds: number;
  catgryThumbUrl: string;
  upCatgryCd: string;
}
export interface CategoryDetail {
  catgryList: {
    catgryTp: string;
    catgryCd: string;
    catgryOrds: number;
    catgryNm: string;
    catgryThumbUrl: string;
    subCatgryList: {
      catgryTp: string;
      catgryCd: string;
      catgryOrds: number;
      catgryNm: string;
      catgryThumbUrl: string;
      contentsList?: ContentList;
    }[];
  }[];
}
export interface ContentList {
  contentsList: Content[];
}
export interface Content {
  aniSongTp: string;
  catgryCd: string;
  catgryNm: string;
  contsId: string;
  contsNm: string;
  contsUrl: string;
  rnum: number;
  thumbUrl: string;
}
