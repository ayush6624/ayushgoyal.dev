export type GraphColor = 'red' | 'blue' | 'green' | 'violet' | 'orange' | 'slategray' | 'cyan';

export interface Wakatime {
  total_time: string;
  total_time_others: string;
  languages: { [key: string]: string };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface WakatimeStats {
  name: string;
  minutes: number;
  time: string;
}

const codeStat = (data: Wakatime) => {
  let stats: WakatimeStats[] = [];
  let lang = data.languages;
  Object.entries(lang).forEach(([key, val]) => {
    const time: string[] = val.split(' ');
    let hour: number = 0;
    let min: number = 0;
    if (time.length == 2) {
      time[1].includes('hr') ? (min += 60 * parseInt(time[0])) : (min += parseInt(time[0]));
    } else {
      hour += parseInt(time[0]);
      min += parseInt(time[2]);
    }
    min += hour * 60;
    stats.push({ name: key, minutes: min, time: val });
  });

  // Return top 7 languages
  stats = stats.slice(0, 7);
  const colors: GraphColor[] = ['red', 'blue', 'green', 'violet', 'orange', 'slategray', 'cyan'];

  return {
    stats,
    colors,
  };
};

export default codeStat;
