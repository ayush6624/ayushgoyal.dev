import React from 'react';
import { Text, Loading } from '@zeit-ui/react';
import Center from '../components/Center';
import codeStat from '../lib/codeStat';
import TimeGraph from '../components/TimeGraph';
import getTimeStats from '../lib/codeTimeFetch';

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
        <Text h1>About</Text>
        <TimeGraph stats={stats} colors={colors} />
      </Center>
    </>
  );
};

export default About;
