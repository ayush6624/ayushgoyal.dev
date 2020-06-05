import { Text, Button, Grid, Link, useMediaQuery } from '@zeit-ui/react';
import Center from '../components/Center';
import { useEffect } from 'react';

const MediaQuery = () => {
  const isXS = useMediaQuery('xs');
  const isSM = useMediaQuery('sm');
  const isMD = useMediaQuery('md');

  const CustomText = ({ size, children }) => {
    return (
      <Text p size={size} style={{ maxWidth: isXS ? '90vw' : isSM ? '75vw' : isMD ? '60vw' : '50vw', textAlign: 'center' }}>
        {children}
      </Text>
    );
  };
  return (
    <div style={{ minHeight: '85vh', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <Grid.Container style={{ minHeight: '80vh' }}>
        <Center>
          <Text h1>Hi,</Text>
        </Center>
        <Center>
          <Text h1>I'm Ayush Goyal.</Text>
        </Center>
        <Center>
          <CustomText size="2em">
            I am a <span style={{ textDecoration: 'underline' }}>software developer</span>, a <span style={{ textDecoration: 'underline' }}>full-time CS student</span>, and a <span style={{ textDecoration: 'underline' }}>ML enthusiast</span>.
          </CustomText>
        </Center>
        <Center>
          <CustomText size="1.5em">Some of my interests include building performant Web Apps, Deep Learning and Computer Vision.</CustomText>
        </Center>
        <Center>
          <CustomText size="1.5em">
            I have experience working with <span style={{ fontStyle: 'italic' }}>Python, NodeJS & React</span>.
          </CustomText>
        </Center>
        <Center>
          <CustomText size="1.2rem">
            You'll find me browsing{' '}
            <Link href="https://twitter.com/ayushg1214" target="_blank" color style={{ textDecoration: 'underline' }}>
              Twitter
            </Link>
            , and playing<Text i> Call of Duty</Text>. Read MediaQuery what I'm learning on my{' '}
            <Link href="https://blog.ayushgoyal.dev" target="_blank" color style={{ textDecoration: 'underline' }}>
              blog
            </Link>
            . It's updated every time I make a breakthrough worth mentioning. I'm currently learning more MediaQuery Software Engineering & Computer Science fundamentals.
          </CustomText>
        </Center>
      </Grid.Container>
    </div>
  );
};

export default MediaQuery;
