import { Grid, Text, Button, Link, Spacer, Popover, useMediaQuery } from '@zeit-ui/react';
import Center from '../components/Center';

const Home = () => {
  const CustomText = ({ size, children }) => {
    return (
      <Text p size={size} className="text-ayush">
        {children}
      </Text>
    );
  };

  const Underline = ({ children, italic }) => <span style={{ fontStyle: italic ? 'italic' : 'normal', textDecoration: 'underline' }}>{children}</span>;

  return (
    <>
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
              I am a <Underline>software developer</Underline>, a <Underline>full-time IT undergrad</Underline> @DCE, and a <Underline>ML enthusiast</Underline>.
            </CustomText>
          </Center>
          <Center>
            <CustomText size="1.5em">Some of my interests include building performant Web Apps, Deep Learning and Computer Vision.</CustomText>
          </Center>
          <Center>
            <CustomText size="1.5em">
              I have experience working with <Underline italic>Python</Underline>, <Underline italic>NodeJS</Underline>, <Underline italic>React</Underline> & <Underline italic>Tensorflow</Underline>. I'm currently open for SDE Intern Roles.{' '}
              <Link color href="/ayush-resume.pdf" target="_blank">
                Resume
              </Link>
            </CustomText>
          </Center>
          <Center>
            <CustomText size="1.2rem">
              You'll find me browsing{' '}
              <Link href="https://twitter.com/ayushg1214" target="_blank" style={{ textDecoration: 'underline' }}>
                Twitter
              </Link>
              , working on my side projects, <span style={{ fontStyle: 'italic' }}>or,</span> playing<Text i> Call of Duty</Text>. Read about what I'm learning on my{' '}
              <Link color href="https://blog.ayushgoyal.dev?utm_source=website" target="_blank" style={{ textDecoration: 'underline' }}>
                blog
              </Link>
              . I try to update it every time I make a breakthrough worth mentioning. I'm currently learning more about Software Development & Computer Science fundamentals.
            </CustomText>
          </Center>
          <Center>
            <CustomText size="1.2rem">
              I'm also on{' '}
              <Link color href="https://www.linkedin.com/in/ayush-goyal6624" target="_blank" style={{ textDecoration: 'underline' }}>
                LinkedIn
              </Link>{' '}
              and{' '}
              <Link color href="https://github.com/ayush6624" target="_blank" style={{ textDecoration: 'underline' }}>
                Github
              </Link>
              .
            </CustomText>
          </Center>
        </Grid.Container>
      </div>
      <style global jsx>{`
        .text-ayush {
          max-width: 50vw;
          text-align: center;
        }
        @media (max-width: 650px) and (min-width: 0px) {
          .text-ayush {
            max-width: 90vw;
          }
        }
        @media (max-width: 900px) and (min-width: 650px) {
          .text-ayush {
            max-width: 75vw;
          }
        }
        @media (max-width: 1280px) and (min-width: 900px) {
          .text-ayush {
            max-width: 60vw;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};
export default Home;
