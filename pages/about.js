import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Text, Button, Grid, Input } from '@zeit-ui/react';
import { ChartProvider, ArcSeries, Tooltip, Arc } from 'rough-charts';
import Center from '../components/Center';
import api from '../components/fetcher';

const About = ({ data }) => {
  //   useeffect, const temp = api.get('/wakatime').then((_) => _.data);
  //   console.log(temp);
  let data1 = [];
  let lang = data[0].languages;
  Object.entries(lang).forEach(([key, val]) => {
    let time = val.split(' ');
    let hour = 0,
      min = 0;
    if (time.length == 2) {
      min += parseInt(time[0]);
    } else {
      hour += parseInt(time[0]);
      min += parseInt(time[2]);
    }
    min += hour * 60;
    data1.push({ name: key, value1: min, time: val });
  });
  data1 = data1.slice(0, 7);
  let colors = ['red', 'blue', 'green', 'violet', 'orange', 'slategray', 'cyan'];

  return (
    <>
      <Center>
        <h1>About</h1>
        <ChartProvider height={400} data={data1} margin={{ top: 30, left: 0 }}>
          <ArcSeries dataKey="value1" innerRadiusPercent={0.4}>
            {(item, itemProps, index) => <Arc key={index} {...itemProps} options={{ fill: colors[index % colors.length], fillStyle: 'hachure', roughness: 2, strokeWidth: 2 }} />}
          </ArcSeries>
          <Tooltip>{({ name, time }) => `${name} ${time}`}</Tooltip>
        </ChartProvider>
      </Center>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await api.get('/wakatime');
  console.log('getStaticProps');
  return {
    props: data,
    unstable_revalidate: 1800,
  };
};

export default About;
