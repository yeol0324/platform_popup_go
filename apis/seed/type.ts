export interface SeedListResult {
  totalRwrdCnt: number;
  rewardList: {
    questTp: string;
    rwrdTp: string;
    contsNm: string;
    gameNm: string;
    rwrdPnt: number;
    rwrdClsTp: string;
    rwrdIssDtm: string;
  }[];
}
export interface RewardList {
  questTp: string;
  rwrdTp: string;
  contsNm: string;
  gameNm: string;
  rwrdPnt: number;
  rwrdClsTp: string;
  rwrdIssDtm: string;
}
