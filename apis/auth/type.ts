export interface refreshToken {
  authToken: string;
  refreshToken: string;
}
export interface aramToken {
  existPurchasedDgtlProd: boolean;
  goLrngMngmntPage: boolean;
  pwdChgYn: string;
  userLoginId: string;
  userName: string;
  userToken: string;
}
export interface aramProd {
  chldMemNm: string;
  fstLrngStarDt: string;
  lrngMemSeqno: number;
  lrngPridDay: number;
  lstLrngEndDt: string;
  mappingChildYn: string;
  ordDtlSeqno: 1;
  ordNo: string;
  pckgProdId: string;
  prodId: string;
  prodNm: string;
  prodThumbnail: string;
  remainedLrngPridDay: number;
}
export interface childToken {
  chldToken: string;
}
