import { Loading, Grid } from '@zeit-ui/react';
import { DownloadCloud, UploadCloud } from '@zeit-ui/react-icons';
import speedTest from '../lib/speedTest';

const SpeedTestPublic = () => {
  const { data, isError, isLoading } = speedTest();
  if (isLoading) return <Loading />;
  if (isError) return <Loading type="error">Error</Loading>;
  const used: Array<any> = data.data;
  return (
    <Grid.Container justify="center" gap={3}>
      <Grid>
        <DownloadCloud /> 489.12 Mbps
      </Grid>
      <Grid>
        <UploadCloud /> 491.54 Mbps
      </Grid>
    </Grid.Container>
  );
};
export default SpeedTestPublic;
