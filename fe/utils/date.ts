const dateUtil = {
  timeFormatt: (time: any) => {
    if (!time) return;
    // const t = Number(time)
    if (typeof time !== 'number') return;
    const h = Math.floor(time / 60);
    const m = time % 60;
    if (h > 0) return `${h}시간 ${m}분`;
    return `${m}분`;
  },
  anteTimeFormatt: (time: any) => {
    if (!time) return;
    const [h, m, s] = time.split(':');
    const numHour = Number(h);
    if (numHour == 12) {
      return `오후 ${numHour} : ${m}`;
    }
    if (numHour >= 12) {
      return `오후 ${numHour % 12} : ${m}`;
    }
    return `오전 ${numHour} : ${m}`;
  },
  getCurrentTime: () => {
    const time = new Date().getTime() / 1000;
    return time;
  },
};

export default dateUtil;
