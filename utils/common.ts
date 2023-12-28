const commonUtil = {
  /**
   * 랜덤 숫자 반환
   * params min: number, max: number
   */
  getRandom: (min: number, max: number, exc?: number) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    if (exc) {
      while (random === exc) {
        random = Math.floor(Math.random() * (max - min + 1) + min);
      }
      return random;
    } else {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },
};
export default commonUtil;
