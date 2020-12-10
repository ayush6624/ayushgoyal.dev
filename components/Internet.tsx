import { Capacity, Loading, Grid, Text, Badge, Spacer } from '@geist-ui/react';
import ispDataUsage from '../lib/ispDataUsage';
import SpeedTestPublic from './SpeedTestPublic';

export interface DataUsage {
  data: Data;
  days_left: string;
}

export interface Data {
  used_data: string;
  tot_data: string;
}

const Internet = () => {
  const { data, isError, isLoading } = ispDataUsage();
  if (isLoading) return <Loading />;
  if (isError) return <Loading type="error">Error</Loading>;
  const used: Data = data.data;
  const value: number = (parseFloat(used.used_data) / parseFloat(used.tot_data)) * 100;
  return (
    <Grid.Container gap={2} justify="center" alignItems="center" direction="column">
      <Grid>
        <Text h3>My Internet 💻</Text>
      </Grid>
      <SpeedTestPublic />
      <Grid>
        <Capacity value={value} style={{ width: '20vw' }} />
      </Grid>
      <Grid.Container justify="center" gap={2} direction="row">
        <Grid>
          <Badge type="success">{used.used_data} GB</Badge>
        </Grid>
        <Grid>
          <Badge type="secondary">{data.days_left} Days</Badge>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};
export default Internet;
