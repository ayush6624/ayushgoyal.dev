import React from 'react';
import { Text } from '@geist-ui/react';
import Center from '../components/Center';
import TimeGraph from '../components/TimeGraph';
import Internet from '../components/Internet';

const About = () => {
  return (
    <>
      <Center>
        <Text h2>Stats</Text>
        <TimeGraph />
        <Internet />
      </Center>
    </>
  );
};

export default About;
