import { ChartProvider, ArcSeries, Tooltip, Arc } from 'rough-charts';
import { Loading } from '@geist-ui/react';
import getTimeStats from '../lib/codeTimeFetch';
import codeStat from '../lib/codeStat';

const TimeGraph = () => {
  const { data, isLoading, isError } = getTimeStats();
  if (isLoading) return <Loading size="large" />;
  if (isError)
    return (
      <Loading type="error" size="large">
        Error
      </Loading>
    );
  const { stats, colors } = codeStat(data.data.data[0]);
  return (
    <ChartProvider height={400} data={stats} margin={{ top: 30, left: 0 }}>
      <ArcSeries dataKey="minutes" innerRadiusPercent={0.4}>
        {(item, itemProps, index) => <Arc key={index} {...itemProps} options={{ fill: colors[index % colors.length], fillStyle: 'hachure', roughness: 2, strokeWidth: 2 }} />}
      </ArcSeries>
      <Tooltip>{({ name, time }) => `${name} ${time}`}</Tooltip>
    </ChartProvider>
  );
};

export default TimeGraph;
