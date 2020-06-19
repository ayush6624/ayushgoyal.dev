import React from 'react';
import { Text } from '@zeit-ui/react';
import Center from '../components/Center';
import api from '../components/fetcher';
import codeStat from '../lib/codeStat';
import TimeGraph from '../components/TimeGraph';

const About = (data) => {
  const { stats, colors } = codeStat(data);
  return (
    <>
      <Center>
        <Text h1>About</Text>
        <TimeGraph stats={stats} colors={colors} />
      </Center>
    </>
  );
};

export const getStaticProps = async () => {
  const {
    data: { data },
  } = await api.get('/wakatime');

  return {
    props: data[0],
    unstable_revalidate: 1800,
  };
};

export default About;
