import { ChartProvider, ArcSeries, Tooltip, Arc } from 'rough-charts';

const TimeGraph = ({ stats, colors }) => {
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
