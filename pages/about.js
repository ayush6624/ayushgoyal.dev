import React from 'react';
import { Text, Loading, Grid, Capacity } from '@zeit-ui/react';
import Center from '../components/Center';
import codeStat from '../lib/codeStat';
import TimeGraph from '../components/TimeGraph';
import getTimeStats from '../lib/codeTimeFetch';
import Internet from '../components/Internet';

const About = () => {
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
    <>
      <Center>
        <Text h2>Stats</Text>
        <TimeGraph stats={stats} colors={colors} />
        <Internet />
      </Center>
    </>
  );
};

export default About;
